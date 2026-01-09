"use client";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";


const GeneratedTickets1 = ({ ticketData }) => {
  const ticketRef = useRef(null);

  const downloadTicket = async () => {
    if (!ticketRef.current) return;

    try {
      const canvas = await html2canvas(ticketRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
      });

      const ticketAspectRatio = canvas.width / canvas.height;
      const pdfWidth = 180;
      const pdfHeight = pdfWidth / ticketAspectRatio;

      const pdf = new jsPDF({
        orientation: pdfWidth > pdfHeight ? "landscape" : "portrait",
        unit: "mm",
        format: [pdfWidth, pdfHeight],
      });

      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        0,
        0,
        pdfWidth,
        pdfHeight
      );

      // Automatically trigger the download
      pdf.save(`Cloak_Room.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };
  return (
    <div className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          Cloak Room Passes
        </h2>
        <button
          onClick={downloadTicket}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div>
      {/* Ticket Content - Theme Unchanged */}
      <div ref={ticketRef} className="flex flex-col gap-10">
        {ticketData.map((ticket, index) => (
          <div
            className="border-2 border-gray-200 p-4 sm:p-6 rounded-lg relative bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940')] bg-cover"
            key={index}
          >
            <div className="bg-white/90 p-4 sm:p-6 rounded-lg backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr,auto] gap-4 sm:gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-600 break-words">
                      {ticket.event}
                    </h3>
                    <p className="text-gray-600 break-words">
                      Name: <span className="font-semibold">{ticket.name}</span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-black">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">Room:</span>
                      <span className="font-semibold">{ticket.room}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">Token Number:</span>
                      <span className="font-semibold">{ticket.locker}</span>
                    </div>
                  </div>
                  {/* <div className="flex flex-wrap gap-4 text-black">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">University/College Name:</span>
                      <span className="font-semibold">{ticket.universityName}</span>
                    </div>
                  </div> */}
                </div>
                <div className="bg-white p-2 rounded-lg mx-auto sm:mx-0">
                  <QRCodeSVG value={ticket.qrValue} size={120} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneratedTickets1;
