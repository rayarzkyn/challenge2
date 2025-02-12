"use client"; // Tambahkan ini agar bisa menggunakan event handler

import React from "react";

export default function StudentTable() {
  const students = [
    { no: 1, nim: "220101001", nama: "Raya", gender: "L", prodi: "Informatika", kelas: "IF-1", semester: "6", alamat: "Jakarta", hobby: "Coding", citaCita: "Software Engineer" },
    { no: 2, nim: "220101002", nama: "Siti", gender: "P", prodi: "Sistem Informasi", kelas: "SI-2", semester: "4", alamat: "Bandung", hobby: "Design UI/UX", citaCita: "UI/UX Designer" },
    { no: 3, nim: "220101003", nama: "Budi", gender: "L", prodi: "Teknik Elektro", kelas: "TE-1", semester: "8", alamat: "Surabaya", hobby: "Robotics", citaCita: "IoT Engineer" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Daftar Mahasiswa</h1>

      <div className="w-full max-w-xs sm:max-w-lg overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-2 px-3 text-left text-xs">No</th>
              <th className="py-2 px-3 text-left text-xs">NIM</th>
              <th className="py-2 px-3 text-left text-xs">Nama</th>
              <th className="py-2 px-3 text-left text-xs sm:table-cell hidden">Gender</th>
              <th className="py-2 px-3 text-left text-xs sm:table-cell hidden">Prodi</th>
              <th className="py-2 px-3 text-left text-xs sm:table-cell hidden">Kelas</th>
              <th className="py-2 px-3 text-left text-xs sm:table-cell hidden">Semester</th>
              <th className="py-2 px-3 text-left text-xs sm:hidden">Details</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {students.map((student, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-3">{student.no}</td>
                <td className="py-2 px-3">{student.nim}</td>
                <td className="py-2 px-3">{student.nama}</td>
                <td className="py-2 px-3 sm:table-cell hidden">{student.gender}</td>
                <td className="py-2 px-3 sm:table-cell hidden">{student.prodi}</td>
                <td className="py-2 px-3 sm:table-cell hidden">{student.kelas}</td>
                <td className="py-2 px-3 sm:table-cell hidden">{student.semester}</td>
                <td className="py-2 px-3 sm:hidden">
                  <button
                    className="text-blue-600 underline text-xs"
                    onClick={() => alert(`Alamat: ${student.alamat}\nHobby: ${student.hobby}\nCita-cita: ${student.citaCita}`)}
                  >
                    Lihat Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
