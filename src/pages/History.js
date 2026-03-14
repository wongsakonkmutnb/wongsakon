import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import bgImg2 from "../images/kmutnb2.jpg";
import "../css/History.css"; 

const History = () => {
  const { hash } = useLocation();

  // ฟังก์ชันเลื่อนหน้าจอไปยัง ID ที่ส่งมาใน URL (เช่น #bachelor)
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="history-page" style={{ backgroundImage: `url(${bgImg2})` }}>
      <div className="history-overlay">
        <div className="history-container">
          
          {/* --- ส่วนประสบการณ์ฝึกงาน --- */}
          <section id="internship-section" className="history-block">
            <h2 className="main-title"><i className="fa-solid fa-briefcase"></i> ประสบการณ์ฝึกงาน</h2>
            
            <div id="nt-intern" className="history-card">
              <div className="card-header">
                <h3>บริษัท โทรคมนาคมแห่งชาติจำกัด (มหาชน)</h3>
                <span className="date-badge">2023</span>
              </div>
              <p className="sub-detail">ช่วงวันที่: 27 ก.พ. 2566 - 5 พ.ค. 2566</p>
              <ul className="task-list">
                <li>วางแผนและสำรวจพื้นที่เพื่อติดตั้งอุปกรณ์เครือข่าย</li>
                <li>ดำเนินการติดตั้งอุปกรณ์ Network ภายในอาคาร</li>
                <li>ฝึกทักษะการเชื่อมต่อและเข้าหัวสายไฟเบอร์ออปติก (Fiber Optic)</li>
              </ul>
            </div>

            <div id="hospital-intern" className="history-card">
              <div className="card-header">
                <h3>โรงพยาบาลอัมพวา</h3>
                <span className="date-badge">2021</span>
              </div>
              <p className="sub-detail">ช่วงวันที่: 22 มี.ค. 2564 - 21 พ.ค. 2564</p>
              <ul className="task-list">
                <li>ดูแลและซ่อมบำรุงอุปกรณ์คอมพิวเตอร์และไฟฟ้าเบื้องต้น</li>
                <li>แก้ไขปัญหาเฉพาะหน้าด้านระบบไฟฟ้าภายในหน่วยงาน</li>
                <li>สนับสนุนการดำเนินงานในจุดบริการฉีดวัคซีนโควิด-19 และจัดการระบบฐานข้อมูลผู้ป่วย</li>
              </ul>
            </div>
          </section>

          {/* --- ส่วนประวัติการศึกษา --- */}
          <section id="education-section" className="history-block">
            <h2 className="main-title"><i className="fa-solid fa-graduation-cap"></i> ประวัติการศึกษา</h2>
            
            <div id="bachelor" className="history-card edu-card">
  <div className="year-tag">ปัจจุบัน</div>
  <h3>ปริญญาตรี (วศ.บ. ต่อเนื่อง)</h3>
  <p className="institute">วิทยาลัยเทคโนโลยีอุตสาหกรรม มจพ.</p>
  
  <div className="edu-grid-main">
    <span><strong>ภาควิชา:</strong> เทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์</span>
    <span><strong>แขนง:</strong> คอมพิวเตอร์ (ECT-C)</span>
  </div>

  <div className="transcript-preview">
    <h4 className="semester-title">สรุปรายวิชาที่ลงทะเบียน (ชั้นปีที่ 1-2)</h4>
    
    <div className="transcript-grid">
      {/* ปี 1 เทอม 1 */}
      <div className="semester-box">
        <h5>Year 1 / Semester 1</h5>
        <ul className="course-list">
            <li><span>Computer Programming</span> <strong>B+</strong></li>
            <li><span>ELECTRONICS TECHNOLOGY</span> <strong>A</strong></li>
            <li><span>COMPUTER PROGRAMMING LAB</span> <strong>A</strong></li>
            <li><span>ELECTRONICS TECHNOLOGY LAB</span> <strong>A</strong></li>
            <li><span>	DATABASE & DATA TECHNOLOGY</span> <strong>A</strong></li>
            <li><span>	COMP NETW SYS & DATA COMMU</span> <strong>C+</strong></li>
            <li><span>DATABASE & DATA TECH LAB</span> <strong>A</strong></li>
            <li><span>COMP NETW SYS & DATA LAB</span> <strong>C+</strong></li>
            <li><span>COMMU ENG & REPORT WRITING</span> <strong>B</strong></li>
            <li><span>DIFFERENTIAL EQUATIONS</span> <strong>B+</strong></li>
            <li><span>ENTREPRENEURSHIP</span> <strong>B+</strong></li>
            <li><span>GPA</span> <strong>3.45</strong></li>
        </ul>
      </div>

      {/* ปี 1 เทอม 2 */}
      <div className="semester-box">
        <h5>ปีการศึกษา 2/2567</h5>
        <ul className="course-list">
          <li><span>MICROCONTROLLER SYSTEM</span> <strong>B</strong></li>
          <li><span>OBJECT ORIENTED PROGRAMMING</span> <strong>B+</strong></li>
          <li><span>WEB APPLICATION DEVELOPMENT</span> <strong>C+</strong></li>
          <li><span>LINUX OPERATING SYS & ADMIN</span> <strong>B+</strong></li>
          <li><span>MICROCONTROLLER SYSTEM LAB</span> <strong>B</strong></li>
          <li><span>OBJECT ORIENTED PROGRAM LAB</span> <strong>B+</strong></li>
          <li><span>WEB APPL DEVELOPMENT LAB</span> <strong>C+</strong></li>
          <li><span>LINUX OPG SYS & ADMIN LAB</span> <strong>B+</strong></li>
          <li><span>DATA STRUC & ALGO ANAL</span> <strong>B+</strong></li>
          <li><span>DATA STRUC & ALGO ANAL LAB</span> <strong>B+</strong></li>
          <li><span>MATRICES & VECTOR ANALYSIS</span> <strong>B</strong></li>
          <li><span>DESIGN THINKING</span> <strong>A</strong></li>
          <li><span>GPA</span> <strong>3.28</strong></li>  
        </ul>
      </div>

      {/* ปี 2 เทอม 1 */}
      <div className="semester-box">
        <h5>ปีการศึกษา 1/2568</h5>
        <ul className="course-list">
          <li><span>MOBILE APPL DEVELOPMENT</span> <strong>A</strong></li>
          <li><span>ARTIFICIAL INTELLIGENCE</span> <strong>C+</strong></li>
          <li><span>MOBILE APPL DEVELOPMENT LAB</span> <strong>A</strong></li>
          <li><span>ARTIFICIAL INTELLIGENCE LAB</span> <strong>C+</strong></li>
          <li><span>CLOUD COMPUTING</span> <strong>C+</strong></li>
          <li><span>CLOUD COMPUTING LABORATORY</span> <strong>C+</strong></li>
          <li><span>SCIENCES IN DAILY LIFE</span> <strong>B+</strong></li>
          <li><span>SCI & TECH FOR QUA OF LIFE & SOC</span> <strong>B</strong></li>
          <li><span>ENGL CONVERS FOR DAILY LIFE</span> <strong>B</strong></li>
          <li><span>GPA</span> <strong>3.08</strong></li>
        </ul>
      </div>
    </div>
    
    <div className="gpa-highlight">
      <span>Grade Point Average (GPAX)</span>
      <span className="gpa-value">3.28</span>
    </div>
  </div>
</div>

            <div id="diploma" className="history-card edu-card">
              <div className="year-tag">2024</div>
              <h3>ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)</h3>
              <p className="institute">สาขาวิชาเทคโนโลยีคอมพิวเตอร์ (ฮาร์ดแวร์)</p>
              <p className="gpa-text">เกรดเฉลี่ยสะสม: 3.83</p>
            </div>

            <div id="certificate" className="history-card edu-card">
              <div className="year-tag">2022</div>
              <h3>ประกาศนียบัตรวิชาชีพ (ปวช.)</h3>
              <p className="institute">สาขาวิชาช่างเทคนิคคอมพิวเตอร์</p>
              <p className="gpa-text">เกรดเฉลี่ยสะสม: 3.83</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default History;