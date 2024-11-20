import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navbar tetap fix di atas */}
      <Navbar />

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar tetap fix di kiri */}
        <Sidebar />

        {/* Konten utama yang bisa discroll */}
        <main
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto", // Membuat konten utama bisa discroll
            height: "calc(100vh - 80px)", // Mengatur tinggi main untuk menyisakan ruang untuk navbar dan footer
            marginLeft: "200px", // Menyediakan ruang untuk Sidebar (sesuaikan dengan lebar sidebar)
          }}
        >
          {children}
        </main>
      </div>

      {/* Footer tetap fix di bawah */}
      <Footer />
    </div>
  );
};

export default MainLayout;
