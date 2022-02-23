import { useState } from "react";
import "./styles/burger-btn-styles/burger-btn.css";

const BurgerBtn = ({ activeStyle, handleShow }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    handleShow(activeStyle);
  };

  return (
    <button
      onClick={() => handleClick(active)}
      className={!active ? "hamburger" : "hamburger hamburger--active"}
      aria-label="Menu"
    >
      <span className="hamburger__container" tabIndex="-1">
        <span className="hamburger__bars"></span>
      </span>
    </button>
  );
};

export default BurgerBtn;
