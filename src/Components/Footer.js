import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import bird from "../Assets/WhatsApp Image 2024-04-25 at 10.07.31 PM.jpeg";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Company</span>
          <span>Sell on</span>
          <span>Careers</span>
          <span>Ecoyaan</span>
        </div>
        <div className="footer-section-columns">
          <span>+91 9980490777</span>
          <span>Mangalore</span>
          <span>Dakshina Kannada-575006</span>
          <span>Karnataka,India</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
