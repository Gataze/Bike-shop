import "./styles/mobile-nav-styles/mobile-nav.css";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="mobile">
      <ul className="mobile__list">
        <li className="mobile__listItem">
          <Link className="mobile__link" to="/">
            HOME
          </Link>
        </li>
        <li className="mobile__listItem">
          <Link className="mobile__link" to="/products">
            PRODUCTS
          </Link>
        </li>
        <li className="mobile__listItem">
          <Link className="mobile__link" to="/login">
            SIGN IN
          </Link>
        </li>
        <li className="mobile__listItem">
          <Link className="mobile__link" to="/cart">
            CART
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
