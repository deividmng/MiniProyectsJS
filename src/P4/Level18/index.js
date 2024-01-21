import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../scss/app.scss";
import"./index.scss"
import Slch from "../../assets/images/imgSolutions2/level11h.png";
import Slcj from "../../assets/images/imgSolutions2/level11j.png";
import Eye from "../../assets/images/ojo.png";

const Level = () => {
  const imageRef = useRef();
  const [showImages, setShowImages] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [incomes, setIncomes] = useState([]);
  const [totalIncome, setTotalIncome] = useState(4000);
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const handleAddIncome = () => {
    const incomeDescription =
      document.getElementById("income-description").value;
    const incomeAmount = document.getElementById("income-amount").value;

    if (incomeDescription && incomeAmount) {
      setIncomes([
        ...incomes,
        { description: incomeDescription, amount: parseFloat(incomeAmount) },
      ]);
      setTotalIncome(totalIncome + parseFloat(incomeAmount));
      document.getElementById("income-description").value = "";
      document.getElementById("income-amount").value = "";
    } else {
      alert("Please enter both description and amount.");
    }
  };

  const handleAddExpense = () => {
    const expenseDescription = document.getElementById(
      "expense-description"
    ).value;
    const expenseAmount = document.getElementById("expense-amount").value;

    if (expenseDescription && expenseAmount) {
      setExpenses([
        ...expenses,
        { description: expenseDescription, amount: parseFloat(expenseAmount) },
      ]);
      setTotalExpense(totalExpense + parseFloat(expenseAmount));
      setTotalIncome(totalIncome - parseFloat(expenseAmount)); // Actualizar balance
      document.getElementById("expense-description").value = "";
      document.getElementById("expense-amount").value = "";
    } else {
      alert("Please enter both description and amount.");
    }
  };

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowSlider(!showSlider);
  };

  return (
    <div className="level-container">
      <div className="links">
        <Link to="../Level17">
          <FaArrowCircleLeft />
        </Link>
        <Link to="/Objects">
          <MdHome />
        </Link>
        <div ref={imageRef} onClick={toggleImages}>
          <img className="eye" src={Eye} alt="developer" />
        </div>
        <Link to="/Objects">
          <FaArrowAltCircleRight />
        </Link>
      </div>

      <div className="container">
        <h2>Personal Account</h2>
        

        <div id="incomes" className="incomes">
          <p className="P">Incomes</p>
          
          <input
            type="text"
            id="income-description"
            placeholder="Description"
          />
          <input type="number" id="income-amount" placeholder="Amount" />
          <br></br>
          <button id="add-income"   className="btn-green"  onClick={handleAddIncome}>
            Add Income
          </button>
          <ul>
            {incomes.map((income) => (
              <li key={income.description}>
                {income.description} - {income.amount}
              </li>
            ))}
          </ul>
        </div>

        <div id="expenses" className="incomes">
          <p className="P">Expenses</p>
          <input
            type="text"
            id="expense-description"
            placeholder="Description"
          />
          <input type="number" id="expense-amount" placeholder="Amount" />
          <br></br>
          <button id="add-expense"  className="btn-green"  onClick={handleAddExpense}>
            Add Expense
          </button>
          <ul>
            {expenses.map((expense) => (
              <li key={expense.description}>
                {expense.description} - {expense.amount}
              </li>
            ))}
          </ul>
        </div>

        <div id="balance" className={`balance ${totalIncome - totalExpense < 1000 ? 'negative' : totalIncome - totalExpense < 2000 ? 'neutral' : 'positive'}`}>
  <h2>
    Balance: <span id="balance-display">{totalIncome - totalExpense}</span> £
  </h2>
</div>
      </div>

      <div className="explanation">
        <p className="text-center">Exercise</p>
        <p className="text-center">
        Create an app that counts the money you have in your bank account and that you can add the expenses you are going to have and the income you will have, and do the calculation and the money you have comes out
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
