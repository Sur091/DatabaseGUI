import { Link } from "react-router-dom";
import "./FirstPage.css";
import React from "react";
// import Database from "../Database/Database";

function template() {
  return (
    <div className="FirstPage">

      <div className="Toolbar">
        <div className="Logo">
          <i class="fa-solid fa-dragon"></i>
        </div>
        <div className="Search">
          <div className="Search-Box">
            <input type="text" class="search-input" placeholder="Search..."/>
            <button type="button" class="search-button">
              <i class="fas fa-search"></i> 
            </button> 
          </div>
        </div>
        <div className="Log-In"><i class="fa-solid fa-user"></i></div>
      </div>

      <div className="Content">The mission statement of the database is: </div>

      <div className="Buttons">
        <button class="game-button">Game</button>
        <button class="database-button">
          <Link to="./Database"> Database </Link>
        </button>
      </div>

      <div className="About-Us">
        <div class="text-About-Us">About Us</div>
        <div class="content-About-Us">We are working a databse for the class project. It is a gaming database capable of recording and resuing data to ensure that the business can grow by analyzing the currrent users.</div> 
      </div>
    </div>
  );
};

export default template;
