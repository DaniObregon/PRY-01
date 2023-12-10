import React, { useEffect, useState } from "react";
import "../css/Login.css";
import { Icon } from "./Icon.jsx";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth, provider } from "../firebaseConfig/firebaseConfig.js";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleButtonGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userEmail = result.user.email;
      setValue(userEmail);
      localStorage.setItem("email", userEmail);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error during Google Authentication", error);
    }
    navigate("/home");
  };

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    setValue(userEmail);
    setIsAuthenticated(!!userEmail);
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated, navigate]);

  return (
    <>
      {!isAuthenticated ? (
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
      ) : (
        console.log("LALALLALA")
      )}
    </>
  );
};
