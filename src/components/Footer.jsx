import React from "react";
import { SnapFooter } from "../style/FooterStyle";
import { PiFacebookLogoBold } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io5";
import { MdWhatsapp } from "react-icons/md";
import logo2 from "../assets/logo-footer.jpg";
const Footer = () => {
  return (
    <SnapFooter>
      <div className="logo">
        <img src={logo2} alt="" />
      </div>
      <div className="footer_details">
        <ul>
          <h3>Legal</h3>
          <li>Terms and conditions</li>
          <li>Privacy policy</li>
          <li>Terms of use</li>
        </ul>
        <ul>
          <h3>Let's do this together</h3>
          <li>Become a vendor</li>
          <li>Become a Rider</li>
        </ul>
        <ul>
          <h3>Get in Touch</h3>
          <li>+234 90 60 49 65 37, +234 81 66 88 58 94</li>
          <li>Support.snapbreakfast@gmail.com</li>
        </ul>
      </div>
      <div className="available_cities">
        <h1>Cities where you can order breakfast in Lagos</h1>
        <div className="cities">
          <p>Ikeja</p>
          <p>Ogudu</p>
          <p>Surulere</p>
          <p>Lekki</p>
          <p>Gbagada</p>
        </div>
      </div>

      <div className="copyright">
        <h6>©Copyright 2025 SnapBreakfast</h6>
        <div className="social_media">
          <i>
            <PiFacebookLogoBold />
          </i>
          <i>
            <IoLogoInstagram />
          </i>
          <i>
            <MdWhatsapp />
          </i>
        </div>
      </div>
    </SnapFooter>
  );
};

export default Footer;
