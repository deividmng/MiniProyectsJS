import React, { useState, useRef, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./index.scss";
import Slch from "../../assets/level2immg/ejercicio2/level2-2-h.png";
import Slcj1 from "../../assets/level2immg/ejercicio2/level2-2-j1.png";
import Slcj2 from "../../assets/level2immg/ejercicio2/level2-2-j2.png";
import Eye from "../../assets/images/ojo.png";
import { useCountries } from "./countries.js";

const Level = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  const [filterValue, setFilterValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const { countries } = useCountries();
  useEffect(() => {
    setFilteredCountries(
      filterValue === ""
        ? countries
        : countries.filter((country) =>
            country.toLowerCase().includes(filterValue.toLowerCase())
          )
    );
  }, [filterValue, countries]);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level20">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/Higher">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level22">
          <FaArrowAltCircleRight />
        </Link>
      </div>

      <div className="container">
        <div>
          <h2>Country Filter</h2>
          <label htmlFor="filterInput">Filter countries containing:</label>
          <div className="center">
            <input
              type="text"
              id="filterInput"
              value={filterValue}
              onChange={handleFilterChange}
            />
          </div>
          <h3>{filterValue === "" ? "Countries" : "Filtered Countries"}</h3>
          <div id="showCountries">
            {filteredCountries.map((country) => (
              <li key={country}>{country}</li>
            ))}
          </div>
        </div>
      </div>

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Declare a function called categorizeCountries which returns an array
          of countries which have some common pattern
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          What we are doing here we are filtering with filter
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
            </Slider>
          </>
        )}
      </div>
    </div>
  );
};

export default Level;
