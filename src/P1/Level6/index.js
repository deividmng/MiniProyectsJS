import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Level = () => {
  const [radius, setRadius] = useState('');
  const [area, setArea] = useState(null);
  const [circumference, setCircumference] = useState(null);

  const handleRadiusChange = (event) => {
    setRadius(event.target.value);
  };

  const calculateCircleMetrics = () => {
    const parsedRadius = parseFloat(radius);

    // Check if the input is a valid number
    if (!isNaN(parsedRadius)) {
      // Define the value of pi
      const pi = 3.14;

      // Calculate the area of the circle
      const calculatedArea = pi * parsedRadius * parsedRadius;

      // Calculate the circumference of the circle
      const calculatedCircumference = 2 * pi * parsedRadius;

      // Set the area and circumference states
      setArea(calculatedArea);
      setCircumference(calculatedCircumference);
    } else {
      // Display an error message if the input is not a valid number
      alert('Please enter a valid number for the radius.');
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
        <Link to="../Level7">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>Calculate Circle Metrics</h2>
      <div className="input-container">
        <label>Enter the radius of the circle:</label>
        <input className='inputT' type="text" value={radius} onChange={handleRadiusChange} />
      </div>
      <button className='resultT' onClick={calculateCircleMetrics}>Calculate Metrics</button>
      {area !== null && circumference !== null && (
        <div>
          <p className="text-center">The area of the circle is: {area}</p>
          <p className="text-center">The circumference of the circle is: {circumference}</p>
        </div>
      )}
      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Write a script that prompts the user to enter the radius of the circle and calculates the area and circumference of the circle.
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          This component allows the user to input the radius of a circle and calculates the area and circumference when the "Calculate Metrics" button is clicked.
        </p>
      </div>
    </div>
  );
};

export default Level;
