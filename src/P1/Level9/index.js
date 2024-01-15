import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../scss/app.scss";
import Slch from "../../assets/images/imgSolutions/level9h.png";
import Slcj from "../../assets/images/imgSolutions/level9j.png";
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


  const [birthYear, setBirthYear] = useState('');
  const [result, setResult] = useState('');


  const handleBirthYearChange = (event) => {
    setBirthYear(event.target.value);
  
  };


  

  

  const checkDrivingEligibility = () => {
    const currentYear = new Date().getFullYear();
    const parsedBirthYear = parseInt(birthYear);

    if (!isNaN(parsedBirthYear)) {
      const age = currentYear - parsedBirthYear;

      if (age >= 18) {
        setResult(`You are ${age}. You are old enough to drive`);
      } else {
        const yearsToWait = 18 - age;
        setResult(`You are ${age}. You will be allowed to drive after ${yearsToWait} years.`);
      }
    } else {
      setResult('Please enter a valid birth year.');
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
        <Link to="../Level10">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>Check Driving Eligibility</h2>
      <div className="container">

      <div className="input-container">
        <label>Enter birth year:</label>
        <input className='inputT' type="text" value={birthYear} onChange={handleBirthYearChange} />
      </div>
      <p className="text-center">{result}</p>
      </div>
      <button className='resultT' onClick={checkDrivingEligibility}>Check Eligibility</button>


     
      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Using prompt get the year the user was born and if the user is 18 or above allow the user to drive, if not, tell the user to wait a certain amount of years.
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          This component allows the user to input their birth year and checks if they are eligible to drive based on their age.
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
