import { FaSignInAlt, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function UserMenu(){
    return (
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
    )
}