import React, { useState } from 'react';
import './App.css';
import emailjs from 'emailjs-com';
import Stats from './Stats';  
import ClientsCarousel from './ClientsCarousel';

import AOS from 'aos';
import 'aos/dist/aos.css';

import logo from './images/only_logo_w_text.png'; // Adjust if your path differs
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function App() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_rkjn98a',
    'template_udnfqw8',
    e.target,
    'JYGJTE681x_zA2JSE'
  )
  .then((result) => {
    alert("Thank you! Your message has been sent.");
    setShowModal(false);
  }, (error) => {
    alert("Oops, something went wrong. Please try again.");
    console.log(error.text);
  });
};


  return (
    <div className="App">
      <nav>
        <img src={logo} alt="London Times Accountancy Logo" className="logo" />
        <h1>London Times Accountancy</h1>
      </nav>

      <header className="hero">
        <div className="hero-overlay">
          <h2>We Use Our Assets to Minimise Your Liabilities.</h2>
          <p>Professional, reliable, and tailored accounting solutions for your business growth.</p>
          <button className="cta-button" onClick={() => setShowModal(true)}>Book Free Consultation</button>
        </div>
      </header>

      <section className="services">
        <h2>Our Key Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Bookkeeping & VAT</h3>
            <p>Accurate bookkeeping and VAT submissions ensuring HMRC compliance.</p>
          </div>
          <div className="card">
            <h3>Payroll & Tax</h3>
            <p>Efficient payroll management and corporation/self-assessment tax filings.</p>
          </div>
          <div className="card">
            <h3>Advisory</h3>
            <p>Management accounts, cashflow, and strategic business advisory services.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>London Times Accountancy is a trusted firm offering comprehensive accounting and tax solutions to individuals and businesses across the UK. With over 15 years of expertise, we specialise in supporting sole traders, partnerships, and limited companies with practical, tailored advice to help them grow and remain compliant.

        Our services range from bookkeeping, payroll, VAT returns, and management accounts to corporation tax and self-assessment filings. We understand that every client’s needs are unique, and we pride ourselves on delivering personalised, timely, and proactive support.

        At London Times Accountancy, our mission is to simplify your financial responsibilities so you can focus on what truly matters – running and expanding your business with confidence.</p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: info@londontimesaccountancy.co.uk</p>
        <p>Phone: +44 20 xxxx xxxx</p>
        <button className="cta-button" onClick={() => setShowModal(true)}>Book Free Consultation</button>
      </section>

      <ClientsCarousel />
      <Stats />

      <footer>
        {/* <p>© {new Date().getFullYear()} London Times Accountancy Services Ltd. All rights reserved.</p>
        <div className="visitor-counter">
          <a href="https://www.hitwebcounter.com" target="_blank">
<img src="https://hitwebcounter.com/counter/counter.php?page=21140910&style=0001&nbdigits=5&type=page&initCount=0" title="Counter Widget" Alt="Visit counter For Websites"   border="0" /></a>          
        </div> */}
      </footer>
    

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Book a Free Consultation</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Your Phone Number" />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
            <button className="close-button" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
