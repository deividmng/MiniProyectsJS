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

  return (
    <div className={`nav-bar ${open ? 'open' : ''}`}>
      <Link className='logo' to='/'>
        <img src={JS} alt="developer" />
      </Link>
      <nav>
        <p className='level1'>Level 2</p>
        <NavLink exact activeClassName="active" to="/higher">
          <p className='Level'>Higher Order Functions link</p>
        </NavLink>
        <NavLink exact activeClassName="active" className="about-link" to="/SetAndMaps">
          <p> Sets and Maps</p>
        </NavLink>
        <NavLink exact activeClassName="active" className="about-link" to="/DestructuringAndSpreading">
          <p> Destructuring and Spreading</p>
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
              <li className="menu-item">
                <Link to="../comingSoon">
                  <button onClick={handleMenuOne}>level3</button>
                </Link>
              </li>
             
            </ul>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
