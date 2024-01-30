import React, { useState, useRef } from "react";
import "./index.scss";
import Eye from "../../assets/images/icons/icons8-idea.svg";
import "../../scss/app.scss";
import Hp1 from "../../assets/helping2/part.png";
import Hp2 from "../../assets/helping2/partLevel2.png";
import Hp3 from "../../assets/helping2/partLevel2-2.png";
import Hp4 from "../../assets/helping2/partLevel2-3.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  // RiNumber5,
  // RiNumber6,
  // RiNumber7,
  // RiNumber8,
  // RiNumber9,
  // RiNumber0,
} from "react-icons/ri";




const Home = () => {

  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2250);
  };


  return (
    <>
     
      <div className="text-array">
      <h2>Higher Order Functions </h2>
      <div className="aling" ref={imageRef} onClick={toggleImages}>
  <div className="flex-container">
    <img className="idea" src={Eye} alt="developer" />
    <div className="btn-container">
      <a
        download="Higher.pdf"
        className={`text-btn ${isClicked ? 'onclic' : ''}`}
        onClick={handleClick}
        href="./notes/Higher.pdf"
      >
      </a>
    </div>
  </div>
</div>

       

      </div>
     
     

      <div className="container-card">
        <div className="card">
          <Link to="../Level20">
            <p>Exercise: </p>
            <div style={{ fontSize: "15em" }}>
              <RiNumber1 />
            </div>
          </Link>
          <div></div>
        </div>

        <div className="card">
          <Link to="../Level2">
            <p>Exercise: </p>
            <div style={{ fontSize: "15em" }}>
              <RiNumber2 />
            </div>
          </Link>
        </div>

        <div className="card">
          <p>Exercise: </p>
          <Link to="../Level3">
            <div style={{ fontSize: "15em" }}>
              <RiNumber3 />
            </div>
          </Link>
        </div>

        <div className="card">
          {/* Nuevo enlace y ruta */}
          <Link to="../Level4">
            <p>Exercise: </p>
            <div style={{ fontSize: "15em" }}>
              <RiNumber4 />
            </div>
          </Link>
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
                  <img className="" src={Hp1} alt="clue" />
                </div>
                <div>
                  <img className="" src={Hp2} alt="clue" />
                </div>
                <div>
                  <img className="" src={Hp3} alt="clue" />
                </div>
                <div>
                  <img className="" src={Hp4} alt="clue" />
                </div>
               
              </Slider>
            </>
          )}
        </div>
      </div>

    
    </>
  );
};

export default Home;
