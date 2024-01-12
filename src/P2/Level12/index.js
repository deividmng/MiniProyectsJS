import React, { useState, useRef, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import So12h from "../../assets/images/imgSolutions/level12.png";
import So12j from "../../assets/images/imgSolutions/level12j.png";
import Eye from "../../assets/images/ojo.png";
import "./index.scss";

const Level = () => {
  const [age, setAge] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showImages, setShowImages] = useState(false);

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const compareAges = (userAge) => {
    const myAge = 30; // suposin that I'm 30

    if (!isNaN(userAge)) {
      if (myAge === userAge) {
        setFeedback("We are the same age!");
      } else if (myAge > userAge) {
        setFeedback(`You are ${myAge - userAge} years younger than me.`);
      } else {
        setFeedback(`You are ${userAge - myAge} years older than me.`);
      }
    } else {
      setFeedback("Invalid input. Please enter a valid number for age.");
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
        <Link to="../Level11">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level13">
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
      <button
        className="resultT"
        onClick={() => compareAges(parseInt(age, 10))}
      >
        Get Feedback
      </button>
      <p className="text-center">{feedback}</p>
      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Compare the values ​​of myAge and yourAge using if... else. Based on
          the comparison, record the result in the console indicating who is
          older (you or me). Use prompt(“Enter your age:”) to get the age as
          input.
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          This code  it checks your age against a fixed number (let's say 25) and tells you if you are younger, older, or the same age
        </p>
      </div>
      <div className="displayImg">
        {showImages && (
          <>
            <img className="max" src={So12h} alt="developer" />
            <img className="max" src={So12j} alt="developer" />
          </>
        )}
      </div>
    </div>
  );
};

export default Level;
