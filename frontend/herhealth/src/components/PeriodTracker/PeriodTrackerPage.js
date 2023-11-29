// // PeriodTrackerPage.js

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "./PeriodTrackerPage.css"; // Import your CSS file
// import Countdown from "./Countdown";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

// const PeriodTrackerPage = () => {
//   const [cycleLength, setCycleLength] = useState(28);
//   const [lastPeriodDate, setLastPeriodDate] = useState(new Date());
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//   };

//   const handleChange = (date) => {
//     setLastPeriodDate(date);
//   };

//   const handleReset = () => {
//     setCycleLength(28);
//     setLastPeriodDate(new Date());
//     setIsSubmitted(false);
//   };

//   return (
//     <div className="body-2">
//       <Navbar />
//       <div className="heading">
//         <h1>Welcome to She Aura</h1>
//         <p>
//           She Aura is dedicated to helping women around the globe track their
//           menstrual cycles with ease.
//         </p>
//       </div>
//       <div className="period-tracker-container">
//         <div className="intro-container">
//           <h1>Track Your Menstrual Cycle</h1>
//           <p>
//             Understanding your menstrual cycle can help you anticipate your next
//             period. Use the form below to track your last period date and the
//             length of your menstrual cycle.
//           </p>
//         </div>
//         <form onSubmit={handleSubmit} className="period-form">
//           <label>
//             Last Period Date:
//             <DatePicker
//               selected={lastPeriodDate}
//               onChange={handleChange}
//               dateFormat="MMMM d, yyyy"
//             />
//           </label>
//           <label>
//             Menstrual Cycle Length (days):
//             <input
//               type="number"
//               value={cycleLength}
//               onChange={(e) => setCycleLength(e.target.value)}
//               min="1"
//             />
//           </label>
//           <div className="button-container">
//             <button type="submit" className="submit-button">
//               Track Period
//             </button>
//             {isSubmitted && (
//               <button
//                 type="button"
//                 className="reset-button"
//                 onClick={handleReset}
//               >
//                 Reset
//               </button>
//             )}
//           </div>
//         </form>
//         {isSubmitted && (
//           <Countdown
//             cycleLength={cycleLength}
//             lastPeriodDate={lastPeriodDate}
//           />
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default PeriodTrackerPage;
// PeriodTrackerPage.js

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./PeriodTrackerPage.css"; // Import your CSS file
import Countdown from "./Countdown";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PeriodTrackerPage = () => {
  const [cycleLength, setCycleLength] = useState(28);
  const [lastPeriodDate, setLastPeriodDate] = useState(new Date());
  const [periodLength, setPeriodLength] = useState(5); // New field: How long does your period last?
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [nextPeriodDate, setNextPeriodDate] = useState(null);

  useEffect(() => {
    if (isSubmitted) {
      calculateNextPeriodDate();
    }
  }, [isSubmitted, lastPeriodDate, cycleLength]);

  const calculateNextPeriodDate = () => {
    const cycleInMilliseconds = cycleLength * 24 * 60 * 60 * 1000;
    const nextPeriod = new Date(lastPeriodDate.getTime() + cycleInMilliseconds);
    setNextPeriodDate(nextPeriod);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (date) => {
    setLastPeriodDate(date);
  };

  const handleReset = () => {
    setCycleLength(28);
    setLastPeriodDate(new Date());
    setPeriodLength(5);
    setIsSubmitted(false);
    setNextPeriodDate(null);
  };

  return (
    <div className="body-2">
      <Navbar />
      <div className="heading">
        <h1>Welcome to She Aura</h1>
        <p>
          She Aura is dedicated to helping women around the globe track their
          menstrual cycles with ease.
        </p>
      </div>
      <div className="period-tracker-container">
        <div className="intro-container">
          <h1>Track Your Menstrual Cycle</h1>
          <p>
            Understanding your menstrual cycle can help you anticipate your next
            period. Use the form below to track your last period date, the
            length of your menstrual cycle, and other relevant details.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="period-form">
          <label>
            Last Period Date:
            <DatePicker
              style={{ width: "100%" }}
              selected={lastPeriodDate}
              onChange={handleChange}
              dateFormat="MMMM d, yyyy"
            />
          </label>
          <label>
            Menstrual Cycle Length (days):
            <input
              type="number"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              min="1"
            />
          </label>
          {/* New field: How long does your period last? */}
          <label>
            How Long Does Your Period Last (days):
            <input
              type="number"
              value={periodLength}
              onChange={(e) => setPeriodLength(e.target.value)}
              min="1"
            />
          </label>
          <div className="button-container">
            <button type="submit" className="submit-button">
              Track Period
            </button>
            {isSubmitted && (
              <button
                type="button"
                className="reset-button"
                onClick={handleReset}
              >
                Reset
              </button>
            )}
          </div>
        </form>
        {isSubmitted && (
          <div className="result-container">
            <h2>Your Next Period is Most Likely to Start On:</h2>
            {nextPeriodDate && (
              <>
                <p>{nextPeriodDate.toDateString()}</p>
                <Countdown
                  cycleLength={cycleLength}
                  lastPeriodDate={nextPeriodDate}
                />
              </>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PeriodTrackerPage;
