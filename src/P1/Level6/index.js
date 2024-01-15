import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../scss/app.scss";
// import "../../scss/app.scss";
import Slch from "../../assets/images/imgSolutions/level6h.png";
import Slcj from "../../assets/images/imgSolutions/level6j.png";
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

  const [radius, setRadius] = useState("");
  const [area, setArea] = useState(null);
  const [circumference, setCircumference] = useState(null);

  const handleRadiusChange = (event) => {
    setRadius(event.target.value);
  };

  const calculateCircleMetrics = () => {
    const parsedRadius = parseFloat(radius);

    // Check if the input is a valid number
    if (!isNaN(parsedRadius)) {
      // Define the value of pi
      const pi = 3.14;

      // Calculate the area of the circle
      const calculatedArea = pi * parsedRadius * parsedRadius;

      // Calculate the circumference of the circle
      const calculatedCircumference = 2 * pi * parsedRadius;

      // Set the area and circumference states
      setArea(calculatedArea);
      setCircumference(calculatedCircumference);
    } else {
      // Display an error message if the input is not a valid number
      alert("Please enter a valid number for the radius.");
    }
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level6">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level7">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>Calculate Circle Metrics</h2>
      <dic className="container">
        <div className="input-container">
          <label>Enter the radius of the circle:</label>
          <input
            className="inputT"
            type="text"
            value={radius}
            onChange={handleRadiusChange}
          />
        </div>
        <button className="resultT" onClick={calculateCircleMetrics}>
          Calculate Metrics
        </button>
        {area !== null && circumference !== null && (
          <div>
            <p className="text-center">The area of the circle is: {area}</p>
            <p className="text-center">
              The circumference of the circle is: {circumference}
            </p>
          </div>
        )}
      </dic>
      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Write a script that prompts the user to enter the radius of the circle
          and calculates the area and circumference of the circle.
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          This component allows the user to input the radius of a circle and
          calculates the area and circumference when the "Calculate Metrics"
          button is clicked. 
          <br></br>
          The toFixed method in JavaScript is used to format a
          number with a specified number of digits after the decimal point. It
          returns a string representation of the number with the specified
          precision.
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
                <img className="" src={Slch} alt="developer" />
                <p>HTML</p>
              </div>
              <div>
                <img className="" src={Slcj} alt="developer" />
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
