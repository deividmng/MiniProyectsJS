import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../scss/app.scss";
// import "../../scss/app.scss";
import Slch from "../../assets/images/imgSolutions/level7h.png";
import Slcj from "../../assets/images/imgSolutions/level7j.png";
import Slcc from "../../assets/images/imgSolutions/level7c.png";
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


  const [x, setX] = useState('');
  const [y, setY] = useState(null);

  const handleXChange = (event) => {
    setX(event.target.value);
  };

  const calculateY = () => {
    const parsedX = parseFloat(x);

    // Check if the input is a valid number
    if (!isNaN(parsedX)) {
      // Calculate the value of y
      const calculatedY = parsedX ** 2 + 6 * parsedX + 9;

      // Set the y state
      setY(calculatedY);
    } else {
      // Display an error message if the input is not a valid number
      alert('Please enter a valid number for x.');
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
        <Link to="../Level8">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>Calculate the value </h2>
      <div className="container">

      <div className="input-container">
        <label>Enter x:</label>
        <input  className='inputT' type="text" value={x} onChange={handleXChange} />
      </div>
        <p className="text-center">{y !== null ? `y: ${y}` : 'Enter x and calculate y'}</p>
      </div>
      <button className='resultT' onClick={calculateY}>Calculate y</button>
     
      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Calculate the value of y using the equation y = x^2 + 6x + 9. Try different x values and figure out at what x value y is 0.
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          This component allows the user to input a value for x and calculates the corresponding value of y using the given equation.
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
              <div>
                <img className="" src={Slcc} alt="SolutionCSS
                " />
                <p>CSS</p>
              </div>
            </Slider>
          </>
        )}
      </div>
    </div>
  );
};

export default Level;
