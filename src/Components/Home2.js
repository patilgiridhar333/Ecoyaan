import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Navbar from "./Navbar";
import foot from "../Assets/WhatsApp Image 2024-04-25 at 9.59.31 PM.jpeg";
import roller from "../Assets/WhatsApp Image 2024-04-25 at 9.59.31 PM (1).jpeg";
import third from "../Assets/WhatsApp Image 2024-04-25 at 9.59.32 PM.jpeg";
import { Link } from "react-router-dom";
import hand from "../Assets/WhatsApp Image 2024-04-25 at 10.10.41 PM.jpeg";
const Home2 = () => {
  return (
    <div>
      <div className="home-banner-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={hand} id="foot" alt="" />
        </div>
        <div className="about-section-text-container">
          <h1 className="primary-heading">Buy Less, Buy Better!</h1>
          <p className="primary-text">
            At Ecoyaan, we are more than just a platform. Our goal is to build a
            community of eco-conscious people who share a common vision and
            passion for a more sustainable world.
          </p>
          <p className="primary-text">
            about-us-sustainable-lifestyle-partner We recognize that
            sustainability is a journey (as the Sanskrit word “yaan” suggests).
          </p>
          <div className="about-buttons-container">
            <Link to="/about" style={{ textDecoration: "none" }}>
              <button className="secondary-button">About Us</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-banner-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={roller} alt="" id="foot" />
        </div>
        <div className="about-section-text-container">
          <h1 className="primary-heading">
            A Business That Deeply Cares About Sustainability
          </h1>
          <p className="primary-text">
            Do you run a business that is committed to sustainability in every
            aspect of your work?
          </p>
          <p className="primary-text">
            If yes, then you are the perfect fit for our platform. Our community
            appreciates and supports businesses that are transparent, ethical,
            and innovative in their approach to sustainability. Contact us
            today:
          </p>
        </div>
      </div>
      <div className="home-banner-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={third} alt="" id="foot" />
        </div>
        <div className="about-section-text-container">
          <h1 className="primary-heading">
            Carefully Curated Eco-friendly Products
          </h1>
          <p className="primary-text">
            We believe that every purchase you make can have a positive impact
            on the planet and the future.
          </p>
          <p className="primary-text">
            Soon, we will be connecting you with eco-friendly and sustainable
            products that are carefully selected based on their environmental
            and social benefits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home2;
