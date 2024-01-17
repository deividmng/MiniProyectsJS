import React, { useState, useRef } from 'react';
import './index.scss';
import '../../scss/app.scss';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import Eye from '../../assets/images/ojo.png';
import Sol1h from '../../assets/images/imgSolutions/level1h.png'
import Sol1j from '../../assets/images/imgSolutions/level1j.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const Level = () => {
  const [showImages, setShowImages] = useState(false);

  // Declare variables and assign values
  let firstName = 'David';
  let lastName = 'Exposito';
  let country = 'Spain';
  let city = 'Jaen';
  let age = 30;
  let isMarried = false;
  let year = 2023;

  // Use typeof to check data types
  console.log('Type of firstName:', typeof firstName);
  console.log('Type of lastName:', typeof lastName);
  console.log('Type of country:', typeof country);
  console.log('Type of city:', typeof city);
  console.log('Type of age:', typeof age);
  console.log('Type of isMarried:', typeof isMarried);
  console.log('Type of year:', typeof year);

  const toggleImages = () => {
    setShowImages(!showImages);
  };

  const imageRef = useRef(null);

  // const handleClickOutside = (event) => {
  //   if (imageRef.current && !imageRef.current.contains(event.target)) {
  //     setShowImages(false);
  //   }
  // };

  // useEffect(() => {
  //   // document.addEventListener('click', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  return (
    <div className="level-container">

      <div className="links">
        <Link to="/">
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
      
      <h2>User Information</h2>

<div className='text-center'>

      <ul>
        <li>
          <span>First Name: {firstName}</span>
        </li>
        <li>
          <span>Last Name: {lastName}</span>
        </li>
        <li>
          <span>Country: {country}</span>
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
</div>
      

      <p className="text-center">Ejercicio</p>
      <p className="text-center">
        Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the
        typeof operator to check different data types.
      </p>
      <p className="text-center">Explanation</p>
      <p className="text-center">
        This component displays user information with different data types.
      </p>
        

      <div className='Slider'>
        {showImages && (
          <>
            <div className='align-right'>

            <button className="close-button" onClick={toggleImages}>
              X
            </button>
            </div>
            <Slider>
              
              <div>
                <img className="" src={Sol1h} alt="developer" />
                <p>HTML</p>
              </div>
              <div>
                <img className="" src={Sol1j} alt="developer" />
              </div>
              <div>
                <img className="" src={Sol1h} alt="developer" />
              </div>
            </Slider>
          </>
        )}
      </div>
      
    </div>
  );
};

export default Level;
