import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../scss/app.scss";
import "./index.scss";
import Slch from "../../assets/level2immg/ejercicio3/level2-h.png";
import Slcj1 from "../../assets/level2immg/ejercicio3/level-2-j.png";
import Slcj2 from "../../assets/level2immg/ejercicio3/level2-j2.png";
import Slcj3 from "../../assets/level2immg/ejercicio3/level2-j3.png";
import Eye from "../../assets/images/ojo.png";
import { useCountries } from "./countries.js";

const Level = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const { countries } = useCountries();

  const [showTopThree, setShowTopThree] = useState(false);

  const sortAndSliceTopThree = () => {
    const sortedCountries = [...countries].sort((a, b) => b.count - a.count);
    return sortedCountries.slice(0, 3);
  };

  const topThreeCountries = showTopThree ? sortAndSliceTopThree() : [];

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level21">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/Higher">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level23">
          <FaArrowAltCircleRight />
        </Link>
      </div>

      <h2>Countries</h2>
      <div className="container-country">
        <h1>Country Filter</h1>

        <ul>
          {countries.map((country) => (
            <li key={country.country}>
              Language: {country.country} &nbsp; Capital: {country.capital}{" "}
              &nbsp;
            </li>
          ))}
        </ul>

        <ul>
          {topThreeCountries.map((country) => (
            <li key={country.country}>{country.country} &nbsp;</li>
          ))}
        </ul>
        <button
          className="btn-green"
          onClick={() => setShowTopThree(!showTopThree)}
        >
          {showTopThree ? "Hide Top 3" : "Find Top 3 Most Spoken"}
        </button>
      </div>

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">Find the 3 most spoken languages</p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          with this mini exercise we are using "countries.sort((a, b) =  b.count"
          - a.count); for illiteral from the highest number to the lowest and countries.slice(0, 3); to get the 3 ones
        </p>
      </div>
      <div className={showSlider ? "Slider2 visible" : "Slider2"}>
        {showImages && (
          <>
            <div className="align-right">
              <button className="close-button" onClick={toggleImages}>
                X
              </button>
            </div>
            <Slider>
              <div>
                <img className="" src={Slch} alt="SolutionsHtml" />
                <p>HTML</p>
              </div>
              <div>
                <img className="" src={Slcj1} alt="SolutionJS" />
                <p>JS</p>
              </div>
              <div>
                <img className="" src={Slcj2} alt="SolutionJS" />
                <p>JS</p>
              </div>
              <div>
                <img className="" src={Slcj3} alt="SolutionJS" />
                <p>JS</p>
              </div>
            </Slider>
          </>
        )}
      </div>
    </div>
  );
};

export default Level;
