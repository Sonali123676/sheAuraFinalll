import React from "react";

import "./Events.css";
import selfD from "../images/self-D.jpg";
import DietPlan from "../images/DietPlanner.jpg";
import exerciseTracker from "../images/exerciseTrack.jpg";
import periodTracker from "../images/PeriodTracker.jpg";
import Gyano from "../images/gyano.png";

const Functionalities = () => {
  const eventsData = [
    {
      name: "Self Diagnosis",
      image: selfD,
      description:
        "PCOS is a complex hormonal disorder that requires a proper diagnosis by a healthcare professional, typically a gynecologist, endocrinologist, or reproductive specialist.",
    },
    {
      name: "Period Tracker",
      image: periodTracker,
      description:
        "Period trackers aim to empower women about their menstrual cycles, helping them understand their bodies better, identify irregularities or potential health issues, and plan or manage their reproductive health more effectively.",
    },
    {
      name: "Diet Planner",
      image: DietPlan,
      description:
        "When planning a diet for women with PCOS it's essential to focus on managing insulin levels, reducing inflammation by emphasizing nutrient-dense foods, and promoting hormone balance.",
    },
    {
      name: "Exercise Tracker",
      image: exerciseTracker,
      description:
        "An exercise tracker tailored for women with PCOS can be a valuable tool to help manage symptoms, improve overall health, and support weight management. Regular physical activity can assist in managing insulin resistance, reducing stress, and enhancing overall well-being.",
    },
    {
      name: "Gyano Help",
      image: Gyano,
      description:
        "For women with PCOS, a gynecologist is often the primary healthcare provider for managing the condition. They provide guidance, diagnosis, treatment, and ongoing care for women dealing with PCOS.",
    },
  ];

  return (
    <div>
      <div className="event-container">
        {eventsData.map((event) => (
          <div className="event-card" key={event.name}>
            <img src={event.image} alt={event.name} className="event-image1" />
            <h3 className="event-name">{event.name}</h3>
            <p className="event-content">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Functionalities;
