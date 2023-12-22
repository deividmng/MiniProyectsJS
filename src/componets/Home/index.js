import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
  RiNumber7,
  RiNumber8,
  RiNumber9,
  RiNumber0,
} from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div className="text">
        <h2>Booleans, Operators, Date</h2>
      </div>

      <div className="container">
        <div className="card">
          <Link to="../Level1">
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
      </div>

      <div className="container">
        <div className="card">
          <Link to="../Level5">
            <p>Exercise: </p>
            <div style={{ fontSize: "15em" }}>
              <RiNumber5 />
            </div>
          </Link>
          <div></div>
        </div>

        <div className="card">
          <Link to="../Level6">
            <p>Exercise: </p>
            <div style={{ fontSize: "15em" }}>
              <RiNumber6 />
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="../Level7">
            <p>Exercise: </p>
            <div style={{ fontSize: "15em" }}>
              <RiNumber7 />
            </div>
          </Link>
        </div>

        <div className="card">
          {/* Nuevo enlace y ruta */}
          <Link to="../Level8">
            <p>Exercise: </p>
            <div style={{ fontSize: "15em" }}>
              <RiNumber8 />
            </div>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <Link to="../Level9">
            <p>Exercise: </p>
            <div style={{ fontSize: "15em" }}>
              <RiNumber9 />
            </div>
          </Link>
          <div></div>
        </div>

        <div className="card">
          <Link to="../Level10">
            <p>Exercise: </p>
            <div style={{ fontSize: "12.5em" }}>
              <div className="number10">
                <RiNumber1 />
                <RiNumber0 />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
