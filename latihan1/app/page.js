import React from "react";
import { FaUser, FaTools, FaBriefcase, FaEnvelope, FaFacebook } from "react-icons/fa";

const sections = [
  { id: "about", title: "About Me", icon: <FaUser className="text-cyan-600" />, content: "Saya adalah mahasiswa sistem informasi semester 4 di MU" },
  { id: "skills", title: "Skills", icon: <FaTools className="text-cyan-600" />, content: "JavaScript, HTML, PHP, CSS" },
  { id: "services", title: "Services", icon: <FaBriefcase className="text-cyan-600" />, content: "Bisa Mengikuti Perkembangan Teknolo0gi" },
  { id: "portfolio", title: "Portfolio", icon: <FaBriefcase className="text-cyan-600" />, content: "Proyek yang telah saya kerjakan adalah membuat website jual beli komputer, aplikasi pencatatan nilai" },
  { id: "contact", title: "Contact", icon: <FaEnvelope className="text-cyan-600" />, content: (
      <div>
        <p>Email: rzkynraya15@gmail.com | WhatsApp: 08814563221</p>
        <p>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-cyan-600 text-2xl" /> Facebook
          </a>
        </p>
      </div>
    ) 
  },
];

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800">CV Online</h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg space-y-6">
        {/* Gambar profil dengan path yang benar */}
        <img src="/profil.jpeg" alt="Profile" />


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
