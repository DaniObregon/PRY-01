import React, { useEffect, useState } from "react";
import "../css/Login.css";
import { Icon } from "./Icon.jsx";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth, provider } from "../firebaseConfig/firebaseConfig.js";
import { signInWithPopup } from "firebase/auth";
import { LandingPage } from "../pages/LandingPage.jsx";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");

  const handleButtonGoogleAuth = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
    navigate('/home')
  };

  const navigate = useNavigate();

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <>
      <div className="box">
        <div className="container">
          <div className="top-header">
            <span>Have an account?</span>
            <header>Login</header>
          </div>
          <div className="input-field">
            <input
              type="text"
              className="input"
              placeholder="Enter your email"
              required
              value={email}
            />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-field">
            <input
              type="Enter your password"
              className="input"
              placeholder="Password"
              required
              value={password}
            />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-field">
            <input type="submit" className="submit" value="Login" />
          </div>

          <div className="singin-with-buttons">
            <button type="button" className="singin-with-button">
              <Icon css="icon" icon={faFacebook} /> Facebook
            </button>
            <div className="spacer"></div>
            <button
              onClick={handleButtonGoogleAuth}
              type="button"
              className="singin-with-button"
            >
              <Icon css="icon" icon={faGoogle} /> Google
            </button>
          </div>

          <div className="bottom">
            <div className="left">
              <input type="checkbox" id="check" />
              <label htmlFor="check"> Remember Me</label>
            </div>
            <div className="right">
              <label>
                <a href="#">Forgot password?</a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
