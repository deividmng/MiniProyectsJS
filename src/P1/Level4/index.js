import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './index.scss';

const Level = () => {
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [area, setArea] = useState(null);

  const handleBaseChange = (event) => {
    setBase(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const calculateArea = () => {
    const parsedBase = parseFloat(base);
    const parsedHeight = parseFloat(height);

    // Check if the inputs are valid numbers
    if (!isNaN(parsedBase) && !isNaN(parsedHeight)) {
      // Calculate the area of the triangle
      const calculatedArea = 0.5 * parsedBase * parsedHeight;

      // Set the area state
      setArea(calculatedArea);
    } else {
      // Display an error message if inputs are not valid numbers
      alert('Please enter valid numbers for base and height.');
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
        <Link to="../Level5">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>Calculate Triangle Area</h2>
      <div className="input-container">
        <label>Enter the base  Triangle:</label>
        <input className='inputT' type="text" value={base} onChange={handleBaseChange} />
      </div>
      <div className="input-container">
        <label>Enter  the height of the Triangle:</label>
        <input className='inputT' type="text" value={height} onChange={handleHeightChange} />
      </div>
      <button className='resultT' onClick={calculateArea}>Calculate Area</button>
      {area !== null && (
        <div>
          <p>The area of the triangle is {area}</p>
        </div>
      )}
      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Write a script that prompts the user to enter the base and height of the triangle and calculates the area of the triangle (area = 0.5 x b x h).
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          This component allows the user to input the base and height of a triangle and calculates the area when the "Calculate Area" button is clicked.
        </p>
      </div>
    </div>
  );
};

export default Level;
