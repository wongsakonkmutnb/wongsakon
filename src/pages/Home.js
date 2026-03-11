import React from "react";
import profileImg from "../images/w1.png";
import bgImg from "../images/kmutnb.jpg"; // ดึงรูปพื้นหลังเข้ามา

function Home() {
  return (
    <section 
      id="home" 
      className="hero-section" 
      style={{ 
        minHeight: "100vh",
        backgroundImage: `url(${bgImg})`, // ตั้งค่ารูปพื้นหลัง
        backgroundSize: "cover", // ให้รูปขยายเต็มพื้นที่
        backgroundPosition: "center" // จัดรูปให้อยู่กึ่งกลาง
      }}
    >
      {/* กล่องสีขาวโปร่งแสงที่เพิ่มเข้ามาใหม่ */}
      <div className="hero-content">
        <div className="hero-text">
          <h2>Hello My name is<br />วงศกร รอดประเสริฐ</h2>
          <p>
            กำลังศึกษาอยู่ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ สาขาวิชาเทคโนโลยีอิเล็กทรอนิกส์(ECT)
            รหัสนักศึกษา 6703052411121
          </p>
          <a href="/#contact" className="btn-primary">
            ติดต่องานฉัน
          </a>
        </div>
        <div className="hero-image">
          <img src={profileImg} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default Home;