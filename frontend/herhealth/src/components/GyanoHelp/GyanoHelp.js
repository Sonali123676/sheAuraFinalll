// GyanoHelp.js
import React, { useState, useEffect } from "react";
import { Carousel, Card, Dropdown, Row, Col } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CityGynos from "./CityGynos"; // Import the new component
import doc1Mum from "../../images/doc1-mum.png";
import doc2Mum from "../../images/doc2-mum.png";
import doc3Mum from "../../images/doc3-mum.png";
import doc1Del from "../../images/doc1-delhi.png";
import "./GyanoHelp.css";
import doc2Del from "../../images/doc2.delhi.png";
import doc3Del from "../../images/doc3-del.jpg";
import doc1Pun from "../../images/doc1-punj.png";
import doc1Guj from "../../images/doc1-guj.png";
import doc2Guj from "../../images/doc2-guj.png";
import doc2Pun from "../../images/doc2-punj.png";
import doc1Bang from "../../images/doc1-ban.png";
import doc2Bang from "../../images/doc2-bang.png";
import regularCheckupsImg from "../../images/regular-checkups.jpg";
import mentalHealthImg from "../../images/mental-health.png";
import menstrualHygieneImg from "../../images/menstrual-hygiene.png";

const GyanoHelp = () => {
  const sections = [
    {
      title: "Regular Check-ups",
      content:
        "Regular visits to a gynecologist are vital for maintaining good reproductive health. Annual check-ups, pap smears, and screenings help in early detection and prevention of various gynecological conditions.",
      image: regularCheckupsImg,
    },
    {
      title: "Mental Health & Gynecology",
      content:
        "Mental health significantly impacts gynecological health. Stress, anxiety, and depression can affect menstrual cycles, hormonal balance, and reproductive health. Incorporating stress-relief practices like meditation or counseling can be beneficial.",
      image: mentalHealthImg,
    },
    {
      title: "Menstrual Hygiene",
      content:
        "Proper menstrual hygiene practices are essential to prevent infections and maintain gynecological health. Using clean and suitable sanitary products and maintaining personal hygiene during menstruation is crucial.",
      image: menstrualHygieneImg,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCity, setSelectedCity] = useState("Delhi"); // Default city

  const cityGynosData = {
    Delhi: [
      {
        name: "DR. Nikita Trehan",
        specialization: "Gynae Laparoscopic Surgery.",
        contact: "9810157410",
        photo: doc1Del,
      },
      {
        name: "Dr. Hafeez Rahman",
        specialization:
          "Obstetrics & Gynecology and Gynae Laparoscopic Surgery",
        contact: "9810157410",
        photo: doc2Del,
      },
      {
        name: "Elantis Healthcare Lajpat Nagar",
        specialization: "Gynecologist/Obstetrician",
        contact: "1161191400",
        photo: doc3Del,
      },
      // Add more gynos for Delhi as needed
    ],
    Mumbai: [
      {
        name: "Dr. Hrishikesh Pai",
        specialization: "Gynecologist,Infertility Specialist,Obstetrician,IVF",
        contact: "9820057722",
        photo: doc1Mum,
      },
      {
        name: "Dr. Rishma Dhillon Pai",
        specialization: "Gynecologist,Infertility Specialist,Obstetrician,IVF",
        contact: "9820057722",
        photo: doc2Mum,
      },
      {
        name: "Fortis Hospital, Mulund, Mumbai",
        specialization: "Gynecologist,Infertility Specialist,Obstetrician,IVF",
        contact: "022-43654365",
        photo: doc3Mum,
      },
      // Gynos for Mumbai
    ],
    Gujarat: [
      {
        name: "Niky Hospital",
        specialization: "M D Gynaec",
        contact: "073-83685607",
        photo: doc1Guj,
      },
      {
        name: "Dr. Viral Luhar",
        specialization: "Obstetrics & Gynecology",
        contact: "079-23246279",
        photo: doc2Guj,
      },
    ],
    Punjab: [
      {
        name: "Dr Suhasini Raina",
        specialization: "Gynecologist And Obstetrician",
        contact: "09872837336",
        photo: doc1Pun,
      },
      {
        name: "Dr Bhawana Sachdeva",
        specialization: "Gynecologist And Obstetrician",
        contact: "07041747349",
        photo: doc2Pun,
      },
    ],
    Bangalore: [
      {
        name: "Dr. Mamatha Swamy in Basaveshwara Nagar, Bangalore",
        specialization: "Gynecologist And Obstetrician",
        contact: "9535208686",
        photo: doc1Bang,
      },
      {
        name: "Dr. Kavitha Lakshmi Easwaran (Motherhood Clinic) in Kasturi Nagar, Bangalore",
        specialization:
          "Obstetrics & Gynecology and Gynae Laparoscopic Surgery",
        contact: "9342510981",
        photo: doc2Bang,
      },

      // Add more gynos for Delhi as needed
    ],
    // Add data for other cities as needed
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 5000); // Change section every 5 seconds

    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <>
      <Navbar />
      <div className="gyano-help-container">
        <div className="gyano-help-content">
          <h2 className="title">Gynecological Health Support</h2>
          <p className="text-animation">
            Gynecological health is essential for overall well-being. At
            sheAura, we aim to provide comprehensive support and information for
            maintaining optimal gynecological health. Here are some essential
            aspects to consider:
          </p>
          <div className="health-aspects">
            <Carousel
              indicators={false}
              activeIndex={activeIndex}
              onSelect={() => {}}
              interval={null}
              wrap={false}
            >
              {sections.map((section, index) => (
                <Carousel.Item key={index}>
                  <div className="exercise-wrapper">
                    <div className="content-container">
                      <div className="image-container">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="exercise-image"
                        />
                      </div>
                      <div className="exercise-content">
                        <Card className="exercise-card">
                          <Card.Body>
                            <Card.Title className="exercise-title">
                              {section.title}
                            </Card.Title>
                            <Card.Text>{section.content}</Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <Dropdown onSelect={handleCityChange} className="city-dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select City: {selectedCity}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.keys(cityGynosData).map((city) => (
                <Dropdown.Item key={city} eventKey={city}>
                  {city}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <CityGynos city={selectedCity} gynos={cityGynosData[selectedCity]} />
          <p className="text-animation">
            At sheAura, we strive to offer guidance, resources, and support to
            help individuals maintain and improve their gynecological health.
            Consult healthcare professionals for personalized advice and care.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GyanoHelp;
