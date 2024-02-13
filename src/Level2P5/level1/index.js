import React, { useState, useRef, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../scss/app.scss";
import "./index.scss"
import Slch from "../../assets/level2immg/ejercico1/level2-1html.png";
import Slcj1 from "../../assets/level2immg/ejercico1/level2-1-j.png";
import Slcj2 from "../../assets/level2immg/ejercico1/level2-j-2.png";
import Slcj3 from "../../assets/level2immg/ejercico1/level2-j-3.png";
import Eye from "../../assets/images/ojo.png";

const Level = () => {
  // Assuming you have the 'productos' state defined somewhere
  const [productos, setProductos] = useState([
    { producto: 'banana', precio: 3 },
    { producto: 'banana', precio: 3 },
    { producto: 'mango', precio: 6 },
    { producto: 'patata', precio: 0 },
    { producto: 'aguacate', precio: 8 },
    { producto: 'café', precio: 10 },
    { producto: 'té', precio: 0 },
    // Add other products as needed
  ]);
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    // Calculate total price whenever 'productos' changes
    setPrecioTotal(productos.reduce((acumulador, producto) => acumulador + producto.precio, 0));
  }, [productos]);

  const subirPrecio = (producto) => {
    const productoEncontrado = productos.find((p) => p.producto === producto);
    if (productoEncontrado) {
      productoEncontrado.precio++;
      setProductos([...productos]);
    }
  };

  const bajarPrecio = (producto) => {
    const productoEncontrado = productos.find((p) => p.producto === producto);
    if (productoEncontrado && productoEncontrado.precio > 0) {
      productoEncontrado.precio--;
      setProductos([...productos]);
    }
  };

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level19">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/Higher">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level21">
          <FaArrowAltCircleRight />
        </Link>
      </div>

      <div className="container">
  
        <div  className="container-producto">
          <h2>Productos</h2>
          <ul>
            {productos.map((producto) => (
              <li  key={producto.producto}>
                {producto.producto}: ${producto.precio}
                <button className="btn-green"  onClick={() => subirPrecio(producto.producto)}>Up Pricer</button>
                <button  className="btn-green"  onClick={() => bajarPrecio(producto.producto)}>Lest price</button>
              </li>
            ))}
          </ul>
          <p>Precio total: ${precioTotal}</p>
        </div>
      </div>

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">{/* Add exercise text */}</p>
        <p className="text-center">Explanation</p>
        <p className="text-center">{/* Add explanation text */}</p>
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
            </Slider>
          </>
        )}
      </div>
    </div>
  );
};

export default Level;
