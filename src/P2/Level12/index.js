import React, { useState, useRef, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import So11 from '../../assets/images/imgSolutions/level11.png';
import So11j from '../../assets/images/imgSolutions/level11.j.png';
import Eye from '../../assets/images/ojo.png';
import'./index.scss';

const Level = () => {
  const [age, setAge] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showImages, setShowImages] = useState(false);

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const calculateFeedback = () => {
    const ageInt = parseInt(age, 10);

    if (ageInt >= 18) {
      setFeedback("You are old enough to drive.");
    } else {
      const yearsLeft = 18 - ageInt;
      setFeedback(`You are left with ${yearsLeft} years to drive.`);
    }

    // Llama a la función para comparar edades
    compareAges(ageInt);
  };

  const compareAges = (userAge) => {
    const myAge = 25;  // Supongamos que mi edad es 25

    if (!isNaN(userAge)) {
      if (myAge === userAge) {
        console.log("We are the same age!");
      } else if (myAge > userAge) {
        console.log(`You are ${myAge - userAge} years younger than me.`);
      } else {
        console.log(`You are ${userAge - myAge} years older than me.`);
      }
    } else {
      console.log("Invalid input. Please enter a valid number for age.");
    }
  };

  const toggleImages = () => {
    setShowImages(!showImages);
  };

  const imageRef = useRef(null);

  const handleClickOutside = (event) => {
    if (imageRef.current && !imageRef.current.contains(event.target)) {
      setShowImages(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
        <Link to="../Level2">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>You are old enough to drive </h2>
      <div className="input-container">
        <label>Enter your age:</label>
        <input
          className="inputT"
          type="text"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <button className="resultT" onClick={calculateFeedback}>
        Get Feedback
      </button>
      <p className="text-center">{feedback}</p>
      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Get user input using prompt(“Enter your age:”). If the user is 18 or older,
          give feedback: 'You are old enough to drive,' but if not 18 give
          another feedback stating to wait for the number of years he needs to
          turn 18.
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          This code creates a React component that asks the user for
          their age, calculates if they are old enough to drive, and displays a
          message accordingly.
        </p>
      </div>
      <div className="displayImg">
        {showImages && (
          <>
            <img className="max" src={So11} alt="developer" />
            <img className="max" src={So11j} alt="developer" />
          </>
        )}
      </div>
    </div>
  );
};

export default Level;
