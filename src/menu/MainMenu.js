import Logo from "./../images/logo/logo.png";
import "./styles/main-menu-styles/main-menu.css";
import BurgerBtn from "./BurgerBtn";
import { Link } from "react-router-dom";
import React from "react";
import { FaSignInAlt, FaUser, FaShoppingCart } from "react-icons/fa";

const MainMenu = ({ activeStyle, handleShow }) => {
  return (
    <nav className="MainNav">
      <div className="MainNav__container">
        <div className="MainNav__flexbox">
          <div className="MainNav__logo">
            <img className="MainNav__img" src={Logo} alt="#" />
            <span className="MainNav__name">
              Lorem<span className="MainNav__bold">Bikes</span>
            </span>
          </div>
          <ul className="MainNav__list">
            <li className="MainNav__listItem">
              <Link className="MainNav__link" to="/">
                HOME
              </Link>
            </li>
            <li className="MainNav__listItem">
              <Link className="MainNav__link" to="/products">
                PRODUCTS
              </Link>
            </li>
            <li className="MainNav__listItem">
              <Link className="MainNav__link" to="/about">
                ABOUT US
              </Link>
            </li>
          </ul>
          <ul className="MainNav__iconList">
            <li className="MainNav__listItem">
              <Link className="MainNav__link" aria-label="logout" to="#">
                <FaSignInAlt />
              </Link>
            </li>
            <li className="MainNav__listItem">
              <Link className="MainNav__link" to="/login">
                <FaUser />
              </Link>
            </li>
            <li className="MainNav__listItem">
              <Link className="MainNav__link" to="/cart">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>

          <div className="MainNav__burger-btn">
            <BurgerBtn activeStyle={activeStyle} handleShow={handleShow} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
