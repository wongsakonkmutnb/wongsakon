import React from "react";
// นำเข้ารูปภาพทรานสคริปต์ของคุณจากโฟลเดอร์ images (ถ้ามีรูปจริงให้เปลี่ยนชื่อไฟล์ตามนี้ครับ)
// import transImg1 from "../images/transcript1.jpg";

function Transcript() {
  return (
    <section className="resume-section" style={{ minHeight: "80vh" }}>
      <h2>ผลการเรียน (Transcript)</h2>
      <p style={{ marginBottom: "30px", color: "#666" }}>
        เอกสารแสดงผลการเรียนและใบรับรองต่างๆ
      </p>
      
      {/* ใช้ Grid ในการจัดเรียงรูปภาพ */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        
        {/* รูปที่ 1 */}
        <div style={{ width: "100%", maxWidth: "600px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          {/* เปลี่ยน src เป็น {transImg1} เมื่อคุณมีรูปจริง */}
          <img 
            src="https://via.placeholder.com/600x800?text=Transcript+Page+1" 
            alt="Transcript 1" 
            style={{ width: "100%", display: "block", borderRadius: "8px" }}
          />
        </div>


      </div>
    </section>
  );
}

export default Transcript;