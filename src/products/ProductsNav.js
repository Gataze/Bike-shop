import '../styles/main-menu-styles/main-menu.css'
import { Link } from 'react-router-dom';

const ProductsNav = () => {

return ( 

    <li className="products">
        <span><Link to="/products">PRODUCTS</Link></span>
    </li>   

    );
}
 
export default ProductsNav;