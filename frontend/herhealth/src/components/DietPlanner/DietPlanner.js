// DietPlanner.js

import React from "react";
import "./DietPlanner.css";
import { Card, Carousel } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Tuesday from "../../images/TUESDAY.png";
import Wednesday from "../../images/WEDNESDAY.jpg";
import Thursday from "../../images/THURSDAY.jpg";
import Monday from "../../images/MONDAY.png";
import Friday from "../../images/FRIDAY.jpg";
import Saturday from "../../images/SATURDAY.jpg";
import Sunday from "../../images/SUNDAY.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Diet from "../../images/Diet.png";
import FruitVeg from "../../images/fruitveg.png";
import ChickenFish from "../../images/chicfish.png";
import Chocolate from "../../images/choco.png";
import Nuts from "../../images/nuts.png";
import Yoghurt from "../../images/yogu.jpg";
import LentilsBean from "../../images/lentilsbean.jpg";
import Alcohol from "../../images/alcohol.jpg";
import Sugar from "../../images/sugar.png";
import Coffee from "../../images/coffee.jpg";
import SpicyFood from "../../images/spicyfood.jpg";
import redMeat from "../../images/redMeat.jpg";

// import img from "../../images/food.png"; // Replace with the actual path to your food image

const DietPlanner = () => {
  const pcosDiet = [
    {
      title: "Diet for Monday",
      description: `
          <h5>Breakfast (8:00-8:30AM)</h5>
          2 Slice brown bread.+1 slice low fat cheese+2 Boiled egg white.<br/>
      
          <h5>Mid-Meal (11:00-11:30AM)</h5>
          1 Portion fruit(Limit the intake of high energy fruits. Eg: Banana, Jack fruit, Mango, Chikku.)<br/>
      
          <h5>Lunch (2:00-2:30PM)</h5>
          Veg pulav rice 1 cup+ 1/2 cup Soya Chunk curry+ 1/2 cup Butter Milk.<br/>
      
          <h5>Evening (4:00-4:30PM)</h5>
          1 cup light tea+ 2 wheat rusk.<br/>
      
          <h5>Dinner (8:00-8:30PM)</h5>
          2 roti/ Chapathi+ Ladies finger subji 1/2 cup
        `,
      image: Monday, // Add the path to your image
    },

    {
      title: "Diet for Tuesday",
      description: `
      <h5>Breakfast (8:00-8:30AM)</h5>
      Chappati 3 + 1/2 cup Potato green peas curry.<br/>
  
      <h5>Mid-Meal (11:00-11:30AM)</h5>
      1/2 cup boilled black channa<br/>
  
      <h5>Lunch (2:00-2:30PM)</h5>
      1 cup rice+ 1/2 cup Dhal+ Palak subji 1/2 cup+ 1/2 cup low fat curd.<br/>
  
      <h5>Evening (4:00-4:30PM)</h5>
      1 Portion fruit(Limit the intake of high energy fruits. Eg: Banana, Jack fruit,Mango, Chikku.)<br/>
  
      <h5>Dinner (8:00-8:30PM)</h5>
      Broken wheat upma 1 cup+ 1/2 cup green beans subji
    `,
      image: Tuesday, // Add the path to your image
    },
    {
      title: "Diet for Wednesday",
      description: `
      <h5>Breakfast (8:00-8:30AM)</h5>
      Methi Parata 2+ 1 tbs green chutney.<br/>
  
      <h5>Mid-Meal (11:00-11:30AM)</h5>
      1 Portion fruit(Limit the intake of high energy fruits. Eg: Banana, Jack fruit,Mango, Chikku.)<br/>
  
      <h5>Lunch (2:00-2:30PM)</h5>
      1 cup rice+ chicken curry( 150 gm chicken+ 1 cup cucumber salad.<br/>
  
      <h5>Evening (4:00-4:30PM)</h5>
      1 Cup light tea+ Brown rice flakes poha 1 cup.<br/>
  
      <h5>Dinner (8:00-8:30PM)</h5>
      Wheat dosa 3 + 1/2 cup Bitter guard subji.
    `,
      image: Wednesday, // Add the path to your image
    },
    {
      title: "Diet for Thursday",
      description: `
      <h5>Breakfast (8:00-8:30AM)</h5>
      Vegetable Oats Upma 1 cup+ 1/2 cup low fat milk.<br/>
  
      <h5>Mid-Meal (11:00-11:30AM)</h5>
      Plane Yoghurt with raw vegetables / grilled vegetables -1 cup.<br/>
  
      <h5>Lunch (2:00-2:30PM)</h5>
      1/2 cup rice + 2 medium chappati+1/2 cup Kidney beans curry+ Snake guard subji 1/2 cup.<br/>
  
      <h5>Evening (4:00-4:30PM)</h5>
      1 cup boilled channa+ light tea 1 cup.<br/>
  
      <h5>Dinner (8:00-8:30PM)</h5>
      2 Roti/ chapati+ 1/2 cup mix veg curry.
    `,
      image: Thursday, // Add the path to your image
    },
    {
      title: "Diet for Friday",
      description: `
      <h5>Breakfast (8:00-8:30AM)</h5>
      Mix veg Poha 1 cup+ 1/2 cup low fat milk.<br/>
  
      <h5>Mid-Meal (11:00-11:30AM)</h5>
      1 Portion fruit(Limit the intake of high energy fruits. Eg: Banana, Jack fruit,Mango, Chikku.)<br/>
  
      <h5>Lunch (2:00-2:30PM)</h5>
      3 Chappati+ 1/2 cup cluster beans subji+ Fish curry(100g fish) 1/2 cup.<br/>
  
      <h5>Evening (4:00-4:30PM)</h5>
      1 cup tea + 2 biscuits ( Nutrichoice or Digestiva or Oatmeal.)<br/>
  
      <h5>Dinner (8:00-8:30PM)</h5>
      2 Roti / chappathi+Ridge guard subji 1/2 cup.
    `,
      image: Friday, // Add the path to your image
    },
    {
      title: "Diet for Saturday",
      description: `
      <h5>Breakfast (8:00-8:30AM)</h5>
      Bason cheela-2 + 1 tbs green chutney.<br/>
  
      <h5>Mid-Meal (11:00-11:30AM)</h5>
      1 cup boilled channa.<br/>
  
      <h5>Lunch (2:00-2:30PM)</h5>
      1 cup rice+ Soya chunk curry1/2 cup+ Ladies finger subji 1/2 cup+ small cup low fat curd.<br/>
  
      <h5>Evening (4:00-4:30PM)</h5>
      1 Portion fruit(Limit the intake of high energy fruits. Eg: Banana, Jack fruit,Mango, Chikku.)<br/>
  
      <h5>Dinner (8:00-8:30PM)</h5>
      Broken wheat upma 1 cup+ 1/2 cup green beans subji.
    `,
      image: Saturday, // Add the path to your image
    },
    {
      title: "Diet for Sunday",
      description: `
      <h5>Breakfast (8:00-8:30AM)</h5>
      3 Idli + Sambar 1/2 cup/ 1 table spoon Green chutney/ Tomato Chutney.<br/>
  
      <h5>Mid-Meal (11:00-11:30AM)</h5>
      Green gram sprouts 1 cup.<br/>
  
      <h5>Lunch (2:00-2:30PM)</h5>
      3 Roti+1/2 cup salad + Fish curry ( 100 gm fish)+ 1/2 cup cabbage subji.<br/>
  
      <h5>Evening (4:00-4:30PM)</h5>
      1 Portion fruit(Limit the intake of high energy fruits. Eg: Banana, Jack fruit,Mango, Chikku.)<br/>
  
      <h5>Dinner (8:00-8:30PM)</h5>
      2 Roti / chappati.+ Tomato subji 1/2 cup.
    `,
      image: Sunday, // Add the path to your image
    },
    // ... other PCOS exercises
  ];

  // Sample exercises for Periods
  const foodToEat = [
    {
      title: "Fruits and Leafy Green Vegatables",
      description: `
      Water-rich fruits, such as watermelon and cucumber, are great for staying hydrated. Sweet fruits can help you curb your sugar cravings without eating a lot of refined sugars, which can cause your glucose levels to spike and then crash. <br/>
      It’s common to experience a dip in your iron levels during your period, particularly if your menstrual flow is heavy. This can lead to fatigue, bodily pain, and dizziness.<br/> Leafy green vegetables such as kale and spinach can boost your iron levels. Spinach is also rich in magnesium.
    `,
      image: FruitVeg, // Add the path to your image
    },
    {
      title: "Dark Chocolate",
      description:
        "A tasty and beneficial snack, dark chocolate is rich in iron and magnesium. A 100-gram bar of 70 to 85 percent dark chocolate contains 67 percent of the recommended daily intake (RDI) for iron and 58 percent of the RDI for magnesium <br/> A 2010 studyTrusted Source found that magnesium reduced the severity of PMS symptoms. <br/> According to a 2015 studyTrusted Source, people with magnesium deficiencies were more likely to have severe PMS symptoms.",
      image: Chocolate, // Add the path to your image
    },
    {
      title: "Fish And Chicken",
      description:
        "Chicken is another iron- and protein-rich food you can add to your diet. Eating protein is essential for your overall health, and it can help you stay full and sated during your period, curbing cravings.<br/><br/>Rich in iron, protein, and omega-3 fatty acids, fish is a nutritious addition to your diet. Consuming iron will counteract the dip in iron levels that you might experience while menstruating.<br/><br/>Omega-3s can reduce the intensity of period pain, according to a 2012 study. Subjects who took omega-3 supplements found that their menstrual pain decreased so much that they could reduce the amount of ibuprofen they took.<br/><br/> A 2014 study showed that omega-3s can also reduce depression. For those who experience mood swings and depression around menstruation, omega-3s may be helpful.",
      image: ChickenFish, // Add the path to your image
    },
    {
      title: "Nuts",
      description:
        "Most nuts are rich in omega-3 fatty acids, and they’re a great source of protein. They also contain magnesium and various vitamins. If you don’t want to eat nuts on their own, try nut butters or nut-based milks or add these ingredients to smoothies.",
      image: Nuts,
    },
    {
      title: "Lentils and beans",
      description:
        "Lentils and beans are rich in protein, so they’re good meat replacements for vegans and vegetarians. They’re also rich in iron, which makes them great additions to your diet if your iron levels are low.",
      image: LentilsBean,
    },
    {
      title: "Yogurt",
      description:
        "Many people get yeast infections during or after their period. If you tend to get yeast infections, probiotic-rich foods like yogurt can nourish the “good” bacteria in your vagina and may help you fight the infections.<br/><br/>Yogurt is also rich in magnesium and other essential nutrients, like calcium.",
      image: Yoghurt,
    },
    // ... other period exercises
  ];

  const foodToAvoid = [
    {
      title: "Salt and Sugar",
      description:
        "Consuming lots of salt leads to water retention, which can result in bloating. To reduce bloating, don’t add salt to your foods and avoid highly processed foods that contain a lot of sodium.<br/> It’s OK to have sugar in moderation, but eating too much of it can cause a spike in energy followed by a crash. This can worsen your mood. If you tend to feel moody, depressed, or anxious during your period, watching your sugar intake can help regulate your mood.",
      image: Sugar, // Add the path to your image
    },
    {
      title: "Coffee",
      description:
        "Caffeine can cause water retention and bloating. It can also exacerbate headaches. But caffeine withdrawal can cause headaches, too, so don’t cut out coffee completely if you’re used to having a few cups a day.<br/> Coffee might also cause digestive issues. If you tend to get diarrhea during your period, reducing your coffee intake could stop this from happening.",
      image: Coffee, // Add the path to your image
    },
    {
      title: "Alcohol",
      description:
        "Alcohol can have a number of negative effects on your body, which can exacerbate the symptoms of your period.<br/> Alcohol can dehydrate you, which can worsen headaches and cause bloating. It can also lead to digestive issues, such as diarrhea and nausea.",
      image: Alcohol, // Add the path to your image
    },
    {
      title: "Spicy Food",
      description:
        "Many people find that spicy foods upset their stomachs, giving them diarrhea, stomach pain, and even nausea. If your stomach struggles to tolerate spicy foods or if you’re not used to eating them, it might be best to avoid them during your period.",
      image: SpicyFood,
    },
    {
      title: "Red meat",
      description:
        "During your period, your body produces prostaglandins. These compounds help your uterus contract and get rid of the uterine lining, resulting in your menstrual flow. However, high levels of prostaglandins cause cramps.<br/> Red meat may be high in iron, but it is also high in prostaglandins and should be avoided during menstruation.",
      image: redMeat,
    },

    // ... other period exercises
  ];
  return (
    <>
      <Navbar />
      <div className="exercise-suggestor-container">
        <div className="home">
          <div>
            <img height="100%" src={Diet} />
          </div>
          <div className="home-content">
            <h2 className="title">She Aura Diet Planner</h2>
            <p className="text-animation">
              <span className="imp">
                At SheAura, we understand the unique challenges and needs
                associated with PCOS and menstrual periods. Our platform offers
                a range of carefully selected exercises and workout routines
                aimed at alleviating symptoms, improving overall well-being, and
                promoting a healthier lifestyle.
              </span>
              <br />
              <h2 className="head">PCOS Diet</h2>
              PCOS or polycystic ovary syndrome is one of the most common
              problems experienced by women. This condition affects your
              reproductive hormones resulting in an irregular menstrual cycle.
              The formation of multiple cysts in your ovaries may cause excess
              secretion of male hormones called androgens. If this condition is
              not managed on time, you may be at higher risk of developing
              diabetes, endometrial cancer and heart ailments. Following a PCOS
              diet chart plays a crucial role in its management.
              <br />
              {/* <h2 className="head">Period Exercises</h2>
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
              SheAura. */}
            </p>
            <div className="button-container">
              <a href="#pcos-diet">
                <button className="exercise-button">
                  Get a Diet Chart for PCOS Patients
                </button>
              </a>
            </div>
            <h3
              style={{
                display: " flex",
                justifyContent: "center",
                fontSize: "20px",
                margin: "10px",
                color: "#d73872",
              }}
            >
              What to Eat and What to Avoid during Periods???
            </h3>
            <div className="button-container">
              <a href="#FoodToEat">
                <button className="exercise-button">Food To Eat</button>
              </a>
              <a href="#FoodToAvoid">
                <button className="exercise-button">Food To Avoid</button>
              </a>
            </div>
          </div>
        </div>

        <div id="pcos-diet" className="exercise-category">
          <h3 className="category-title">Diet Chart for PCOS Patients</h3>
          <Carousel
            nextIcon={<FaArrowRight className="carousel-icon" />}
            prevIcon={<FaArrowLeft className="carousel-icon" />}
          >
            {pcosDiet.map((exercise, index) => (
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
        <div id="FoodToEat" className="exercise-category">
          <h3 className="category-title">Foods to eat during Periods</h3>
          <Carousel
            nextIcon={<FaArrowRight className="carousel-icon" />}
            prevIcon={<FaArrowLeft className="carousel-icon" />}
          >
            {foodToEat.map((exercise, index) => (
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
        <div id="FoodToAvoid" className="exercise-category">
          <h3 className="category-title">Food to avoid during periods</h3>
          <Carousel
            nextIcon={<FaArrowRight className="carousel-icon" />}
            prevIcon={<FaArrowLeft className="carousel-icon" />}
          >
            {foodToAvoid.map((exercise, index) => (
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
      </div>
      <Footer />
    </>
  );
};

export default DietPlanner;
