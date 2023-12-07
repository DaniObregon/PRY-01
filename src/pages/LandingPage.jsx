import React, { useEffect, useState } from "react";
import "../css/Login.css";
import { Icon } from "../components/Icon";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/");
  };

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
