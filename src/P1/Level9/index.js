

import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Level = () => {
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
        <Link to="../Level10">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>Check Driving Eligibility</h2>
      <div className="input-container">
        <label>Enter birth year:</label>
        <input className='inputT' type="text" value={birthYear} onChange={handleBirthYearChange} />
      </div>
      <button className='resultT' onClick={checkDrivingEligibility}>Check Eligibility</button>
      <p className="text-center">{result}</p>
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
    </div>
  );
};

export default Level;
