import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import "../../scss/app.scss";
import "./index.scss"
import Slch from "../../assets/images/imgSolutions3/level16h.png";
import Slcj from "../../assets/images/imgSolutions3/level16j.png";
import Slcj2 from "../../assets/images/imgSolutions3/level16-2.png";
import Eye from "../../assets/images/ojo.png";

const Level = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
 
  const [countries, setCountries] = useState(['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany']);
  const [isShowArray, setIsShowArray] = useState(false);

  const newCountryInput = React.createRef();

  const handleAddCountry = () => {
    const newCountry = newCountryInput.current.value.trim();
    if (newCountry) {
      setCountries([...countries, newCountry]);
      newCountryInput.current.value = '';
    }
  }

  
  const handleShowArray = () => {
    setIsShowArray(!isShowArray);
  };

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };


  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level15">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/loops">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="/loops">
          <FaArrowAltCircleRight />
        </Link>
      </div>

      <div className="container-loops">
      <h2>Countries</h2>
     
        <div>
    
      <input  type="text" id="newCountryInput"   placeholder="Enter new Country" ref={newCountryInput} />
      <button  className="btn-green" style={{ margin: '10px' }} id="add-country" onClick={handleAddCountry}>Add Country</button>
      <ul>
        {countries.map((country) => (
          <li className="li-counties" key={country}>{country}</li>
        ))}
      </ul>

      <button className="btn-green" id="show-array"  style={{ margin: '10px' }} onClick={handleShowArray}>{isShowArray ? 'Hide Array' : 'Show Array'}</button>
      {isShowArray && (
        <div className="array-output-countrys"  style={{ margin: '10px' }} id="array-output">
          {JSON.stringify(countries.map((country) => ({ country, code: country.slice(0, 3).toUpperCase(), letters: country.length })), null, 2)}
        </div>
      )}
    </div>

      </div>

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
        Use the countries array to create the following array of arrays: ['Albania', 'ALB', 7] <br>
        </br> And add one input to be able to put more countries
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
        This code displays a list of countries, allows adding new countries and displaying the contents of the array in a structured format
        <br></br>
        The expression country.slice(0, 3).toUpperCase() takes the first part of the string country, up to the first 3 characters, and converts it to uppercase.
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
                <img className="" src={Slcj} alt="SolutionJS" />
                <p>JS</p>
              </div>
              <div>
                <img className="" src={Slcj2} alt="SolutionJS" />
                <p>JS-P2</p>
              </div>
            </Slider>
          </>
        )}
      </div>
    </div>
  );
};

export default Level;
