"use client";
import { uploadFileToS3 } from "@/lib/ImageUpload";
import React, { useState } from "react";

export default function UploadImage() {
    const [formData, setFormData] = useState({
        eventId: "",
        regNo: "",
        name: "",
        department: "",
        instructorImage: null,
    });
    const [previewImage, setPreviewImage] = useState(null);
    const [statusMessage, setStatusMessage] = useState("");

    const departments = [
        "Sponsorship Committee",
        "Promotion and Publicity Committee (In Campus & Out Campus)",
        "Accommodation (Sports and Cultural)",
        "First Aid Committee (Sports and Cultural)",
        "Prize and Certificate Distribution (Sports & Cultural)",
        "Food Committee (Sports and Cultural)",
        "Non-Prime Events (Outdoor games/fun activities)",
        "Documentation Committee (Cultural)",
        "Disciple Committee (Sports and Cultural)",
        "Finance Committee (Sports and Cultural)",
        "Website, App development, Email service, and Technical support committee",
        "Food stall/ Other display stall committee",
        "Help desk committee (Sports and Cultural)",
        "Registration Committee (Sports and Cultural)",
        "Social media Committee (Sports and Cultural)",
        "Transport Committee (Sports and Cultural)",
        "Pro Show Stage Committee",
        "Non-prime and Other event stages/stalls",
        "Souvenir preparation committee",
        "Guest care committee",
        "Purchase Committee",
        "Technical Design Committee - Posters/ID card/Certificates",
        "Cultural overall Incharge",
        "Cultural Prime V- Step Up Dance Solo – Classic",
        "Cultural Prime V- Step Up Dance Solo – Modern",
        "Cultural Prime V- Step Up Dance Group – Classic",
        "Cultural Prime V- Step Up Dance Group – Modern",
        "Cultural Prime V- Rhythm Singing Solo – Classic",
        "Cultural Prime V- Rhythm Singing Solo – Modern",
        "Cultural Prime V- Rhythm Singing Group – Classic",
        "Cultural Prime V- Rhythm Singing Group – Modern",
        "Cultural Prime V- Battle of Bands Classical",
        "Cultural Prime V- Battle of Bands Western",
        "Cultural Prime -V-Glam Fashion Show Traditional",
        "Cultural Prime -V-Glam Fashion Show Western",
        "Cultural Prime - V Stand-up Comedy",
        "Cultural Prime - Nukkad Natak Social Theme",
        "Cultural Prime - State-Wise Rally",
        "VGlam-Designers Sustainable Products",
        "Sports Overall Incharge",
        "Sports - Scrutiny Committee",
        "Sports Officials/Umpires/Referees Committee",
        "Sports Equipment and Ground Marking Committee",
        "Sports – Fixtures and Decoration",
        "Sports- Documentation",
        "PR and Digital Media Committee",
        "Decoration",
        "Cultural- Programm Committee",
        "Control Room"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFormData((prev) => ({
                ...prev,
                instructorImage: selectedFile,
            }));
            setPreviewImage(URL.createObjectURL(selectedFile));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMessage("Processing...");

        if (!formData.instructorImage) {
            setStatusMessage("Please upload an image.");
            return;
        }

        const image = await uploadFileToS3(formData.instructorImage);

        try {
            const response = await fetch("/api/imageupload", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${process.env.NEXT_API_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    eventId: formData.eventId,
                    regNo: formData.regNo,
                    name: formData.name,
                    department: formData.department,
                    image,
                }),
            });

            const data = await response.json();
            setStatusMessage(data.message || "Image uploaded successfully.");
            setFormData({
                eventId: "",
                regNo: "",
                name: "",
                department: "",
                instructorImage: null,
            });
            setPreviewImage(null);
        } catch (error) {
            console.error("Error while uploading Image:", error);
            setStatusMessage("Error occurred while uploading the Image.");
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-md w-full max-w-sm sm:max-w-md">
                <h1 className="text-2xl font-bold text-white mb-6 text-center">
                    Upload Poster
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300">
                            Email Id
                        </label>
                        <input type="text" name="eventId" value={formData.eventId} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none sm:text-sm" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">
                            Registration Number
                        </label>
                        <input type="text" name="regNo" value={formData.regNo} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none sm:text-sm" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">
                            Name
                        </label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none sm:text-sm" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">
                            Department
                        </label>
                        <select name="department" value={formData.department} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none sm:text-sm" required>
                            <option value="">Select Department</option>
                            {departments.map((dept, index) => (
                                <option key={index} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">
                            Photo
                        </label>
                        <div className={`mt-1 w-full h-40 sm:h-48 flex items-center justify-center border-2 ${previewImage ? "border-gray-600" : "border-dashed border-gray-500"} rounded-md bg-gray-700 relative`}>
                            {previewImage ? (
                                <img src={previewImage} alt="Selected" className="h-full w-full object-cover rounded-md" />
                            ) : (
                                <label className="flex flex-col items-center justify-center cursor-pointer">
                                    <span className="text-gray-400 text-lg sm:text-2xl">+</span>
                                    <span className="text-gray-400 text-sm sm:text-base">Upload an image</span>
                                </label>
                            )}
                            <input type="file" name="instructorImage" accept="image/*" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" required />
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none">
                        Upload Image
                    </button>
                </form>
                {statusMessage && (
                    <p className="mt-4 text-sm text-center text-gray-400">{statusMessage}</p>
                )}
            </div>
        </div>
    );
}