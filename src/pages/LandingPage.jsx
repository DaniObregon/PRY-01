import React, { useEffect, useState } from "react";
import "../css/Login.css";
import { Icon } from "../components/Icon";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (!userEmail) {
      navigate("/");
      console.log("Intentaste entrar a la pagina principal sin estar logueado");
    }
  });

  return (
    <div>
      <h1>HOME PAGE</h1>
      <div>
        <button onClick={logout} type="button" className="singin-with-button">
          <Icon css="icon" icon={faSignOut} /> Sign Out
        </button>
      </div>
    </div>
  );
};
