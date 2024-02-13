import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../scss/app.scss";
import Slch from "../../assets/level2immg/ejercico4/level2-4-h.png";
import Slcj1 from "../../assets/level2immg/ejercico4/level2-1-j.png";
import Slcj2 from "../../assets/level2immg/ejercico4/level2-2j (1).png";
import Slcj3 from "../../assets/level2immg/ejercico4/level2-2j (2).png";
import Slcj4 from "../../assets/level2immg/ejercico4/level2-2j (3).png";
import Slcj5 from "../../assets/level2immg/ejercico4/level2-2j (4).png";
import Slcj6 from "../../assets/level2immg/ejercico4/level2-2j (5).png";
import Eye from "../../assets/images/ojo.png";
import { usePeople } from "./people";
import "./style.scss";

const Level = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const [isOpen, setIsOpen] = useState(true);
  const [selectedStat, setSelectedStat] = useState(null);

  const togglePeopleList = () => setIsOpen(!isOpen);

  const calculateCount = () => setSelectedStat("count");
  const calculateSum = () => setSelectedStat("sum");

  const calculateMin = () => setSelectedStat("min");
  const calculateMax = () => setSelectedStat("max");
  const calculateRange = () => setSelectedStat("range");
  const calculateMean = () => setSelectedStat("mean");
  const calculateMedian = () => setSelectedStat("median");
  const calculateMode = () => setSelectedStat("mode");

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  const { people } = usePeople();
  const renderCalculationResult = () => {
    if (selectedStat === "count") {
      return <p>Count: {people.length}</p>;
    } else if (selectedStat === "sum") {
      const sum = people.reduce((acc, person) => acc + person.age, 0);
      return <p>Sum: {sum}</p>;
    } else if (selectedStat === "min") {
      const min = Math.min(...people.map((person) => person.age));
      return <p>Min: {min}</p>;
    } else if (selectedStat === "max") {
      const max = Math.max(...people.map((person) => person.age));
      return <p>Max: {max}</p>;
    } else if (selectedStat === "range") {
      const min = Math.min(...people.map((person) => person.age));
      const max = Math.max(...people.map((person) => person.age));
      const range = max - min;
      return <p>Range: {range}</p>;
    } else if (selectedStat === "mean") {
      const sum = people.reduce((acc, person) => acc + person.age, 0);
      const mean = sum / people.length;
      return <p>Mean: {mean}</p>;
    } else if (selectedStat === "median") {
      const sortedAges = people
        .map((person) => person.age)
        .sort((a, b) => a - b);
      const middleIndex = Math.floor(sortedAges.length / 2);
      const median =
        sortedAges.length % 2 === 0
          ? (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2
          : sortedAges[middleIndex];
      return <p>Median: {median}</p>;
    } else if (selectedStat === "mode") {
      const ageFrequency = {};
      people.forEach((person) => {
        ageFrequency[person.age] = (ageFrequency[person.age] || 0) + 1;
      });
      const mode = Object.entries(ageFrequency).reduce(
        (a, b) => (b[1] > a[1] ? b : a),
        [0, 0]
      )[0];
      return <p>Mode: {mode}</p>;
    } else {
      return <p>Please select a calculation</p>;
    }
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level22">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/Higher">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="/Higher">
          <FaArrowAltCircleRight />
        </Link>
      </div>

      <div className="container-people">
        <div>
          <h2>People Filter</h2>
          <button className="btn-green" onClick={togglePeopleList}>
            {isOpen ? "Hide People List" : "Show People List"}
          </button>
          {isOpen && (
            <ul id="showPeople">
              {people.map((person) => (
                <li key={person.id}>
                  {person.name}: Age: {person.age}
                </li>
              ))}
            </ul>
          )}
          <div id="showAnswer  " className="all-btn">
            <button onClick={calculateCount}>Count</button>
            <button onClick={calculateSum}>Sum</button>
            <button onClick={calculateMin}>Min</button>
            <button onClick={calculateMax}>Max</button>
            <button onClick={calculateRange}>Range</button>
            <button onClick={calculateMean}>Mean</button>
            <button onClick={calculateMedian}>Median</button>
            <button onClick={calculateMode}>Mode</button>
          </div>

          {selectedStat && (
            <div className="selected-stat">{renderCalculationResult()}</div>
          )}
        </div>
      </div>

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Try to develop a program which calculate measure of central tendency
          of a sample(mean, median, mode) and measure of variability(range,
          variance, standard deviation). In addition to those measures find the
          min, max, count, percentile, and frequency distribution of the sample.
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          We use "Count" to determine how many people are in the array.
          <br />
          We use "Sum" to calculate the total sum of all ages.
          <br />
          "Min" helps us find the youngest person.
          <br />
          "Max" allows us to identify the oldest person.
          <br />
          "Range" shows the difference between the oldest and youngest ages.
          <br />
          "Mean" represents the average age of all individuals.
          <br />
          "Median" is calculated by adding all values in the set and dividing
          the result by the number of values. There are different types of
          means.
          <br />
          "Mode" helps us identify the value that occurs most frequently in the
          dataset.
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
                <img className="" src={Slcj1} alt="SolutionJS" />
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
                <img className="" src={Slcj6} alt="SolutionJS" />
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
