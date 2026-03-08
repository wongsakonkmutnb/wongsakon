import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ดึง Component ทั้ง 3 ส่วนมาใช้งาน
import Home from "./Home";
import Resume from "./Resume";
import Contact from "./Contact";

function MainPage() {
  const location = useLocation();

  // ฟังก์ชันนี้จะคอยเช็กว่าถ้า URL มี # ต่อท้าย (เช่น /#resume) ให้เลื่อนจอไปตรงนั้น
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      {/* เอา 3 หน้ามาเรียงต่อกันเลย */}
      <Home />
      <Resume />
      <Contact />
    </div>
  );
}

export default MainPage;