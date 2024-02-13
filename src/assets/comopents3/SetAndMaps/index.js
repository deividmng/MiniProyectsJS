import React, { useState, useRef } from "react";
// import "./index.scss";
import Eye from "../../assets/images/icons/icons8-idea.svg";
// import "../../scss/app.scss";
import Hp1 from "../../assets/helping2/img-help-setmaps.png";
import Hp2 from "../../assets/helping2/img-help-setmaps2.png";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import {
  // RiNumber1,
  // RiNumber2,
  // RiNumber3,
  // RiNumber4,
  RiNumber5,
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
        <h2>Set And Maps </h2>
        <div className="aling" ref={imageRef} onClick={toggleImages}>
          <div className="flex-container">
            <img className="idea" src={Eye} alt="developer" />
            <div className="btn-container">
              <a
                download="SetAndMaps.pdf"
                className={`text-btn ${isClicked ? "onclic" : ""}`}
                onClick={handleClick}
                href="./notes/SetAndMaps.pdf" >
              </a>
            </div>
          </div>
        </div>
      </div>


    <div className="just-one">

      <div className="card" >
          <Link to="../Level24">
            <p>Exercise: level 2 </p>
            <div style={{ fontSize: "15em" }}>
              <RiNumber5 />
            </div>
          </Link>
      
        </div>
    </div>

      <div className="container-card">
       
    

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
               
              </Slider>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;


