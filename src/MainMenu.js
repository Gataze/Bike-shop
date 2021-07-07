import Logo from './images/logo/logo.png'
import './styles/main-menu-styles/main-menu.css'
import BurgerBtn from './BurgerBtn';
import { Link } from 'react-router-dom';
import React from "react";

const MainMenu = ({activeStyle, handleShow}) => {



    return ( 
        <div className="main-nav">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="logo">
                            <img src={Logo} alt="#"/>
                            <span className='bold-style'>Lorem<span>Bikes</span></span>
                        </div>
                            
                        
                        <div className="navigation">
                            <ul>
                                <li><Link to="#">HOME</Link></li>
                                <li><Link to="#">OUR BIKES</Link></li>
                                <li><Link to="#">ACCESORIES</Link></li>
                                <li><Link to="#">ABOUT US</Link></li>
                            </ul>
                        </div>
                        <BurgerBtn activeStyle={activeStyle} handleShow={handleShow}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MainMenu;