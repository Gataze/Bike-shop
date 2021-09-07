import '../../src/styles/mobile-nav-styles/mobile-nav.css'
import { Link } from 'react-router-dom';





const MobileNav = () => {



    return ( 
    <div className="mobile">
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/products">PRODUCTS</Link></li>
                        <li><Link to="/login">SIGN IN</Link></li>
                        <li><Link to="/cart">CART</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div> );
}
 
export default MobileNav;