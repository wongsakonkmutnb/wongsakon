import React from "react";
import { Link } from "react-router-dom"; // นำเข้า Link
import bgImg2 from "../images/kmutnb2.jpg";

function Resume() {
  return (
    <section id="resume" className="resume-section" style={{ 
        minHeight: "80vh", backgroundImage: `url(${bgImg2})`, 
        backgroundSize: "cover", backgroundPosition: "center" 
    }}>
      <div className="resume-container">
        <h2>ประสบการณ์ฝึกงานและการศึกษา</h2>
        <div className="resume-grid">
          
          <div className="resume-card">
            {/* กดหัวข้อไปหน้า History ส่วนฝึกงาน */}
            <Link to="/history#internship-section" style={{ textDecoration: 'none' }}>
              <h3 className="section-title">ประสบการณ์ฝึกงาน</h3>
            </Link>

            <div className="resume-item">
              <Link to="/history#nt-intern" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h4>บริษัท โทรคมนาคมแห่งชาติจำกัด (มหาชน)</h4>
                <span className="date">2023</span>  
              </Link>
            </div>

            <div className="resume-item">
              <Link to="/history#hospital-intern" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h4>โรงพยาบาลอัมพวา</h4>
                <span className="date">2021</span>  
              </Link>
            </div>
          </div>

          <div className="resume-card">
            <Link to="/history#education-section" style={{ textDecoration: 'none' }}>
              <h3 className="section-title">ประวัติการศึกษา</h3>
            </Link>

            <div className="resume-item">
              <Link to="/history#bachelor" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h4>ปริญญาตรี</h4>
                <span className="date">กำลังศึกษา (มจพ.)</span>
              </Link>
            </div>

            <div className="resume-item">
              <Link to="/history#diploma" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h4>ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)</h4>
                <span className="date">จบปี 2024</span>
              </Link>
            </div>

            <div className="resume-item">
              <Link to="/history#certificate" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h4>ประกาศนียบัตรวิชาชีพ (ปวช.)</h4>
                <span className="date">จบปี 2022</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Resume;