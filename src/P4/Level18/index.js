import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../scss/app.scss";
import "./index.scss";
import Slch from "../../assets/images/imgSolutions3/level15h.png";
import Slcj from "../../assets/images/imgSolutions3/level15j.png";
import Eye from "../../assets/images/ojo.png";

const Level = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [length, setLength] = useState(5);
  const [id, setId] = useState("");

  const generateId = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let newId = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newId += characters.charAt(randomIndex);
    }

    setId(newId);
  };

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level14">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/loops">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level16">
          <FaArrowAltCircleRight />
        </Link>
      </div>

        <h2>Random Password Generator</h2>
      <div className="container-b">
        <div className="center-loop">
          <input
            type="number"
            id="length"
            placeholder="Enter length of the Password"
            value={length}
            onChange={(event) => setLength(event.target.value)}
          />
          <button className="btn-green" onClick={generateId}>Generate Password</button>
          <p >{id}</p>
        </div>
      </div>

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
        Develop a small script which generate any number of characters random id:
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
        With this code we can create a random password, we use "  Math.floor(Math.random() " to get a random number
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
