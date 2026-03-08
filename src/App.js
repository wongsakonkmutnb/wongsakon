import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// ดึงหน้าหลัก(แบบเลื่อนยาว) และ หน้าผลการเรียน(แยกหน้า) มาใช้
import MainPage from "./pages/MainPage";
import Transcript from "./pages/Transcript";

function App() {
  return (
    <Router>
      <div className="app-container">
        
        {/* แถบเมนูด้านบน */}
        <header className="header">
          <h1>Wongsakon</h1>
          <nav>
            {/* ใช้ a href="/#..." เพื่อให้วิ่งไปหาส่วนนั้นๆ ในหน้าหลัก */}
            <a href="/#home">หน้าแรก</a>
            <a href="/#resume">ประวัติ</a>
            <a href="/#contact">ติดต่อ</a>
            {/* ส่วนผลการเรียนใช้ Link เพื่อเปลี่ยนไปอีกหน้า */}
            <Link to="/transcript">Transcript</Link>

          </nav>
        </header>

        {/* ระบบจัดการเส้นทาง */}
        <Routes>
          {/* หน้าแรกจะแสดง MainPage (ที่รวม Home, Resume, Contact ไว้) */}
          <Route path="/" element={<MainPage />} />
          
          {/* หน้าผลการเรียนแยกไปอีก URL นึง */}
          <Route path="/transcript" element={<Transcript />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;