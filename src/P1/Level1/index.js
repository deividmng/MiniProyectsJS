import React from 'react'
import './index.scss';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";

const Level = () => {
  // Declare variables and assign values
  let firstName = 'David';
  let lastName = 'Exposito';
  let country = 'Spain';
  let city = 'jaen';
  let age = 30;
  let isMarried = false;
  let year = 2023;

  // Use typeof to check data types
  console.log('Type of firstName:',  firstName);
  console.log('Type of lastName:',  lastName);
  console.log('Type of country:',  country);
  console.log('Type of city:', city);
  console.log('Type of age:',  age);
  console.log('Type of isMarried:',  isMarried);
  console.log('Type of year:',  year);

  return (

    <div className="level-container">
      <div className='links'>

    <Link to="/">
       
    <FaArrowCircleLeft />
  </Link>

  <Link to="/">
   
<MdHome />
</Link>
    <Link to="../Level2">
    <  FaArrowAltCircleRight />
  </Link>
      </div>
    <h2>User Information</h2>
    <ul>
      <li>
        <span>First Name: {firstName}</span> 
      </li>
      <li>
        <span>Last Name: {lastName}</span> 
      </li>
      <li>
        <span>Country:  {country}</span>
      </li>
      <li>
        <span>City: {city}</span> 
      </li>
      <li>
        <span>Age: {age}</span> 
      </li>
      <li>
        <span>Marital Status: {isMarried ? 'Married' : 'Single'}</span> 
      </li>
      <li>
        <span>Year: {year}</span> 
      </li>
    </ul>
    <p className='text-center'>Ejercicio</p>
    <p p className='text-center'>
    Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
    </p>
    <p className='text-center'>Explanation</p>
    <p className='text-center' >
        This component displays user information with different data types.
      </p>
  </div>
  );
};

export default Level;
