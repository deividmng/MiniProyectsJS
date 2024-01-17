import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../scss/app.scss";
import "./index.scss";
import Slch from "../../assets/images/imgSolutions2/level12h.png";
import Slcj from "../../assets/images/imgSolutions2/level12j.png";
// import Slcc from "../../assets/images/imgSolutions2/level12c.png";
import Slcj2 from "../../assets/images/imgSolutions2/level12jcoun.png";
import Eye from "../../assets/images/ojo.png";
import { useCountries } from "./countries.js";

const Level = () => {
  const imageRef = useRef();

  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const { countries, setCountries } = useCountries();
  const [addOption, setAddOption] = useState(null);

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  const hasOption = (option) => countries.includes(option);

  const handleAddOption = (option) => {
    if (!hasOption(option)) {
      setCountries([...countries, option]);
    }
    setAddOption(null);
  };

  const renderDropdownCountry = () => {
    const options = ["Ethiopia", "Spain"]; // add more countrys to the array

    return (
      <div className="dropdownCountry">
        <button className="dropbtn">Add Country</button>
        <div className="dropdown-content">
          {options.map((option) => (
            <button key={option} onClick={() => handleAddOption(option)}>
              Add {option}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level11">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/Condicionals">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level13">
          <FaArrowAltCircleRight />
        </Link>
      </div>

      <div className="">
        <h2>List of Countries</h2>

        <div>
          <ul className="ul-shop">
            {countries.map((country, index) => (
              <li key={index}>{country}</li>
            ))}
          </ul>
          {addOption ? (
            renderDropdownCountry()
          ) : (
            <button className="dropbtn" onClick={() => setAddOption("Options")}>
              Add Country
            </button>
          )}
        </div>
      </div>

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Synchronize an array with countries in another js file and check if
          'Ethiopia' and 'Spain' exists in the array if it exists, print
          'ETHIOPIA' and 'Spain'. If it does not exist add to the list of
          countries.
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          This exercise represents the deployment of an array from another file,
          <br></br>
          and with the "Add Country" button, we add two more countries.
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
              <div className="">
                <img className="slider-image" src={Slch} alt="SolutionsHtml" />
                <p>HTML</p>
              </div>
              <div className="slider-img">
                <img className="slider-image" src={Slcj} alt="SolutionJS" />
                <p>JS</p>
              </div>
              {/* <div className="slider-img">
                <img className="slider-image" src={Slcc} alt="SolutionJc" />
                <p>Css</p>
              </div> */}
              <div className="slider-img">
                <img className="slider-image" src={Slcj2} alt="SolutionJS" />
                <p>  script  src="countries.js" </p>
              </div>
            </Slider>
          </>
        )}
      </div>
    </div>
  );
};

export default Level;
