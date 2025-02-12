import React from "react";
import { FaUser, FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";

const sections = [
  { id: "about", title: "About Me", icon: <FaUser className="text-indigo-600" />, content: "Saya adalah Raya Rizkyananp, mahasiswa semester Sistem Informasi 4 di universitas masoem" },
  { id: "skills", title: "Skills", icon: <FaTools className="text-green-600" />, content: "JavaScript, HTML, php, css" },
  { id: "services", title: "Services", icon: <FaBriefcase className="text-yellow-600" />, content: "Saya Bisa Mengikuti Perkembangan Teknologi AI" },
  { id: "portfolio", title: "Portfolio", icon: <FaBriefcase className="text-purple-600" />, content: "Proyek yang telah saya kerjakan adalah membuat website penjualan handphone" },
  { id: "contact", title: "Contact", icon: <FaEnvelope className="text-blue-600" />, content: "Email: rzkynraya15@gmail.com | WhatsApp: 08814532441" },
];

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800">CV Online</h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg space-y-6">
        {/* Gambar profil dengan path yang benar */}
        <img
          src="/profil.jpeg"
          alt="Profil"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-600 shadow-md"
        />

        {/* Menampilkan setiap bagian */}
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="p-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-black mb-2">
              {section.icon} <span className="text-lg text-indigo-700">{section.title}</span>
            </h2>
            <p className="mt-2 text-gray-700">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}