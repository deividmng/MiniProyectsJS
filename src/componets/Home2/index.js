import React from 'react';
import JS from '../../assets/images/JavaScript-logo.png';
import './index.scss';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <div className="text">
        <h2>llamando de la parte dos</h2>
      </div>

      <div className="container-card">
        <div className="card">

          
          <Link to="../Level1">
            <img className="" src={JS} alt="developer" />
          </Link>
          <div> 
            <p>Card 1</p>
          </div>
        </div>

        <div className="card">
          <Link to="../Level2">
            <img className="" src={JS} alt="developer" />
            <p>Card2</p>
          </Link>
        </div>

        <div className="card">
        <Link to="../Level3">
            <img className="max" src={JS} alt="developer" />
          </Link>
          <p>Card 3</p>
        </div>

        <div className="card">
          {/* Nuevo enlace y ruta */}
          <Link to="/otra-parte">
            <img className="max" src={JS} alt="developer" />
          </Link>
          <p>Otra Parte</p>
        </div>
      </div>

      <div className="container">
        <div className="card">

          
          <Link to="../Level1">
            <img className="" src={JS} alt="developer" />
          </Link>
          <div> 
            <p>Card 1</p>
          </div>
        </div>

        <div className="card">
          <Link to="../Level2">
            <img className="" src={JS} alt="developer" />
            <p>Card2</p>
          </Link>
        </div>

        <div className="card">
        <Link to="../Level3">
            <img className="max" src={JS} alt="developer" />
          </Link>
          <p>Card 3</p>
        </div>

        <div className="card">
          {/* Nuevo enlace y ruta */}
          <Link to="/otra-parte">
            <img className="max" src={JS} alt="developer" />
          </Link>
          <p>Otra Parte</p>
        </div>
      </div>
      <div className="container">
        <div className="card">

          
          <Link to="../Level1">
            <img className="" src={JS} alt="developer" />
          </Link>
          <div> 
            <p>Card 1</p>
          </div>
        </div>

        <div className="card">
          <Link to="../Level2">
            <img className="" src={JS} alt="developer" />
            <p>Card2</p>
          </Link>
        </div>
      </div>

     
    </>
  );
};

export default Home;
