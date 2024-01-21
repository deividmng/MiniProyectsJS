import React, { useState, useRef, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../scss/app.scss";
import "./index.scss"
import Slch from "../../assets/images/imgSolutions4/level17h.png";
import Slcj from "../../assets/images/imgSolutions4/level17j.png";
import Slcj2 from "../../assets/images/imgSolutions4/level17j2.png";
import Slcjuser from "../../assets/images/imgSolutions4/level17juser.png";
import Eye from "../../assets/images/ojo.png";
import userData from './user.js';

const Level = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const [users, setUsers] = useState(Object.values(userData));
  const [usersVisible, setUsersVisible] = useState(false);
  const [loggedInUsers, setLoggedInUsers] = useState(0);
  const [mostSkillfulPerson, setMostSkillfulPerson] = useState(null);

  useEffect(() => {
    updateLoggedInUsers();
    findMostSkillfulPerson();
  }, [users]);

  const toggleUsers = () => {
    setUsersVisible(!usersVisible);
  };

  const updateLoggedInUsers = () => {
    setLoggedInUsers(users.filter((user) => user.isLoggedIn).length);
  };

  const findMostSkillfulPerson = () => {
    const personWithMostSkills = Object.values(users).reduce((personWithMax, user) =>
      user.skills.length > personWithMax.skills.length ? { name: user.name, skills: user.skills } : personWithMax,
      { skills: [] }
    );
    setMostSkillfulPerson(personWithMostSkills);
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
        <Link to="/objects">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="/loops">
          <FaArrowAltCircleRight />
        </Link>
      </div>

      <div className="">
        <h2>temaplete</h2>
      </div>

      <div className="array-output-user" >
        {usersVisible && (
          <ul>
            {users.map((user) => (
              <li className="" key={user.name}>
                <ul>
                  <li>Nombre: {user.name}</li>
                  <li>Email: {user.email}</li>
                  <li>Age: {user.age}</li>
                  <li>Is Logged In: {user.isLoggedIn}</li>
                  <li>Points: {user.points}</li>
                  <li>Skills: {user.skills.join(', ')}</li>
                  <br></br>
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="object-container">

      
      <p id="persona" className="" >La persona con más habilidades es: {mostSkillfulPerson?.name}</p>



      <button id="toggle-users" className="btn-green"  onClick={toggleUsers}>
        Mostrar usuarios
      </button>

      <p id="logged-in-users">Usuarios conectados: {loggedInUsers}</p>

      </div>
      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
        Find the person who has many skills in the users object
        <br></br>
        And count logged in users
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
        A small project in which we get a better number of users,<br></br> 
        We compare to find the one with the most skills and the ones who are logged in <br></br>
        ! Object.values(users)
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
                <img className="" src={Slcjuser} alt="SolutionJS" />
                <p>Object</p>
              </div>
            </Slider>
          </>
        )}
      </div>
    </div>
  );
};

export default Level;
