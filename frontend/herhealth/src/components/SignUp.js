import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../images/logo.png";

function Signup(props) {
  const [signupForm, setSignupForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  function btnSignup(event) {
    axios
      .post("http://127.0.0.1:5000/signup", {
        email: signupForm.email,
        name: signupForm.name,
        password: signupForm.password,
      })
      .then((response) => {
        console.log(response);
        // alert("Successfully Registered");
        // You can handle token and redirection here if needed
        navigate("/login"); // Redirect to the login page after successful registration
      })
      .catch((error) => {
        console.error("Registration error", error);
        // Handle registration error
      });

    setSignupForm({
      email: "",
      name: "",
      password: "",
    });

    event.preventDefault();
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setSignupForm((prevSignupForm) => ({
      ...prevSignupForm,
      [name]: value,
    }));
  }

  return (
    <div className="body">
      <div className="row h-100">
        <div
          className="col-md-6 d-flex justify-content-center align-items-center right-half"
          style={{ backgroundColor: "#FFC0CB" }}
        >
          <form>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                value={signupForm.name}
                onChange={handleChange}
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                value={signupForm.email}
                onChange={handleChange}
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter a valid email address"
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                value={signupForm.password}
                onChange={handleChange}
                name="password"
                className="form-control form-control-lg"
                placeholder="Enter password"
              />
            </div>

            <button
              type="button"
              className="btn btn-primary btn-lg button"
              onClick={btnSignup}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div
          className="col-md-6 d-flex justify-content-center align-items-center left-half"
          style={{ backgroundColor: "#F875AA" }}
        >
          <img
            style={{ width: "60%" }}
            src={logo}
            alt="Your Logo"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
