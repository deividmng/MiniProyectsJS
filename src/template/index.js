import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Level = () => {
  const [age, setAge] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const calculateFeedback = () => {
    const ageInt = parseInt(age, 10);

    if (ageInt >= 18) {
      setFeedback('You are old enough to drive.');
    } else {
      const yearsLeft = 18 - ageInt;
      setFeedback(`You are left with ${yearsLeft} years to drive.`);
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
        <Link to="../Level2">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>Calculate the value </h2>
      <div className="input-container">
        <label>Enter your age:</label>
        <input
          className='inputT'
          type="text"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <button className='resultT' onClick={calculateFeedback}>Get Feedback</button>
      <p className="text-center">{feedback}</p>
      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          {/* Explanation content */}
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          {/* Explanation content */}
        </p>
      </div>
    </div>
  );
};

export default Level;
