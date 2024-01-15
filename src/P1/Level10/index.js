import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../scss/app.scss";
import Slch from "../../assets/images/imgSolutions/level10h.png";
import Slcj from "../../assets/images/imgSolutions/level10j.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Eye from "../../assets/images/ojo.png";

const Level = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  const [yearsLived, setYearsLived] = useState("");
  const [secondsLived, setSecondsLived] = useState(null);

  const handleYearsLivedChange = (event) => {
    setYearsLived(event.target.value);
  };

  const calculateSecondsLived = () => {
    const years = parseInt(yearsLived);

    if (!isNaN(years) && years >= 0) {
      const seconds = years * 365 * 24 * 60 * 60; // assuming an average of 365 days in a year
      setSecondsLived(seconds);
    } else {
      alert("Please enter a valid number of years.");
    }
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level9">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="/Condicionals">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>Calculate Seconds Lived</h2>
      <div className="container">
        <div className="input-container">
          <label>Enter number of years you live:</label>
          <input
            className="inputT"
            type="text"
            value={yearsLived}
            onChange={handleYearsLivedChange}
          />
        </div>
        <p className="text-center">
          {secondsLived !== null
            ? `If you live ${yearsLived} years, you will have lived approximately ${secondsLived} seconds.`
            : " "}
        </p>
      </div>
      <button className="resultT" onClick={calculateSecondsLived}>
        Calculate Seconds Lived
      </button>
      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Write a script that prompts the user to enter the number of years and
          calculates the number of seconds a person can live, assuming someone
          lives just a hundred years.
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          This component allows the user to input the number of years they've
          lived and calculates the corresponding number of seconds, assuming an
          average of 365 days in a year.<br></br> 
          The !== null is a strict inequality
          comparison used to check if a variable or expression is not equal to
          null
        </p>
      </div>
      <div className={showSlider ? "Slider2 visible" : "Slider2"}>
        {showImages && (
          <>
            <div className="align-right">
              <button className="close-button" onClick={toggleImages}>
                X
              </button>
            </div>
            <Slider>
              <div>
                <img className="" src={Slch} alt="SolutionsHtml" />
                <p>HTML</p>
              </div>
              <div>
                <img className="" src={Slcj} alt="SolutionJS" />
                <p>JS</p>
              </div>
            </Slider>
          </>
        )}
      </div>
    </div>
  );
};

export default Level;
