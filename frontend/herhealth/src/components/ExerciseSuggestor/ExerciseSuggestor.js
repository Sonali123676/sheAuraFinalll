import React from "react";
import { Card, Carousel } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import med from "../../images/med.jpg";
import exer2 from "../../images/Exercise.jpg";
import Yoga from "../../images/Yoga.jpg";
import Jogging from "../../images/Jogging.png";
import Strength from "../../images/Strength.jpg";
import "./ExerciseSuggestor.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HIIT from "../../images/HIIT.jpg";
import Stretch from "../../images/stretch.jpg";
import cycle from "../../images/cycle.jpg";
import Pilates from "../../images/pilates.jpg";
const ExerciseSuggestor = () => {
  // Sample exercises for PCOS
  const pcosExercises = [
    {
      title: "Yoga Session",
      description: `Practice relaxing yoga poses for at least 20 minutes daily to reduce stress levels. Stress management is crucial in managing PCOS symptoms.`,
      image: Yoga, // Add the path to your image
    },
    {
      title: "HIIT",
      description: `High-intensity interval training, or HIIT, consists of short bursts of cardiac activity that are performed at an extremely high intensity,<br/> followed by a rest time of at least one minute. HIIT helps with fat burning and reduces insulin resistance.<br/> It involves balancing intense exercise bursts with rest intervals. Typical exercises in a HIIT workout include things like burpees,<br/> tuck jumps, and mountain climbers.`,
      image: HIIT, // Add the path to your image
    },
    {
      title: "Cardio Workout",
      description: `Running, swimming, uphill trekking, rowing, and cycling are examples of cardio workouts that increase heart rate. Cardio exercises come <br/>in a variety of intensities. Moderate cardio workouts include advantages such as enhancing cholesterol levels, brain function, <br/>blood sugar control, sleep quality, and mood.`,
      image: Jogging, // Add the path to your image
    },

    {
      title: "Strength Training",
      description: `Incorporate bodyweight exercises like squats, lunges, and push-ups. Strength training can help in improving insulin sensitivity and managing weight.`,
      image: Strength, // Add the path to your image
    },
    // ... other PCOS exercises
  ];

  // Sample exercises for Periods
  const periodExercises = [
    {
      title: "Gentle Stretching",
      description: `Perform gentle stretching exercises to alleviate period discomfort and reduce muscle tension. Our aim is to create a safe and supportive <br/>environment where you can embrace gentle stretching exercises tailored to your body's requirements during menstruation. <br/>Join our sessions to discover the revitalizing effects of these soothing stretches and enhance your well-being during your period.<br/>`,
      image: Stretch, // Add the path to your image
    },
    {
      title: "Light Aerobics",
      description: `Engage in low-impact aerobics such as walking or cycling to stay active during periods. Light aerobic exercises can help in boosting mood <br/>and reducing fatigue. This exercise routine is specifically designed to accommodate your body's needs during this time,<br/> offering a gentle yet effective way to stay active and alleviate menstrual discomfort.`,
      image: cycle, // Add the path to your image
    },
    {
      title: "Mindful Meditation",
      description: `Practice mindfulness and meditation techniques for 10-15 minutes daily. Mindful meditation aids in reducing stress and promoting relaxation<br/> during periods. Join us for our mindful meditation sessions, where you can retreat into a nurturing space, connect with your inner self,<br/> and discover the calming effects of meditation to support your well-being during your period.`,
      image: med, // Add the path to your image
    },
    {
      title: "Yoga and Pilates",
      description: `At sheAura, we advocate for holistic well-being, recognizing the importance of gentle yet effective exercises like Yoga and Pilates, <br/>tailored specifically to support you during your menstrual cycle. Our sessions offer Gentle and Restorative Poses, Breath-Centric Movements, <br/>Enhanced Circulation and Flexibility, and Core Strength and Stability.`,
      image: Pilates, // Add the path to your image
    },
    // ... other period exercises
  ];

  return (
    <>
      <Navbar />
      <div className="exercise-suggestor-container">
        <div className="home">
          <div>
            <img height="100%" src={exer2} />
          </div>
          <div className="home-content">
            <h2 className="title">She Aura Exercise Guide</h2>
            <p className="text-animation">
              <span className="imp">
                At SheAura, we understand the unique challenges and needs
                associated with PCOS and menstrual periods. Our platform offers
                a range of carefully selected exercises and workout routines
                aimed at alleviating symptoms, improving overall well-being, and
                promoting a healthier lifestyle.
              </span>
              <br />
              <h2 className="head">PCOS Exercises</h2>
              Discover a variety of exercises tailored to address common
              concerns associated with PCOS. From cardio workouts to strength
              training and relaxing yoga sessions, our collection of exercises
              is crafted to assist in managing weight, improving hormonal
              balance, and reducing stress levels.
              <br />
              <h2 className="head">Period Exercises</h2>
              Ease period discomfort with our collection of exercises
              specifically curated for menstrual health. Gentle stretching
              routines, low-impact aerobics, and mindful meditation exercises
              aim to alleviate cramps, reduce muscle tension, and promote
              relaxation during your menstrual cycle. <br />
              <span className="imp">
                {" "}
                At SheAura, we strive to empower individuals by providing
                exercise suggestions that cater to their specific needs. Our
                goal is to foster a supportive and informative space where
                individuals can find exercises that resonate with their bodies
                and lifestyles.
              </span>
              <br /> Explore our curated exercise recommendations and embark on
              a journey towards a healthier, more balanced lifestyle with
              SheAura.
            </p>
            <div className="button-container">
              <a href="#pcos-exercises">
                <button className="exercise-button">PCOS Exercises</button>
              </a>
              <a href="#period-exercises">
                <button className="exercise-button">Period Exercises</button>
              </a>
            </div>
          </div>
        </div>

        <div id="pcos-exercises" className="exercise-category">
          <h3 className="category-title">PCOS Exercises</h3>
          <Carousel
            nextIcon={<FaArrowRight className="carousel-icon" />}
            prevIcon={<FaArrowLeft className="carousel-icon" />}
          >
            {pcosExercises.map((exercise, index) => (
              <Carousel.Item key={index}>
                <div className="exercise-wrapper">
                  <div className="content-container">
                    <div className="image-container">
                      <img
                        src={exercise.image}
                        alt={exercise.title}
                        className="exercise-image"
                      />
                    </div>
                    <div className="exercise-content">
                      <Card className="exercise-card">
                        <Card.Body>
                          <Card.Title className="exercise-title">
                            {exercise.title}
                          </Card.Title>
                          <Card.Text
                            dangerouslySetInnerHTML={{
                              __html: exercise.description,
                            }}
                          />
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div id="period-exercises" className="exercise-category">
          <h3 className="category-title">Period Exercises</h3>
          <Carousel
            nextIcon={<FaArrowRight className="carousel-icon" />}
            prevIcon={<FaArrowLeft className="carousel-icon" />}
          >
            {periodExercises.map((exercise, index) => (
              <Carousel.Item key={index}>
                <div className="exercise-wrapper">
                  <div className="content-container">
                    <div className="image-container">
                      <img
                        src={exercise.image}
                        alt={exercise.title}
                        className="exercise-image"
                      />
                    </div>
                    <div className="exercise-content">
                      <Card className="exercise-card">
                        <Card.Body>
                          <Card.Title className="exercise-title">
                            {exercise.title}
                          </Card.Title>
                          <Card.Text
                            dangerouslySetInnerHTML={{
                              __html: exercise.description,
                            }}
                          />
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Period Exercises */}
        {/* ... (Similar structure to PCOS exercises) */}
      </div>
      <Footer />
    </>
  );
};

export default ExerciseSuggestor;
