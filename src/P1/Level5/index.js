import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import "./index.scss";
import "../../scss/app.scss";
import Slch from "../../assets/images/imgSolutions/level5h.png";
import Slcj from "../../assets/images/imgSolutions/level5j.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Eye from "../../assets/images/ojo.png";

const Level = () => {
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [sideC, setSideC] = useState('');
  const [perimeter, setPerimeter] = useState(null);



  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };
  const handleSideAChange = (event) => {
    setSideA(event.target.value);
  };

  const handleSideBChange = (event) => {
    setSideB(event.target.value);
  };

  const handleSideCChange = (event) => {
    setSideC(event.target.value);
  };

  const calculatePerimeter = () => {
    const parsedSideA = parseFloat(sideA);
    const parsedSideB = parseFloat(sideB);
    const parsedSideC = parseFloat(sideC);

    // Check if the inputs are valid numbers
    if (!isNaN(parsedSideA) && !isNaN(parsedSideB) && !isNaN(parsedSideC)) {
      // Calculate the perimeter of the triangle
      const calculatedPerimeter = parsedSideA + parsedSideB + parsedSideC;

      // Set the perimeter state
      setPerimeter(calculatedPerimeter);
    } else {
      alert('Please enter valid numbers for sides a, b, and c.');
    }
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level4">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level6">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>Calculate Triangle Perimeter:</h2>
      <div className="container"> 

      <div className="input-container">
        <label>Enter side a:</label>
        <input className='inputT' type="text" value={sideA} onChange={handleSideAChange} />
      </div>
      <div className="input-container">
        <label>Enter side b:</label>
        <input className='inputT' type="text" value={sideB} onChange={handleSideBChange} />
      </div>
      <div className="input-container">
        <label>Enter side c:</label>
        <input className='inputT' type="text" value={sideC} onChange={handleSideCChange} />
      </div>
      {perimeter !== null && (
        <div className="resultShow">
          <p>The perimeter of the triangle is {perimeter}</p>
        </div>
      )}
      </div>
      <button className='resultT' onClick={calculatePerimeter}>Calculate Perimeter</button>
      
      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Write a script that prompts the user to enter side a, side b, and side c of the triangle and calculates the perimeter of the triangle (perimeter = a + b + c).
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          This component allows the user to input the sides of a triangle and calculates the perimeter when the "Calculate Perimeter" button is clicked.
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
                </div>
              </Slider>
            </>
          )}
        </div>
    </div>
  );
};

export default Level;
