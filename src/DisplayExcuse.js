import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./DisplayExcuse.css";
const DisplayExcuse = () => {
  const url = "https://excuser-three.vercel.app/v1/excuse/";
  const [excuseData, setExcuseData] = useState([]);
  const { type } = useParams();

  const fetchExcuse = () => {
    fetch(url + type)
      .then((res) => res.json())
      .then((data) => setExcuseData(data));
  };

  useEffect(() => {
    fetchExcuse();
  }, [type]);

  return (
    <center>
      <div className="box">
        <h2 className="head">Excuse Generator</h2>
        <div className="sub-box">
          <h2 className="cat">Category</h2>
          <p className="cat-p">{type}</p>
        </div>
        <div className="sub-box">
          <h2 className="cat">Excuse</h2>
          <p className="cat-p">{excuseData[0]?.excuse}</p>
        </div>
        <div className="button-container">
          <button onClick={fetchExcuse}>Get New Excuse</button>
        </div>
      </div>
      <div className="button-container">
        <Link to="/excuse-generator">
          <button style={{ backgroundColor: "red" }}>Back To Home</button>
        </Link>
      </div>
    </center>
  );
};

export default DisplayExcuse;
