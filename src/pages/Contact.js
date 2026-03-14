import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import bgImg from "../images/r1.jpg"; 
import "../css/Contact.css"; // เรียกใช้ไฟล์ CSS ที่สร้างใหม่

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_st44rra', 
      'template_reioh3d', 
      form.current, 
      'AMzP9APxQvAEYomEh'
    )
    .then((result) => {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000); // หายไปหลังจาก 5 วินาที
    }, (error) => {
        setStatus('error');
    });
  };

  return (
    <section 
      id="contact" 
      className="contact-section"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="contact-card">
        {/* Info Side */}
        <div className="info-side">
          <h2>Contact Info</h2>
          <p>
            สนใจร่วมงานหรือสอบถามข้อมูลเพิ่มเติม สามารถติดต่อผมได้โดยตรงผ่านช่องทางโซเชียล 
            หรือฝากข้อความไว้ในฟอร์มด้านข้างได้เลยครับ ยินดีที่ได้รู้จักทุกคน!
          </p>

          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <span>s6703052411121@email.kmutnb.ac.th</span>
          </div>
          
          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <span>097-010-7866</span>
          </div>

          <div className="social-links">
            <a href="https://www.facebook.com/MinAMotO.36/" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://github.com/wongsakonkmutnb" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        {/* Form Side */}
        <div className="form-side">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <label>ชื่อของคุณ</label>
              <input type="text" name="user_name" placeholder="ระบุชื่อ-นามสกุล" required />
            </div>
            
            <div className="form-group">
              <label>อีเมลติดต่อ</label>
              <input type="email" name="user_email" placeholder="example@email.com" required />
            </div>

            <div className="form-group">
              <label>ข้อความ</label>
              <textarea name="message" rows="5" placeholder="คุณต้องการติดต่อเรื่องอะไร..." required></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <span><i className="fa-solid fa-spinner fa-spin"></i> กำลังส่งข้อมูล...</span>
              ) : 'ส่งข้อความ'}
            </button>

            {status === 'success' && (
              <div className="status-msg status-success">
                ✅ ส่งอีเมลสำเร็จแล้ว! จะติดต่อกลับโดยเร็วที่สุดครับ
              </div>
            )}
            {status === 'error' && (
              <div className="status-msg status-error">
                ❌ เกิดข้อผิดพลาด กรุณาตรวจสอบข้อมูลหรือลองใหม่อีกครั้ง
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;