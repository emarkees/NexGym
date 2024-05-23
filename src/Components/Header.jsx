import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Login from './Login';
import './Header.css';
import CreateAccount from './signUp';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    const closeDropdownMenu = () => {
      setIsDropdownOpen(false);
    };

    return () => {
      document.removeEventListener('click', closeDropdownMenu);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="header">
      <RouterLink to="/" onClick={handleLinkClick}>
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
      </RouterLink>

      <div className="header__basket__nav">
        <div className="header__optionBasket">
          <i className="fa-solid fa-cart-shopping" />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
        <div className="header__nav">
          <div className="burger" onClick={toggleDropdown}>
            <div className={`burger__line ${isDropdownOpen ? 'active' : ''}`} />
            <div className={`burger__line ${isDropdownOpen ? 'active' : ''}`} />
            <div className={`burger__line ${isDropdownOpen ? 'active' : ''}`} />
          </div>
          <div className={`dropdown__menu ${isDropdownOpen ? 'show' : ''}`}>
            <ul>
              <li>
                <RouterLink
                  to="/about"
                  className="dropdown__item"
                  onClick={handleLinkClick}
                >
                  About Us
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/schedule"
                  className="dropdown__item"
                  onClick={handleLinkClick}
                >
                  Schedule
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/contact"
                  className="dropdown__item"
                  onClick={handleLinkClick}
                >
                  Contact
                </RouterLink>
              </li>
              <li>
                <ScrollLink
                  to="visit"
                  className="dropdown__item"
                  smooth
                  duration={500}
                  onClick={handleLinkClick}
                >
                  Visit
                </ScrollLink>
              </li>
              <li>
                <RouterLink
                  to="/store"
                  className="dropdown__item"
                  onClick={handleLinkClick}
                >
                  Store
                </RouterLink>
              </li>
              <li>
                <span onClick={toggleLoginModal} className="dropdown__item">
                  Login
                </span>
              </li>
              <li>
                <span onClick={toggleSignUpModal} className="dropdown__item">
                  Sign Up
                </span>
              </li>
            </ul>
            <div className="social__page">
              <i className="fa-brands fa-2x fa-instagram" />
              <i className="fa-brands fa-2x fa-youtube" />
              <i className="fa-brands fa-2x fa-square-facebook" />
            </div>
          </div>
        </div>
      </div>
      {showLoginModal && <Login onClose={toggleLoginModal} />}
      {showSignUpModal && <CreateAccount onClose={toggleSignUpModal} />}
    </div>
  );
}

export default Header;
