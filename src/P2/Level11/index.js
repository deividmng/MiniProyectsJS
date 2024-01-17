import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../scss/app.scss";
import Slch from "../../assets/images/imgSolutions2/level11h.png";
import Slcj from "../../assets/images/imgSolutions2/level11j.png";
import Eye from "../../assets/images/ojo.png";

const Level = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([
    "Milk",
    "Coffee",
    "Tea",
    "Honey",
  ]);
  const [newItem, setNewItem] = useState("");

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  const modifyShoppingCart = (item) => {
    if (!shoppingCart.includes(item)) {
      setShoppingCart([item, ...shoppingCart]);
    }
  };

  const modifyShoppingCartCereal = () => {
    if (!shoppingCart.includes("Cereal")) {
      setShoppingCart([...shoppingCart, "Cereal"]);
    }
  };

  const removeItems = (itemsToRemove) => {
    const updatedCart = shoppingCart.filter(
      (item) => !itemsToRemove.includes(item)
    );
    setShoppingCart(updatedCart);
  };
  const addItem = () => {
    if (newItem.trim() !== "") {
      setShoppingCart([...shoppingCart, newItem]);
      setNewItem("");
    }
  };
  const itemsToRemove = [
    "Sugar",
    "Coca-Cola",
    "Chocolate",
    "Candy",
    "Cookies",
    "Soda",
  ];

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level10">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/Condicionals">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="../Level12">
          <FaArrowAltCircleRight />
        </Link>
      </div>

      <div className="container">
        <h2>Current Shopping Cart:</h2>
        <div>
          <p className="list-shop">Add: Sugar, Coca-Cola, Candy </p>
          <input
            className="center"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter a new item"
          />
          <button className="resultT" onClick={addItem}>
            Add to Cart
          </button>
        </div>
        <div className="food">
          <button onClick={() => modifyShoppingCart("Meat")}>Meat</button>
          <button onClick={modifyShoppingCartCereal}>Cereal</button>
          <button onClick={() => removeItems(itemsToRemove)}>
            Take away the things I can't take
          </button>
        </div>

        <div className="ul-shop">
          <ul>
            {shoppingCart.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
          Add 'Meat' to the beginning of the shopping cart if it hasn't been
          added yet.<br></br>
          Add 'Cereal' to the end of the shopping cart if it hasn't been added
          yet.<br></br>
          Add 'Sugar' to the shopping cart if it hasn't been added yet.<br></br>
          Allow the user to input a new item and add it to the shopping cart.
          <br></br>
          Create a button to remove the items 'Sugar', 'Coca-Cola', 'Chocolate',
          'Candy', 'Cookies', and 'Soda' from the shopping cart.
        </p>
        <p className="text-center">Explanation</p>
        <p className="text-center">
          This exercise represents a simple shopping cart application. It
          initializes the shopping cart state with common items. The component
          provides buttons to add 'Meat', 'Cereal', and 'Sugar' to the shopping
          cart based on certain conditions. Users can also input a new item, and
          it will be added to the shopping cart.
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
