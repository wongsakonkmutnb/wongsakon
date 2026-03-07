import React from "react";

function Resume() {
  return (
    <section className="resume-section" style={{ minHeight: "80vh" }}>
      <h2>ประสบการณ์และการศึกษา</h2>
      <div className="resume-grid">
        <div className="resume-card">
          <h3 className="section-title">ประสบการณ์ทำงาน</h3>
          <div className="resume-item">
            <h4>ตำแหน่งงาน | ชื่อบริษัท</h4>
            <span className="date">2024 - ปัจจุบัน</span>
            <p>
              อธิบายรายละเอียดงานที่คุณทำ ความรับผิดชอบหลัก
              และผลงานที่โดดเด่น...
            </p>
          </div>
        </div>

        <div className="resume-card">
          <h3 className="section-title">ประวัติการศึกษา</h3>
          <div className="resume-item">
            <h4>ปริญญาตรี สาขา... | มหาวิทยาลัย...</h4>
            <span className="date">จบการศึกษาปี 2023</span>
            <p>
              เกรดเฉลี่ย โครงการจบ (Senior Project) หรือกิจกรรมที่โดดเด่น...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;