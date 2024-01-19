import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../scss/app.scss";
import Slch from "../../assets/images/imgSolutions2/level13h.png";
import Slcj from "../../assets/images/imgSolutions2/level13j.png";
import Slcc from "../../assets/images/imgSolutions2/level13c.png";
import Eye from "../../assets/images/ojo.png";
import "./index.scss";

const Level = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [showFullStack, setShowFullStack] = useState(true);
  const [fullStack, setFullStack] = useState([]);
  const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
  const backEnd = ["Node", "Express", "MongoDB"];

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  const combineStacks = () => {
    const combinedStack = [...frontEnd, ...backEnd];
    setFullStack(combinedStack);
  };

  const toggleFullStack = () => {
    setShowFullStack(!showFullStack);
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level12">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/Condicionals">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="/Condicionals">
          <FaArrowAltCircleRight />
        </Link>
      </div>

      <div className="front-end">
        <h2>Current Shopping Cart:</h2>

        <div>
          <h1>Front-End Stack:</h1>
          <ul className="ul-shop">
            {frontEnd.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Back-End Stack:</h3>
          <ul className="ul-shop">
            {backEnd.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <button
  
        className="btn-green"
          onClick={() => {
            toggleFullStack();
            combineStacks();
            
          }}
        >
          {showFullStack ? "Hide Full Stack" : "Show Full Stack"}
        </button >
        {showFullStack && (
          <div>
            <h3>Full Stack:</h3>
            <ul className="ul-shop">
              {fullStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Concatenate the following two variables and store them in a fullStack
          variable.
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          This HTML and JavaScript code creates a webpage with three lists
          (Front-End, Back-End, and combined) and a button that toggles between
          displaying the combined list and clearing it upon clicking.
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
                <img className="" src={Slcc} alt="SolutionJS" />
                <p>CSS</p>
              </div>
            </Slider>
          </>
        )}
      </div>
    </div>
  );
};

export default Level;
