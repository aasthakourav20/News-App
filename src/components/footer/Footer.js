import React from "react";

 import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; 2024 News App. All rights reserved.</p>
        <ul className="footer-links">
        <li className="">
          <a className="" href="#">About</a>
        </li>
        <li className="">
          <a className="" href="#">Services</a>
        </li>
        <li className="">
          <a className="" href="#">Contact</a>
        </li>
        <li className="">
          <a className="" href="#">FAQs</a>
        </li>
       
        </ul>
        <a href="#" className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </a>
      </div>
    </div>
  );
};

export default Footer;