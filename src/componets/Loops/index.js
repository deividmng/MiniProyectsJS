import React, { useState, useRef } from "react";
// import "./index.scss";
import { Link } from "react-router-dom";
import Eye from "../../assets/images/icons/icons8-idea.svg";
// import "../../scss/app.scss";
import Hp1 from "../../assets/helpimg/helpLoops1.png";
import Hp2 from "../../assets/helpimg/helpLoops2.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  RiNumber1,
  // RiNumber2,
  // RiNumber3,
  RiNumber4,
   RiNumber5,
   RiNumber6,
  // RiNumber7,
  // RiNumber8,
  // RiNumber9,
  // RiNumber0,
} from "react-icons/ri";


const Home = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  return (
    <>
      <div className="text-array">
        <h2>Loops </h2>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="idea" src={Eye} alt="developer"></img>
        </div>
      </div>

      <div className="container-card">
        <div className="card">
          <Link to="../Level14">
            <p>Exercise: </p>
            <div style={{ fontSize: "12.5em" }}>
              <div className="number10">
                <RiNumber1 />
                <RiNumber4 />
              </div>
            </div>
          </Link>
          <div></div>
        </div>

        <div className="card">
          <Link to="../Level15">
            <p>Exercise: </p>
            <div style={{ fontSize: "12.5em" }}>
              <div className="number10">
                <RiNumber1 />
                <RiNumber5 />
              </div>
            </div>
          </Link>
        </div>

        <div className="card">
          <p>Exercise: </p>
          <Link to="../Level16">
            <div style={{ fontSize: "12.5em" }}>
              <div className="number10">
                <RiNumber1 />
                <RiNumber6 />
              </div>
            </div>
          </Link>
        </div>

        {/* <div className="card"> */}
          {/* Nuevo enlace y ruta */}
          {/* <Link to="../Level4">
            <p>Exercise: </p>
            <div style={{ fontSize: "12.5em" }}>
              <div className="number10">
                <RiNumber1 />
                <RiNumber4 />
              </div>
            </div>
          </Link> */}
        {/* </div> */}
      </div>

      {/* <div className="container-card">
        <div className="card">
          <Link to="../Level5">
            <p>Exercise: </p>
            <div style={{ fontSize: "12.5em" }}>
              <div className="number10">
                <RiNumber1 />
                <RiNumber5 />
              </div>
            </div>
          </Link>
          <div></div>
        </div> */}

        {/* <div className="card">
          <Link to="../Level6">
            <p>Exercise: </p>
            <div style={{ fontSize: "12.5em" }}>
              <div className="number10">
                <RiNumber1 />
                <RiNumber6 />
              </div>
            </div>
          </Link>
        </div> */}

        {/* <div className="card">
          <Link to="../Level7">
            <p>Exercise: </p>
            <div style={{ fontSize: "12.5em" }}>
              <div className="number10">
                <RiNumber1 />
                <RiNumber7 />
              </div>
            </div>
          </Link>
        </div> */}

        {/* <div className="card">
          {/* Nuevo enlace y ruta
          <Link to="../Level8">
            <p>Exercise: </p>
            <div style={{ fontSize: "12.5em" }}>
              <div className="number10">
                <RiNumber1 />
                <RiNumber8 />
              </div>
            </div>
          </Link> */}
        {/* </div> */} 
      {/* </div> */}
      <div className="container-card">
        {/* <div className="card">
          <Link to="../Level9">
            <p>Exercise: </p>
            <div style={{ fontSize: "15em" }}>
              <RiNumber9 />
            </div>
          </Link>
          <div></div>
        </div> */}

        {/* <div className="card">
          <Link to="../Level10">
            <p>Exercise: </p>
            <div style={{ fontSize: "11em" }}>
              <div className="number10">
                <RiNumber1 />
                <RiNumber0 />
              </div>
            </div>
          </Link>
        </div> */}
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
