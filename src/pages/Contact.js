import React from "react";

function Contact() {
  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <footer className="footer" style={{ width: "100%", padding: "80px 20px" }}>
        <h2>สนใจร่วมงานกันไหม?</h2>
        <p>อีเมล: your.email@example.com | โทร: 080-XXX-XXXX</p>
        <p className="copyright">
          &copy; 2026 วงศกร รอดประเสริฐ. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Contact;