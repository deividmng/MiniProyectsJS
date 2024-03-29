import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react';
import './index.scss';
import JS from '../../assets/images/JavaScript-logo.png';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    setOpen(false);
  };
// this is the frist one side bar 
  return (
    <div className={`nav-bar ${open ? 'open' : ''}`}>
      <Link className='logo' to='/'>
        <img src={JS} alt="developer" />
      </Link>
      <nav>
        <p className='level1'>Level 1</p>
        <NavLink exact activeClassName="active" to="/">
          <p className='Level'>Booleans, Operators, Date</p>
        </NavLink>
        <NavLink exact activeClassName="active" className="about-link" to="/condicionals">
          <p>Arrays</p>
        </NavLink>

        <NavLink exact activeClassName="active" to="/loops">
          <p>Loops</p>
        </NavLink>
        
        <NavLink exact activeClassName="active" to="../Objects">
          <p>Objects</p>
        </NavLink>
        {/* Uncomment the lines below if needed */}
        {/* <NavLink exact activeClassName="active" className="contact-link" to="/">
          <p>Level 1</p>
        </NavLink> */}
        <p onClick={handleOpen} />
        <div className="dropdown">
          <button onClick={handleOpen}>
            {/* Use the arrow icon with a conditional class for rotation */}
            <GiHamburgerMenu />
          </button>
          {open ? (
            <ul className="menu">
              <li className="menu-item">
                <Link to="../higher">
                  <button onClick={handleMenuOne}>level2</button>
                </Link>
              </li>
              {/* Add when level 2 it needed */}
              {/* <li className="menu-item">
                <button onClick={handleMenuTwo}>Menu 2</button>
              </li> */}
            </ul>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
