import Logo from "./../images/logo/logo.png";
import "./styles/main-menu-styles/main-menu.css";
import BurgerBtn from "./BurgerBtn";
import { Link } from "react-router-dom";
import { useState } from "react"

import UserMenu from "./userMenu";

const MainMenu = () => {
  const navigation = ["home", "products", "about"];
  const [active, setActive] = useState(false)

  const activeStyle = {
    position: "absolute",
    top: "260px",
    zIndex: "200"
  }

  function handleShow(){
    setActive(prevState => 
      !prevState
    )
  }

  console.log(active)

  return (
    <nav style={active? activeStyle : null} className="MainNav">
      <div className="MainNav__logo">
        <img className="MainNav__img" src={Logo} alt="#" />
        <span className="MainNav__name">
          Lorem<span className="MainNav__bold">Bikes</span>
        </span>
      </div>
      <ul className="MainNav__list">
        {navigation.map((item) => (
          <li key={item} className="MainNav__listItem">
            <Link
              className="MainNav__link"
              to={item !== "home" ? `/${item}` : "/"}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <UserMenu />
      <BurgerBtn activeStyle={activeStyle} handleShow={handleShow} />
    </nav>
  );
};

export default MainMenu;
