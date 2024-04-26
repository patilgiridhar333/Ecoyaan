import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Footer from "./Footer";
import foot from "../Assets/WhatsApp Image 2024-04-25 at 9.59.31 PM.jpeg";
import { Link } from "react-router-dom";
import hand from "../Assets/WhatsApp Image 2024-04-25 at 10.10.41 PM.jpeg";
import bottle from "../Assets/WhatsApp Image 2024-04-26 at 9.53.48 PM.jpeg";
import certified from "../Assets/WhatsApp Image 2024-04-26 at 9.58.59 PM.jpeg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">About Ecoyaan</h1>
          <p className="primary-text">
            We recognize that sustainability is a journey (as the Sanskrit word
            “yaan” suggests). To keep you motivated on this journey, on our
            platform and our social media pages, you can find:{" "}
            <p>
              -Tips and tricks to adopt a more eco-friendly and low-waste
              lifestyle
            </p>{" "}
            <p>
              -Videos, posts, and quizzes on climate change and sustainability
            </p>
          </p>
        </div>
        <div className="home-image-section">
          <img
            src={hand}
            alt=""
            id="hand"
            style={{ border: "1px solid grey" }}
          />
        </div>
      </div>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Our Values</h1>
          <h3 className="primary-heading-h3">-Trust</h3>
          <p className="primary-text">
            We value the trust of our community. We strive to be transparent and
            honest in everything we do, from the content we share today to
            sourcing our products in the future.
          </p>
        </div>
        <div className="home-image-section">
          <img src={bottle} alt="" style={{ border: "1px solid grey" }} />
        </div>
      </div>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h3 className="primary-heading-h3">-Authenticity</h3>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
        </div>
        <div className="home-image-section">
          <img src={certified} alt="" style={{ border: "1px solid grey" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
