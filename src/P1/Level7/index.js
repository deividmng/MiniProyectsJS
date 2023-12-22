import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Level = () => {
  const [x, setX] = useState('');
  const [y, setY] = useState(null);

  const handleXChange = (event) => {
    setX(event.target.value);
  };

  const calculateY = () => {
    const parsedX = parseFloat(x);

    // Check if the input is a valid number
    if (!isNaN(parsedX)) {
      // Calculate the value of y
      const calculatedY = parsedX ** 2 + 6 * parsedX + 9;

      // Set the y state
      setY(calculatedY);
    } else {
      // Display an error message if the input is not a valid number
      alert('Please enter a valid number for x.');
    }
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level6">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/">
          <MdHome />
        </Link>
        <Link to="../Level8">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>Calculate the value </h2>
      <div className="input-container">
        <label>Enter x:</label>
        <input  className='inputT' type="text" value={x} onChange={handleXChange} />
      </div>
      <button className='resultT' onClick={calculateY}>Calculate y</button>
      <p className="text-center">{y !== null ? `y: ${y}` : 'Enter x and calculate y'}</p>
      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Calculate the value of y using the equation y = x^2 + 6x + 9. Try different x values and figure out at what x value y is 0.
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          This component allows the user to input a value for x and calculates the corresponding value of y using the given equation.
        </p>
      </div>
    </div>
  );
};

export default Level;
