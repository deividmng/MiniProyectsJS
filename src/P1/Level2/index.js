import React, { useState } from 'react';
import { FaArrowCircleLeft,FaArrowAltCircleRight  } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';
import './index.scss';

const Level = () => {
  const [stringValue, setStringValue] = useState('0');
  const [numberValue, setNumberValue] = useState(10);
  const [inputValue, setInputValue] = useState('');
  const [comparisonResult, setComparisonResult] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCompareClick = () => {
    if (!isNaN(inputValue)) {
      const newNumberValue = parseInt(inputValue, 10);
      setNumberValue(newNumberValue);
      setStringValue(inputValue);

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

<Link to="../Level3">
<  FaArrowAltCircleRight />
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
        <button  onClick={handleCompareClick}>
          Change Number
        </button>
      </div>
      <div className="result">
        <p>Number: {numberValue} Is : {comparisonResult}</p>
      </div>
      <div className="explanation">
        <p className='text-center'>Exercise</p>
        <pp className='text-center'>
          Declare `stringValue` with the value '10' and `numberValue` with the value of the current number. Use the `typeof` operator to check if `stringValue` is equal to `numberValue`.
        </pp>
        <p className='text-center'>Explanation</p>
        <p p className='text-center'>
          This component compares a string value and a number value using the `typeof` operator and checks for equality. You can dynamically change the number and see the updated comparison. Additionally, it now displays whether the number is greater than, less than, or equal to 10.
        </p>
      </div>
    </div>
  );
};

export default Level;
