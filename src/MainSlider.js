import { Link } from "react-router-dom";
import "../src/styles/main-slider/main-slider-styles.css"
import {FaArrowLeft} from 'react-icons/fa'


const MainSlider = () => {
    return ( 
        <div className="hero">
            <div className="row">
                <div className="col">
                    <div className="main-slider"></div>
                    <div className="hero-msg">
                        <h2>NEW MODEL</h2>
                        <Link to="/">Check It Now</Link>
                        <FaArrowLeft className='arrow'/>
                    </div>
                </div>
            </div>
            <div className="row-2">
                <div className="col">
                    <div className="square"></div>
                    <h2>Safety first</h2>
                    <p>SAFETY BY DEISGN</p>
                </div>
                <div className="col">
                    <div className="square"></div>
                    <h2>Support 24/7h</h2>
                    <p>We support 24h a day</p>
                </div>
                <div className="col">
                    <div className="square"></div>
                    <h2>Expert service</h2>
                    <p>Profesionals who know</p>
                </div>
                <div className="col">
                    <div className="square"></div>
                    <h2>Repair</h2>
                    <p>Expert Mechanics</p>
                </div>
            </div>
        </div>
     );
}
 
export default MainSlider;