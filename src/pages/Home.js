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
          <h2>MY Profile<br />วงศกร รอดประเสริฐ</h2>
          <p>
            สวัสดีครับ ผมชื่อ นายวงศกร รอดประเสริฐ <br/>
            กำลังศึกษาอยู่ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ สาขาวิชาเทคโนโลยีอิเล็กทรอนิกส์(ECT)
            รหัสนักศึกษา 6703052411121 <br/>
            ผมมีประสบการณ์ในการใช้เทคโนโลยีต่างๆ เช่น HTML, CSS, JavaScript, React, Firebase, Node.js, java, C#, Microsoft, Microcontroler, IoT<br/> ซึ่งผมได้เรียนรู้และพัฒนาทักษะเหล่านี้ผ่านการศึกษาและการฝึกงานในสถานที่ต่างๆ ผมมีความสนใจในการพัฒนาเว็บแอปพลิเคชันและการทำงานกับเทคโนโลยีใหม่ๆ 
            เพื่อสร้างสรรค์สิ่งที่มีประโยชน์และน่าสนใจในโลกดิจิทัลนี้
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