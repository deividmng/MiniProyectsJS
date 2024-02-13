import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../scss/app.scss";
import "./style.scss";
import Slch from "../../assets/level2immg/ejercicio7/ejercicio7.png";
import Slcj from "../../assets/level2immg/ejercicio7/ejercicio7-2.png";
import Eye from "../../assets/images/ojo.png";

const Level = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };


  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Users data
  const users = [
    { name: "Brook", scores: 75, skills: ["HTM", "CSS", "JS"], age: 16 },
    { name: "Alex", scores: 80, skills: ["HTM", "CSS", "JS"], age: 18 },
    { name: "David", scores: 75, skills: ["HTM", "CSS"], age: 22 },
    { name: "John", scores: 85, skills: ["HTML"], age: 25 },
    { name: "Sara", scores: 95, skills: ["HTM", "CSS", "JS"], age: 26 },
    { name: "Martha", scores: 80, skills: ["HTM", "CSS", "JS"], age: 18 },
    { name: "Thomas", scores: 90, skills: ["HTM", "CSS", "JS"], age: 20 },
  ];

  // Function to get users with less than two skills
  const getLessThanTwoSkillsUsers = () => {
    return users.filter((user) => user.skills.length < 2);
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../DestructuringAndSpreading">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/DestructuringAndSpreading">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level26">
          <FaArrowAltCircleRight />
        </Link>
      </div>

      <div className="container">
        <div>
          <h2>User Information</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Scores</th>
                <th>Skills</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.name}>
                  <td>{user.name}</td>
                  <td>{user.scores}</td>
                  <td>{user.skills.join(", ")}</td>
                  <td>{user.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        
          <ul>
          <p className="p-skill">Persons with less than two skills:</p>
            {getLessThanTwoSkillsUsers().map((user) => (
              <li key={user.name}>
                <span>Name: {user.name}</span>
                <br />
                <span>Skills: {user.skills.join(", ")}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          1:Iterate through the users array and get all the keys of the object 
          using destructuring 
          <br></br>2:Find the persons who have less than two skills
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
            <Slider {...settings}>
      <div
        className={`zoomable-image ${isHovered ? "zoomed" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="" src={Slch} alt="SolutionsHtml" />
        <p>HTML</p>
      </div>
      <div
        className={`zoomable-image ${isHovered ? "zoomed" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
