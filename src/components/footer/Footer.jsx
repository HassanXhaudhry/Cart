import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import pngegg from "../../images/pngegg.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_box">
        <div className="footer_logo">
          <h3>TASKER</h3>
          <img src="" alt="" />
          <p>
           <img src={pngegg} alt="" width={"150px"} height={"150px"} />
          </p>
         
        </div>

        <div className="footer-items">
        <div className="footer_dicsover">
          <h3>Discover</h3>
          <ul className="footer_li">
            <li>Home</li>
            <li>Pages</li>
            <li>Plans</li>
            <li>About us</li>
            <li>Intakes</li>
          </ul>
        </div>

        <div className="footer_help">
          <h3>Help</h3>
          <ul className="footer_li">
            <li>Why Tasker</li>
            <li>Community</li>
            <li>Contact us</li>
          </ul>
        </div>
        </div>

        <div className="footer_subscribe">
          <h3>Subscribe</h3>
          <h5>To our newsletter</h5>
          <input type="email" placeholder="E-mail*" /><br />
            <button className="home-btn">Subscribe</button>
            <div className="footer_social">
            <a href=""><FontAwesomeIcon icon={faGithub} /></a>
            <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
            <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>

      </div>


      <div className="footer_line"><hr />
        <p>
          &copy; 2015 - 2023 TASKER Global Inc. <a href=""> Privacy Policy</a>
        </p>
      </div>

    </div>
  );
};

export default Footer;
