import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../images/logo.png";

function Login(props) {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function btnLogin(event) {
    axios
      .post("http://127.0.0.1:5000/logintoken", {
        email: loginForm.email,
        password: loginForm.password,
      })
      .then((response) => {
        console.log(response);
        props.setToken(response.data.access_token);
        // alert("Successfully Login");
        localStorage.setItem("email", loginForm.email);
        navigate("/home"); // Redirect to the homepage after login
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          alert("Invalid credentials");
        }
      });

    setLoginForm({
      email: "",
      password: "",
    });

    event.preventDefault();
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setLoginForm((prevLoginForm) => ({
      ...prevLoginForm,
      [name]: value,
    }));
  }

  return (
    <div className="body">
      <div className="row h-100">
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
        <div
          className="col-md-6 d-flex justify-content-center align-items-center right-half"
          style={{ backgroundColor: "#FFC0CB" }}
        >
          <form className="w-75">
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3">
                Email address
              </label>
              <input
                type="email"
                value={loginForm.email}
                onChange={handleChange}
                name="email"
                id="form3Example3"
                className="form-control form-control-lg"
                placeholder="Enter a valid email address"
              />
            </div>

            <div className="form-outline mb-3">
              <label className="form-label" htmlFor="form3Example4">
                Password
              </label>
              <input
                type="password"
                value={loginForm.password}
                onChange={handleChange}
                name="password"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Enter password"
              />
            </div>

            {/* <div className="d-flex justify-content-between align-items-center">
              <a href="#!" className="text-body">
                Forgot password?
              </a>
            </div> */}

            <div className="text-center text-lg-start mt-4 pt-2">
              <button
                type="button"
                className="btn btn-primary btn-lg button"
                onClick={btnLogin}
              >
                Login
              </button>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?{" "}
                <a href="/signup" className="link-danger">
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
