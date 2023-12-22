import React from 'react';
import { FaArrowCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';
import './index.scss'

const Level = () => {
  // Create a new Date object
  const currentDate = new Date();

  // Get the current year
  const year = currentDate.getFullYear();
  console.log('Current Year:', year);

  // Get the current month as a number (0-11, where 0 is January and 11 is December)
  const month = currentDate.getMonth();
  console.log('Current Month:', month + 1); // Adding 1 to make it 1-12

  // Get the current date
  const date = currentDate.getDate();
  console.log('Current Date:', date);

  // Get the day of the week as a number (0-6, where 0 is Sunday and 6 is Saturday)
  const day = currentDate.getDay();
  console.log('Day of the Week (Number):', day);

  // Get the current hours
  const hours = currentDate.getHours();
  console.log('Current Hours:', hours);

  // Get the current minutes
  const minutes = currentDate.getMinutes();
  console.log('Current Minutes:', minutes);

  // Get the number of seconds elapsed from January 1, 1970, to now (timestamp)
  const secondsSince1970 = currentDate.getTime() / 1000; // Convert milliseconds to seconds
  console.log('Seconds since January 1, 1970:', secondsSince1970);

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level2">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/">
          <MdHome />
        </Link>
        <Link to="../Level4">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>Date and Time Information</h2>
      <div className="time-info">
        <p>Year: {year}</p>
        <p>Month: {month + 1}</p>
        <p>Date: {date}</p>
        <p>Day of the Week : {day}</p>
        <p>Current Hours: {hours}</p>
        <p>Current Minutes: {minutes}</p>
        <p>Seconds since 1970: {secondsSince1970}</p>
      </div>
    </div>
  );
};

export default Level;
