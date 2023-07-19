import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./App";
const Home = () => {
  const excuseList = ["family", "office", "college"];
  return (
    <center className="container">
      <h1 className="main-head">Excuse Category</h1>
      <div className="category">
        {excuseList.map((excuse, index) => {
          return (
            <div className="button-container" key={index}>
              <Link to={`/excuse/${excuse}`}>
                <button key={index} value={excuse}>
                  {excuse}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </center>
  );
};

export default Home;
