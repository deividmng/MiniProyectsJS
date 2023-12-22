import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Level = () => {
  const [yearsLived, setYearsLived] = useState('');
  const [secondsLived, setSecondsLived] = useState(null);

  const handleYearsLivedChange = (event) => {
    setYearsLived(event.target.value);
  };

  const calculateSecondsLived = () => {
    const years = parseInt(yearsLived);

    if (!isNaN(years) && years >= 0) {
      const seconds = years * 365 * 24 * 60 * 60; // assuming an average of 365 days in a year
      setSecondsLived(seconds);
    } else {
      alert('Please enter a valid number of years.');
    }
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level10">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/">
          <MdHome />
        </Link>
        <Link to="../Level2">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>Calculate Seconds Lived</h2>
      <div className="input-container">
        <label>Enter number of years you live:</label>
        <input className='inputT' type="text" value={yearsLived} onChange={handleYearsLivedChange} />
      </div>
      <button className='resultT' onClick={calculateSecondsLived}>Calculate Seconds Lived</button>
      <p className="text-center">{secondsLived !== null ? `You lived ${secondsLived} seconds.` : 'Enter the number of years and calculate seconds lived.'}</p>
      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Write a script that prompts the user to enter the number of years and calculates the number of seconds a person can live, assuming someone lives just a hundred years.
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          This component allows the user to input the number of years they've lived and calculates the corresponding number of seconds, assuming an average of 365 days in a year.
        </p>
      </div>
    </div>
  );
};

export default Level;
