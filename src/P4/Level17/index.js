import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../scss/app.scss";
import Slch from "../../assets/images/imgSolutions2/level11h.png";
import Slcj from "../../assets/images/imgSolutions2/level11j.png";
import Eye from "../../assets/images/ojo.png";

const Level = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
 


  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };




  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level10">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/Condicionals">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level12">
          <FaArrowAltCircleRight />
        </Link>
      </div>

      <div className="container">
        <h2>temaplete</h2>
     

      
      </div>

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
      
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
      
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
            </Slider>
          </>
        )}
      </div>
    </div>
  );
};

export default Level;
