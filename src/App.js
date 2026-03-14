import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// ดึงหน้าต่างๆ มาใช้งาน
import MainPage from "./pages/MainPage";
import Transcript from "./pages/Transcript";
import History from "./pages/History"; // 1. นำเข้าหน้า History ที่สร้างใหม่

function App() {
  return (
    <Router>
      <div className="app-container">
        
        {/* แถบเมนูด้านบน */}
<header className="header">
  {/* เปลี่ยน h1 เป็น Link เพื่อให้กดแล้วกลับหน้าแรก */}
  <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
    <h1>Wongsakon</h1>
  </Link>
  
  <nav>
    <a href="/#home">หน้าแรก</a>
    <a href="/#resume">ประวัติ</a>
    <Link to="/history#internship-section">รายละเอียดประวัติ</Link>
    <Link to="/transcript">Transcript</Link>
    <a href="/#contact">ติดต่อ</a>
  </nav>
</header>

        {/* ระบบจัดการเส้นทาง */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/transcript" element={<Transcript />} />
          
          {/* 3. เพิ่ม Route สำหรับหน้า History */}
          
          <Route path="/history" element={<History />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;