import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../images/w1.png";

function Home() {
  return (
    <section className="hero-section" style={{ minHeight: "80vh" }}>
      <div className="hero-text">
        <h2>
          สวัสดี! ฉันชื่อ
          <br />
          วงศกร รอดประเสริฐ
        </h2>
        <p>
          ฉันคือ Web Developer ยินดีต้อนรับสู่พอร์ตโฟลิโอของฉัน
          ฉันรักในการสร้างสรรค์ประสบการณ์บนเว็บไซต์ที่ใช้งานง่ายและสวยงาม
        </p>
        <Link to="/contact" className="btn-primary">
          ติดต่องานฉัน
        </Link>
      </div>
      <div className="hero-image">
        <img src={profileImg} alt="Profile" />
      </div>
    </section>
  );
}

export default Home;