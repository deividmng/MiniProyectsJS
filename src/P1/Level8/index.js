import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../scss/app.scss";
import Slch from "../../assets/images/imgSolutions/level8h.png";
import Slcj from "../../assets/images/imgSolutions/level8j.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Eye from "../../assets/images/ojo.png";

const PayCalculator = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  const [hours, setHours] = useState("");
  const [ratePerHour, setRatePerHour] = useState("");
  const [weeklyEarning, setWeeklyEarning] = useState(null);

  const handleHoursChange = (event) => {
    setHours(event.target.value);
  };

  const handleRatePerHourChange = (event) => {
    setRatePerHour(event.target.value);
  };

  const calculateEarning = () => {
    const parsedHours = parseFloat(hours);
    const parsedRatePerHour = parseFloat(ratePerHour);

    // Check if the inputs are valid numbers
    if (!isNaN(parsedHours) && !isNaN(parsedRatePerHour)) {
      // Calculate the weekly earning
      const calculatedEarning = parsedHours * parsedRatePerHour;

      // Set the weekly earning state
      setWeeklyEarning(calculatedEarning);
    } else {
      // Display an error message if inputs are not valid numbers
      alert("Please enter valid numbers for hours and rate per hour.");
    }
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level7">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level9">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>
        Writ a script that prompt a user to enter hours and rate per hour.
        Calculate pay of the person?
      </h2>
        <div className="container">
      <div className="input-container">
          <label>Enter hours:</label>
          <input
            className="inputT"
            type="text"
            value={hours}
            onChange={handleHoursChange}
          />
        </div>
        <div className="input-container">
          <label>Enter rate per hour:</label>
          <input
            className="inputT"
            type="text"
            value={ratePerHour}
            onChange={handleRatePerHourChange}
          />
          <p className="text-center">
            {weeklyEarning !== null
              ? `Your weekly earning is ${weeklyEarning}`
              : ""}
          </p>
        </div>
      </div>
      <button className="resultT" onClick={calculateEarning}>
        Calculate Earning
      </button>

      <p className="text-center">Exercise</p>
      <div className="explanation">
        <p className="text-center">
          Enter the number of hours worked and the rate per hour, then click
          "Calculate Earning" to find your weekly earning.
        </p>
        <p className="text-center">Explanation</p>

        <p className="text-center">
          This app calculates the weekly earning based on the entered hours and
          rate per hour.
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

export default PayCalculator;
