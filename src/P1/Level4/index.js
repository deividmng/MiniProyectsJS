import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import "./index.scss";
import "../../scss/app.scss";
import Slch from "../../assets/images/imgSolutions/level4h.png";
import Slcj from "../../assets/images/imgSolutions/level4j.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Eye from "../../assets/images/ojo.png";

const Level = () => {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState(null);

  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  const handleBaseChange = (event) => {
    setBase(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const calculateArea = () => {
    const parsedBase = parseFloat(base);
    const parsedHeight = parseFloat(height);

    if (!isNaN(parsedBase) && !isNaN(parsedHeight)) {
      const calculatedArea = 0.5 * parsedBase * parsedHeight;
      setArea(calculatedArea);
    } else {
      alert("Please enter valid numbers for base and height.");
    }
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level1">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level5">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>Calculate Triangle Area</h2>

      <div className="container">
        <div className="input-container">
          <div className="input-group">
            <label>Enter the base Triangle:</label>
            <input
              className="inputT"
              type="text"
              value={base}
              onChange={handleBaseChange}
            />
          </div>
          <div className="input-group">
            <label>Enter the height of the Triangle:</label>
            <input
              className="inputT"
              type="text"
              value={height}
              onChange={handleHeightChange}
            />
          </div>
        </div>
        <div  >
          {area !== null && (
            <div>
              <p className="resultShow">The area of the triangle is : {area}</p>
            </div>
          )}
        </div>
      </div>

      <button className="resultT" onClick={calculateArea}>
        Calculate Area
      </button>

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Write a script that prompts the user to enter the base and height of
          the triangle and calculates the area of the triangle (area = 0.5 x b x
          h).
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          This component allows the user to input the base and height of a
          triangle and calculates the area when the "Calculate Area" button is
          clicked.
          <br></br>
          ParseFloat is used to convert those strings to decimal numbers before
          performing the addition operation.
          <br></br>
          !isNaN is used to validate that the result of the addition is a number
          before displaying it, thus ensuring that only arithmetic operations
          are performed on valid numerical values.
        </p>
      </div>
      <div>
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
                </div>
              </Slider>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Level;
