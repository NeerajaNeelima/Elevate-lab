import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar">
      {(windowWidth >= 850 || showNav) ? (
        <div id="trapezoid" style={{ right: showNav ? '0' : '-300px' }}>
          <div className='links'>
            <NavLink exact to="/" onClick={toggleNav}>
              Best Sellers
            </NavLink>
            <NavLink to="/" onClick={toggleNav}>
              Git ideas
            </NavLink>
            <NavLink to="/" onClick={toggleNav}>
              New Releases
            </NavLink>
            <NavLink to="/" onClick={toggleNav}>
              Today's Deals
            </NavLink>
            <NavLink to="/" onClick={toggleNav}>
              Customer Services
            </NavLink>
          </div>
        </div>
      ) : null}
     {windowWidth <= 850 && (
        <div className="nav-toggle" onClick={toggleNav}>
          {showNav ? <RiCloseLine /> : <RiMenu3Line />}
        </div>
     )}
    </nav>
  );
}

export default Navbar;
