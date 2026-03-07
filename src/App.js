import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// นำเข้า (Import) หน้าต่างๆ ที่เราแยกไฟล์ไว้
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Transcript from "./pages/Transcript";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="app-container">
        
        {/* แถบเมนูด้านบน */}
        <header className="header">
          <h1>Wongsakon</h1>
          <nav>
            <Link to="/">หน้าแรก</Link>
            <Link to="/resume">ประวัติ</Link>
            <Link to="/transcript">ผลการเรียน</Link>
            <Link to="/contact">ติดต่อ</Link>
          </nav>
        </header>

        {/* ระบบเปลี่ยนหน้า */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/transcript" element={<Transcript />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;