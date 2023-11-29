import React from "react";
import Navbar from "./Navbar/Navbar";
import home from "../images/home2.png";
import pcosImage from "../images/pcos.png";
import symptomsImage from "../images/pcos-sym1.jpg";
import "./Home.css";
import Functionalities from "./Functionalities";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <img className="event-image" src={home} alt="What is PCOS" />
      <div className="section">
        <div className="image">
          <img className="img" src={pcosImage} alt="What is PCOS" />
        </div>
        <div className="content">
          <h2>What is PCOS</h2>
          <p>
            Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder among
            women of reproductive age. It's a hormonal disorder that causes
            enlarged ovaries with small cysts on the outer edges. Women with
            PCOS often have hormonal imbalances, leading to various symptoms and
            potential health concerns.
          </p>
        </div>

        <div className="image">
          <img src={symptomsImage} alt="PCOS Symptoms" />
        </div>
        <div className="content">
          <h2>PCOS Symptoms</h2>
          <p>
            Common symptoms of PCOS include irregular periods, heavy bleeding,
            excess hair growth, acne, weight gain, infertility, excess androgen
            and mood changes. If you suspect you may have PCOS or are
            experiencing any of these symptoms, it's crucial to consult a
            healthcare professional for proper evaluation and guidance.
          </p>
        </div>
      </div>
      <div>
        <div className="service">Our services</div>
        <Functionalities />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
