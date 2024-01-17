import React, { useState, useRef } from 'react';
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';
import './index.scss';
import '../../scss/app.scss';
import Sol2h from '../../assets/images/imgSolutions/level2hb.png';
import Sol2j from '../../assets/images/imgSolutions/level2j.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Eye from '../../assets/images/ojo.png';

const Level = () => {
  
  const [numberValue, setNumberValue] = useState(10);
  const [inputValue, setInputValue] = useState('');
  const [comparisonResult, setComparisonResult] = useState('');


  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  // Agrega esta línea para definir imageRef

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCompareClick = () => {
    if (!isNaN(inputValue)) {
      const newNumberValue = parseInt(inputValue, 10);
      setNumberValue(newNumberValue);
     

      // Compare the new number with 10 and update the result
      if (newNumberValue > 10) {
        setComparisonResult('Greater than 10');
      } else if (newNumberValue < 10) {
        setComparisonResult('Less than 10');
      } else {
        setComparisonResult('Equal to 10');
      }
    } else {
      alert('Please enter a valid number.');
    }
  };

  return (
    <div className="level-container">
      <div className='links'>
        <Link to="../Level1">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level3">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>Number Comparison</h2>
      <div className="input-container">
        <label>Enter a number: </label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleCompareClick}>
          Compare Number
        </button>
      </div>
      <div className="result">
        <p>Number: {numberValue} Is : {comparisonResult}</p>
      </div>
      <div className="explanation">
        <p className='text-center'>Exercise</p>
        <p className='text-center'>
          Declare `stringValue` with the value '10' and `numberValue` with the value of the current number. Use the `typeof` operator to check if `stringValue` is equal to `numberValue`.
        </p>
        <p className='text-center'>Explanation</p>
        <p className='text-center'>
          This component compares a string value and a number value using the `typeof` operator and checks for equality. You can dynamically change the number and see the updated comparison. Additionally, it now displays whether the number is greater than, less than, or equal to 10.
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
                  <img className="" src={Sol2h} alt="developer" />
                  <p>HTML</p>
                </div>
                <div>
                  <img className="" src={Sol2j} alt="developer" />
                </div>
              </Slider>
            </>
          )}
        </div>
    </div>
  );
};

export default Level;
