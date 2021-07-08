import './styles/main-menu-styles/main-menu.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductsNav = () => {

    const [menuShow, setMenuShow] = useState(false)

    const handleShow = () => {
        setMenuShow(!menuShow)
    }


return ( 

    <li className="products" onClick={handleShow}>
        <span>OUR BIKES</span>
        <span className="triangle" style={menuShow ? {transform: 'rotate(180deg)'} : {display: "inline-block"}}></span>
        <ul className="products-nav" style={menuShow ? {display: 'block'} : {display: "none"}}>
            <li><Link to="#">All Bikes</Link></li>
            <li><Link to="#">Manticora</Link></li>
            <li><Link to="#">Pegas</Link></li>
            <li><Link to="#">Griffon</Link></li>
        </ul>
    </li>   

    );
}
 
export default ProductsNav;