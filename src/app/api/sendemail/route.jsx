import nodemailer from "nodemailer";
import QRCode from "qrcode";
import fs from "fs";
import path from "path";

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
    secure: false,
    tls: {
        rejectUnauthorized: false,
    },
});

const generateQRCodeFile = async (data, filename) => {
    return new Promise((resolve, reject) => {
        QRCode.toFile(filename, JSON.stringify(data), (err) => {
            if (err) reject(err);
            else resolve(filename);
        });
    });
};

export async function POST(req) {
    try {
        const body = await req.json(); // Parse JSON body
        const token = req.headers.get("Authorization");
        const { registrations } = body;

        if (!token) {
            return new NextResponse(JSON.stringify({ message: "Authorization header is missing" }), {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        const token_parts = token.split(' ');

        if (token_parts.length !== 2 || token_parts[0] !== "Bearer" || !token_parts[1] || token_parts[1] !== process.env.NEXT_API_TOKEN) {
            return new NextResponse(JSON.stringify({ message: "Invalid Authorization header format" }), {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        if (!registrations || !Array.isArray(registrations)) {
            return new Response(JSON.stringify({ error: "Invalid data format" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        let startTime = Date.now();

        for (const user of registrations) {
            if (Date.now() - startTime >= 12000) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                startTime = Date.now();
            }

            const filePath = path.join("/tmp", `${user.invoiceId}.png`);

            await generateQRCodeFile(
                { invoiceId: user.invoiceId, event: user.event, date: "07-03-2025" },
                filePath
            );

            const mailOptions = {
                from: `VITopia Tickets <${process.env.EMAIL_FROM}>`,
                to: user.email,
                subject: `Entry Pass - VITopia 2025`,
                html: `<div style='background-color: #1a1a1a; padding: 20px; border-radius: 10px; color: white;'>
                    <h2 style='color: #ffcc00; text-align: center;'>Entry Pass - Day 1</h2>
                    <p><strong>Category:</strong> ${user.event}</p>
                    <p><strong>Attendee:</strong> ${user.name}</p>
                    <p><strong>Invoice ID:</strong> ${user.invoiceId}</p>
                    <div style='text-align: center;'>
                        <img src="cid:qrcode_cid" alt="QR Code" style="width: 200px; height: 200px;">
                    </div>
                    <p style='text-align: center;'>Verify this QR at The Event Entrance</p>
                </div>`,
                attachments: [{
                    filename: `${user.invoiceId}.png`,
                    path: filePath,
                    cid: "qrcode_cid",
                }],
            };

            await transporter.sendMail(mailOptions);
            fs.unlinkSync(filePath);
        }

        return new Response(JSON.stringify({ message: "Emails sent successfully." }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error sending emails:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
