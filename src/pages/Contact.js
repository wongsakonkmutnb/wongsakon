import React from "react";

function Contact() {
  return (
    // เพิ่ม id="contact" ตรงนี้
    <div id="contact" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <footer className="footer" style={{ width: "100%", padding: "80px 20px" }}>
        <h2>สนใจร่วมงานติดต่อได้ที่นี่</h2>
        <p>email: wongsakon269@gmail.com | Tel: 097-010-7866</p>
        <a href="https://www.facebook.com/MinAMotO.36/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <p className="copyright">
          &copy; 2026 วงศกร รอดประเสริฐ. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Contact;