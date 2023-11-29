import React from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for making the logout request
import "./Navbar.css"; // Import the CSS file for Navbar styling

function Navbar() {
  const handleLogout = async () => {
    try {
      await axios.post("http://127.0.0.1:5000/logout"); // Send a POST request to the Flask logout route
      // Redirect to the login page after successful logout
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/self-diagnosis" className="nav-link">
            Self Diagnosis
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/period-tracker" className="nav-link">
            Period Tracker
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/diet-planner" className="nav-link">
            Diet Planner
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/exercise-suggestor" className="nav-link">
            Exercise Guide
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/gyano-help" className="nav-link">
            Gyano Help
          </Link>
        </li>
        <li className="nav-item">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
