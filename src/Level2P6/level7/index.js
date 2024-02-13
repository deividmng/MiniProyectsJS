import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import "../../scss/app.scss";
import "./style.scss";
import Slcj from "../../assets/level2immg/ejercicio7/ejercicio7-2.png";
import Slch from "../../assets/level2immg/ejercicio7/ejercicio7.png";
import Eye from "../../assets/images/ojo.png";

const Level = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  const student = {
    name: "David",
    age: 25,
    skills: {
      frontEnd: [
        { skill: "HTML", level: 10 },
        { skill: "CSS", level: 8 },
        { skill: "JS", level: 8 },
        { skill: "React", level: 9 },
      ],
      backEnd: [
        { skill: "Node", level: 7 },
        { skill: "GraphQL", level: 8 },
      ],
      dataBase: [{ skill: "MongoDB", level: 7.5 }],
      dataScience: ["Python", "R", "D3.js"],
    },
  };

  const [student2, setStudent2] = useState({
    ...student,
    name: "Dani",
    skills: {
      ...student.skills,
      frontEnd: [...student.skills.frontEnd, { skill: "Bootstrap", level: 8 }],
      backEnd: [...student.skills.backEnd, { skill: "Express", level: 9 }],
      dataBase: [...student.skills.dataBase, { skill: "SQL", level: 8 }],
      dataScience: [...student.skills.dataScience, "SQL"],
    },
  });

  const generateStudentHTML = (student) => {
    return (
      <div>
        <p>
          <strong>Name:</strong> {student.name}
        </p>
        <p>
          <strong>Age:</strong> {student.age}
        </p>
        <h3>Skills</h3>
        <ul>
          <li>
            <strong>Front-end:</strong>
            <ul>
              {student.skills.frontEnd.map((skill) => (
                <li key={skill.skill}>
                  {skill.skill} - Level: {skill.level}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <strong>Back-end:</strong>
            <ul>
              {student.skills.backEnd.map((skill) => (
                <li key={skill.skill}>
                  {skill.skill} - Level: {skill.level}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <strong>Database:</strong>
            <ul>
              {student.skills.dataBase.map((skill) => (
                <li key={skill.skill}>
                  {skill.skill} - Level: {skill.level}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <strong>Data Science:</strong>
            <ul>
              {student.skills.dataScience.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level25">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/DestructuringAndSpreading">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../DestructuringAndSpreading">
          <FaArrowAltCircleRight />
        </Link>
      </div>

      <div className="container">
        <h2>Student Information</h2>
        <div className="app-container">
          <div className="student-cards">
            <div className="student-card">
              <h3>Original Student</h3>
              {generateStudentHTML(student)}
            </div>
            <div className="student-card">
              <h3>Updated Student</h3>
              {generateStudentHTML(student2)}
            </div>
          </div>
        </div>
      </div>

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Copy the student object to newStudent without mutating the original
          object. In the new object add the following ? <br></br>
          Add Bootstrap with level 8 to the front end skill sets <br></br>
          Add Express with level 9 to the back end skill sets<br></br>
          Add SQL with level 8 to the data base skill sets<br></br>
          Add SQL without level to the data science skill sets<br></br>
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
