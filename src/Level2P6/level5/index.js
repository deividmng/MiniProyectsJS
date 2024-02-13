import React, { useState, useEffect, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../scss/app.scss";
import "./style.scss";
import Slch from "../../assets/level2immg/ejercicio5/level2-h.png";
import Slcj from "../../assets/level2immg/ejercicio5/level2-j-1.png";
import Slcj2 from "../../assets/level2immg/ejercicio5/level-2-j2.png";
import Slcj3 from "../../assets/level2immg/ejercicio5/level-2-j3.png";
import Slcj4 from "../../assets/level2immg/ejercicio5/level-2-j4.png";
import Slcj5 from "../../assets/level2immg/ejercicio5/level-2-j5.png";
import Slccss from "../../assets/level2immg/ejercicio5/level-2-css.png";
import Eye from "../../assets/images/ojo.png";

const Level = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [languagesSet, setLanguagesSet] = useState(
    new Set(["English", "Finnish"])
  );
  const [isShowLanguagesVisible, setIsShowLanguagesVisible] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  useEffect(() => {
    displayLanguages();
  }, [languagesSet]);
  const displayLanguages = () => {
    const languageElements = document.getElementById("LanguagesUl");
    languageElements.innerHTML = "";

    languagesSet.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = element;
      languageElements.appendChild(li);
    });
  };

  const handleAddLanguage = (language) => {
    setLanguagesSet((prevSet) => new Set([...prevSet, language]));
  };

  const handleDeleteLanguage = (language) => {
    setLanguagesSet(
      (prevSet) => new Set([...prevSet].filter((l) => l !== language))
    );
  };

  const handleHasLanguage = (language) => {
    const hasLanguage = languagesSet.has(language);
    const resultContainer = document.getElementById("ResultContainer");

    const yesClass = "result-yes";
    const noClass = "result-no";

    const message = `Contains ${language}: <span class="${
      hasLanguage ? yesClass : noClass
    }">${hasLanguage ? "Yes" : "No"}</span>`;

    resultContainer.innerHTML = message;
    setTimeout(() => {
      resultContainer.innerHTML = "";
    }, 1000);
  };

  const handleShowLanguages = () => {
    setIsShowLanguagesVisible(!isShowLanguagesVisible); // Toggle visibility
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../SetAndMaps">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/SetAndMaps">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../SetAndMaps">
          <FaArrowAltCircleRight />
        </Link>
      </div>

      <div className="container">
        <h2>temaplete</h2>

        <ul id="LanguagesUl" class="ul-shop"></ul>
        <div className="btn-language">
          <button onClick={() => handleAddLanguage("French")}>
            Add French
          </button>
          <button onClick={() => handleAddLanguage("Spanish")}>
            Add Spanish
          </button>
          <button onClick={() => handleAddLanguage("German")}>
            Add German
          </button>
          <button onClick={() => handleAddLanguage("Italian")}>
            Add Italian
          </button>

          <div>
            <button onClick={() => handleDeleteLanguage("French")}>
              Delete French
            </button>
            <button onClick={() => handleDeleteLanguage("Spanish")}>
              Delete Spanish
            </button>
            <button onClick={() => handleDeleteLanguage("German")}>
              Delete German
            </button>
            <button onClick={() => handleDeleteLanguage("Italian")}>
              Delete Italian
            </button>
          </div>

          <button onClick={() => handleHasLanguage("French")}>
            Contain French
          </button>
          <button onClick={() => handleHasLanguage("Spanish")}>
            Contain Spanish
          </button>
          <button onClick={() => handleHasLanguage("German")}>
            Contain German
          </button>
          <button onClick={() => handleHasLanguage("Italian")}>
            Contain Italian
          </button>

          <div>
            <button onClick={handleShowLanguages}>Show the languages</button>
          </div>
          <p
            id="ShowLanguages"
            className={isShowLanguagesVisible ? "" : "hidden"}
          >
            {Array.from(languagesSet).join(", ")}
          </p>
          <p id="ResultContainer"></p>
        </div>
      </div>

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Create an array in which you can add a language that can remove it,
          and that you can see if it contains the language.
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
        In this exercise we are using add, delete and has to modify the array
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
                <p>JS</p>
              </div>
              <div>
                <img className="" src={Slcj3} alt="SolutionJS" />
                <p>JS</p>
              </div>
              <div>
                <img className="" src={Slcj4} alt="SolutionJS" />
                <p>JS</p>
              </div>
              <div>
                <img className="" src={Slcj5} alt="SolutionJS" />
                <p>JS</p>
              </div>
              <div>
                <img className="" src={Slccss} alt="SolutionJS" />
                <p>Css</p>
              </div>
            </Slider>
          </>
        )}
      </div>
    </div>
  );
};

export default Level;
