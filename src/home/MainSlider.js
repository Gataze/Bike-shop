import { Link } from "react-router-dom";
import "../../src/styles/main-slider/main-slider-styles.css"
import {FaArrowLeft, FaPhoneAlt, FaToolbox, FaTools, FaUserShield} from 'react-icons/fa'
import { Carousel } from "react-responsive-carousel";
import useFetch from "../hooks/useFetch";


const MainSlider = () => {

    
    const {data: slides, isPending, error} = useFetch('http://localhost:8000/sliders')


    return ( 
        <div className="hero">
            <div className="row">     
                <div className="col">
                {isPending && <div>Loading</div>}
                {error && <div>{error}</div>}
                {slides && 
                     <Carousel infiniteLoop={true} showThumbs={false} autoFocus={true} autoPlay={true} interval={5000} transitionTime={1000}>
                     {slides.map(slide => (
                         <div className="main-slider" key={slide.id} style={{backgroundImage: `url(${slide.url})`}}>
                         
                         </div>
                     ))}                     
                     </Carousel>
       
                }    
                <div className="hero-msg">
                    <h2>NEW MODEL</h2>
                    <p>Manticora</p>
                    <Link to={`/products/bikesPreview/1`}>Check It Now</Link>
                    <FaArrowLeft className='arrow'/>
                    </div>
                </div>  
            </div>
            <div className="row-2">
                <div className="col">
                    <div className="square">
                        <FaUserShield />
                    </div>
                    <h2>Safety first</h2>
                    <p>SAFETY BY DEISGN</p>
                </div>
                <div className="col">
                    <div className="square">
                        <FaPhoneAlt />
                    </div>
                    <h2>Support 24/7h</h2>
                    <p>We support 24h a day</p>
                </div>
                <div className="col">
                    <div className="square">
                        <FaToolbox />
                    </div>
                    <h2>Expert service</h2>
                    <p>Profesionals who know</p>
                </div>
                <div className="col">
                    <div className="square">
                        <FaTools />
                    </div>
                    <h2>Repair</h2>
                    <p>Expert Mechanics</p>
                </div>
            </div>
        </div>
     );
}
 
export default MainSlider;