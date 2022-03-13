import { FaSignInAlt, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useOrderDetails } from "../context/OrderDetails";
import { getTotalItemCount } from "../utilities";
export default function UserMenu(){

    const [count] = useOrderDetails();
    const itemNumber = getTotalItemCount(count)
    
    return (
        <ul className="MainNav__iconList">
        <li className="MainNav__listItem">
          <Link className="MainNav__link" aria-label="logout" to="#">
            <FaSignInAlt />
          </Link>
        </li>
        <li className="MainNav__listItem">
          <Link className="MainNav__link" to="/login">
            <FaUser title="login"/>
          </Link>
        </li>
        <li className="MainNav__listItem MainNav__listItem--active">
          <Link className="MainNav__link" to="/cart">
            <FaShoppingCart title="cart"/>
            {itemNumber? <span title="countIndicator" className="MainNav__itemCount">{itemNumber}</span> : null}
          </Link>
        </li>
      </ul>
    )
}