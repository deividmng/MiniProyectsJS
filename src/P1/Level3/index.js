import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import "./index.scss";
import "../../scss/app.scss";
import Slch from "../../assets/images/imgSolutions/level3h.png";
import Slcj from "../../assets/images/imgSolutions/level3j.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Eye from "../../assets/images/ojo.png";

const Level = () => {
  
    const imageRef = useRef();
    const [showImages, setShowImages] = useState(false);
    const toggleImages = () => {
      setShowImages(!showImages);
    };
  // Create a new Date object
  const currentDate = new Date();

  // Get the current year
  const year = currentDate.getFullYear();
  console.log("Current Year:", year);

  // Get the current month as a number (0-11, where 0 is January and 11 is December)
  const month = currentDate.getMonth();
  console.log("Current Month:", month + 1); // Adding 1 to make it 1-12

  // Get the current date
  const date = currentDate.getDate();

  // Get the day of the week as a number (0-6, where 0 is Sunday and 6 is Saturday)
  const day = currentDate.getDay();
  console.log("Day of the Week (Number):", day);

  // Get the current hours
  const hours = currentDate.getHours();
  console.log("Current Hours:", hours);

  // Get the current minutes
  const minutes = currentDate.getMinutes();
  console.log("Current Minutes:", minutes);

  // Get the number of seconds elapsed from January 1, 1970, to now (timestamp)
  const secondsSince1970 = currentDate.getTime() / 1000; // Convert milliseconds to seconds
  console.log("Seconds since January 1, 1970:", secondsSince1970);

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level2">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level4">
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <h2>Date and Time Information</h2>
      <div className="linear">
        <div className="time-info">
          <p>Year: {year}</p>
          <p>Month: {month + 1}</p>
          <p>Date: {date}</p>
          <p>Day of the Week : {day}</p>
          <p>Current Hours: {hours}</p>
          <p>Current Minutes: {minutes}</p>
          <p>Seconds since 1970: {secondsSince1970}</p>
        </div>
        <div className="">
          <p className="text-center">Exercise</p>
          <p className="text-center">
            Use the Date object to perform the following activities and
            displaying information about the current date and time, including
            the year, month, day, hours, minutes, and the number of milliseconds
            that have passed since January 1, 1970.
          </p>
          
        </div>
      </div>

      <div>
        <div className="Slider">
          {showImages && (
            <>
              <div className="align-right">
                <button className="close-button" onClick={toggleImages}>
                  X
                </button>
              </div>
              <Slider>
                <div>
                  <img className="" src={Slch} alt="developer" />
                  <p>HTML</p>
                </div>
                <div>
                  <img className="" src={Slcj} alt="developer" />
                </div>
              </Slider>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Level;
