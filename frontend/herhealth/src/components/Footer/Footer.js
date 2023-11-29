import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#fff4f8", padding: "0" }}>
      <div
        className="footer-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "250px",
          display: "flex",
          flexWrap: "wrap",
          padding: "20px",
          justifyContent: "space-between",
        }}
      >
        <div className="column">
          <h3 style={{ marginBottom: "20px" }}>About Us</h3>
          <p>
            We're SheAura,
            <br />
            your partner in women's healthcare.
          </p>
        </div>
        <div className="column">
          <h3 style={{ marginBottom: "20px" }}>Our Services</h3>
          <p>
            Self Diagnosis <br />
            Period Tracker
            <br />
            Diet Planner
            <br />
            Exercise Tracker
            <br />
            Gynecological Info
          </p>
        </div>
        <div className="column">
          <h3 style={{ marginBottom: "20px" }}>Team Members</h3>
          <p>
            Sonali Sadana
            <br />
            Kashish Garg
            <br />
            Mayank Gera
            <br />
            {/* Komal Aggarwal */}
          </p>
        </div>
      </div>
      <div
        className="footer-bottom"
        style={{
          backgroundColor: " rgb(230 81 149)",
          padding: "40px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div className="social-icons">
          <a href="#" style={{ color: "white", marginRight: "20px" }}>
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="#" style={{ color: "white", marginRight: "20px" }}>
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="#" style={{ color: "white", marginRight: "20px" }}>
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
        <p style={{ margin: "20 0" }}>
          &copy; {new Date().getFullYear()} SheAura. All rights reserved.
        </p>
        <p>
          Disclaimer: At Sheaura, we prioritize the security and transparency of
          our services.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
