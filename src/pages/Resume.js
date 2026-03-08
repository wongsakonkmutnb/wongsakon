import React from "react";
import bgImg2 from "../images/kmutnb2.jpg";

function Resume() {
  return (
    <section 
      id="resume" 
      className="resume-section" 
      style={{ 
        minHeight: "80vh",
        backgroundImage: `url(${bgImg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="resume-container">
        <h2>ประสบการณ์ฝึกงานและการศึกษา</h2>
        <div className="resume-grid">
          
          <div className="resume-card">
            <h3 className="section-title">ประสบการณ์ฝึกงาน</h3>

            <div className="resume-item">
              <h4>บริษัท โทรคมนาคมแห่งชาติจำกัด(มหาชน)</h4>
              <span className="date">27/2/2023 - 5/5/2023</span>  
              <p>วางแผนติดตั้งอุปกรณ์เครือข่าย</p>
              <p>ติดตั้งอุปกรณ์เครือข่าย</p>
              <p>ต่อสายไฟเบอร์ออปติก</p>
            </div>

            <div className="resume-item">
              <h4>โรงพยาบาลอัมพวา</h4>
              <span className="date">22/3/2021 - 21/5/2021</span>  
              <p>ช่วยงานในแผนกต่างๆ ซ่อมอุปกรณ์</p>
              <p>ช่วยแก้ปัญหาไฟดับที่โรงพยาบาล</p>
              <p>ช่วยดำเนินงานต่างๆ เช่น ดูแลความเรียบร้อยในงานฉีดวัคซีนโควิด-19</p>
            </div>

          </div>

          <div className="resume-card">
            <h3 className="section-title">ประวัติการศึกษา</h3>

            <div className="resume-item">
              <h4>ปริญญาตรี</h4>
              <span className="date">กำลังศึกษา</span>
              <p>สาขาวิชา: </p>
              <p>สาขางาน: </p>
              <p>เกรดเฉลี่ย 3.83</p>
            </div>

            <div className="resume-item">
              <h4>ประกาศนียบัตรวิชาชีพชั้นสูง</h4>
              <span className="date">จบการศึกษาปี 2024</span>
              <p>สาขาวิชา: เทคโนโลยีคอมพิวเตอร์</p>
              <p>สาขางาน: คอมพิวเตอร์ฮาร์ดแวร์</p>
              <p>เกรดเฉลี่ย 3.83</p>
            </div>

            <div className="resume-item">
              <h4>ประกาศนียบัตรวิชาชีพ</h4>
              <span className="date">จบการศึกษาปี 2022</span>
              <p>สาขาวิชา: ช่างเทคนิคคอมพิวเตอร์</p>
              <p>สาขางาน: เทคนิคคอมพิวเตอร์</p>
              <p>เกรดเฉลี่ย 3.83</p>
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
}

export default Resume;