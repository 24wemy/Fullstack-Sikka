import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userData] = useState(JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              {/* Nama */}
              <tr>
                <td className="px-4 py-2 font-medium text-gray-700">Nama</td>
                <td className="px-4 py-2 text-gray-600">{userData.nama}</td>
              </tr>

              {/* Nomor Induk Siswa */}
              <tr>
                <td className="px-4 py-2 font-medium text-gray-700">Nomor Induk Siswa</td>
                <td className="px-4 py-2 text-gray-600">{userData.nomor_induk_siswa}</td>
              </tr>

              {/* Jurusan */}
              <tr>
                <td className="px-4 py-2 font-medium text-gray-700">Jurusan</td>
                <td className="px-4 py-2 text-gray-600">{userData.jurusan}</td>
              </tr>

              {/* Kelas */}
              <tr>
                <td className="px-4 py-2 font-medium text-gray-700">Kelas</td>
                <td className="px-4 py-2 text-gray-600">{userData.kelas}</td>
              </tr>

              {/* Alamat */}
              <tr>
                <td className="px-4 py-2 font-medium text-gray-700">Alamat</td>
                <td className="px-4 py-2 text-gray-600">{userData.alamat}</td>
              </tr>

              {/* Nama Ayah */}
              <tr>
                <td className="px-4 py-2 font-medium text-gray-700">Nama Ayah</td>
                <td className="px-4 py-2 text-gray-600">{userData.nama_ayah}</td>
              </tr>

              {/* Nama Ibu */}
              <tr>
                <td className="px-4 py-2 font-medium text-gray-700">Nama Ibu</td>
                <td className="px-4 py-2 text-gray-600">{userData.nama_ibu}</td>
              </tr>

              {/* Nama Wali */}
              <tr>
                <td className="px-4 py-2 font-medium text-gray-700">Nama Wali</td>
                <td className="px-4 py-2 text-gray-600">{userData.nama_wali}</td>
              </tr>

              {/* Nomor Telepon */}
              <tr>
                <td className="px-4 py-2 font-medium text-gray-700">Nomor Telepon</td>
                <td className="px-4 py-2 text-gray-600">{userData.no_tlp}</td>
              </tr>

              {/* Nomor Telepon Orangtua */}
              <tr>
                <td className="px-4 py-2 font-medium text-gray-700">Nomor Telepon Orangtua</td>
                <td className="px-4 py-2 text-gray-600">{userData.no_tlp_orangtua}</td>
              </tr>

              {/* Nomor Telepon Wali */}
              <tr>
                <td className="px-4 py-2 font-medium text-gray-700">Nomor Telepon Wali</td>
                <td className="px-4 py-2 text-gray-600">{userData.no_tlp_wali}</td>
              </tr>

              {/* Jenis Kelamin */}
              <tr>
                <td className="px-4 py-2 font-medium text-gray-700">Jenis Kelamin</td>
                <td className="px-4 py-2 text-gray-600">{userData.jenis_kelamin}</td>
              </tr>

              {/* Agama */}
              <tr>
                <td className="px-4 py-2 font-medium text-gray-700">Agama</td>
                <td className="px-4 py-2 text-gray-600">{userData.agama}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
