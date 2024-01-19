import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../scss/app.scss";
import "./loops.scss";
import Slch from "../../assets/images/imgSolutions3/level14h.png";
import Slcj from "../../assets/images/imgSolutions3/level14j.png";
import Eye from "../../assets/images/ojo.png";

const Level = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  const [evenNumbers, setEvenNumbers] = useState([]);
  const [oddNumbers, setOddNumbers] = useState([]);
  const [limit, setLimit] = useState(100);
  const [isToggled, setIsToggled] = useState(false);

  const generateEvenNumbers = () => {
    const numbers = [];
    for (let i = 0; i <= limit; i += 2) {
      numbers.push(i);
    }
    setEvenNumbers(numbers);
  };

  const generateOddNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= limit; i += 2) {
      numbers.push(i);
    }
    setOddNumbers(numbers);
  };

  const toggleEvenNumbers = () => {
    setIsToggled(!isToggled);
    if (isToggled) {
      generateEvenNumbers();
    } else {
      setEvenNumbers([]);
    }
  };

  const toggleOddNumbersOdd = () => {
    setIsToggled(!isToggled);
    if (isToggled) {
      generateOddNumbers();
    } else {
      setOddNumbers([]);
    }
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level13">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/loops">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level15">
          <FaArrowAltCircleRight />
        </Link>
      </div>

      <div >
        <h2> Numbers Even </h2>
        <button className="btn-green" onClick={toggleEvenNumbers}>
          {isToggled ? "Hide" : "Display print only even" }
        </button>
        <input
          type="number"
          min="0"
          onChange={(event) => setLimit(event.target.value)}
          className="input-loop"
        />
        <ul className="all-number">
          {evenNumbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
   
      <div>
        <h2>Numbers Odd</h2>

        <button className="btn-green" onClick={toggleOddNumbersOdd}>
          {isToggled  ? "Hide" : "Display print only Odd" }
        </button>
        <input
          type="number"
          min="0"
          onChange={(event) => setLimit(event.target.value)}
          className="input-loop"
        />

        <ul className="all-number">
          {oddNumbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
         </div>

     

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
        Use for loop to iterate from 0 to 100 and print only prime numbers<br></br>

Use for loop to iterate from 0 to 100 and print the sum of all numbers.

        </p>


        <p className="text-center">Explanation</p>
        <p className="text-center">
        The exercise allows to generate and display even numbers from 0 to a quantity specified by the user, controlling their display using a button.

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
