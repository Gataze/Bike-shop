import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import "./../styles/our-photo/our-photo.css"
import { Carousel } from 'react-responsive-carousel';
import {FaTimesCircle} from 'react-icons/fa'
import { useState } from "react";

const OurPhotoList = ({photos}) => {


    const [activeIndex, setActiveIndex] = useState('')
 


    return ( 
        <>
        {photos.map((photo, index) => (
            
                <div className="photo-grid-item" key={photo.id}>
                    <div className='overlay'>
                        <div className='overlay-text'>
                            <h2>LOREMBIKES</h2>
                            <p>Not just another bike shop</p>
                            <div>
                                <FaFacebook />
                                <FaTwitter />
                                <FaInstagram />
                            </div>
                            <span className="carousel-entry" onClick={() => setActiveIndex(index)}  >See photos</span> 
                        </div>  
                    </div>
                    <img src={photo.url} alt="#" /> 
                    <ul className="container-carousel"  
                        data-id={index}
                        style={index === activeIndex? {display: 'flex'} : {display: 'none'}}>

                        <div className="fixed-carousel">
                            <Carousel infiniteLoop={true} showThumbs={false} autoFocus={true}>
                                {photo.set.map(slide => (
            
                                    <div className='carousel-container' key={slide.id}>
                                        <img src={slide.url} alt='' />
                                    </div>
                                ))}         
                            </Carousel>
                            <button onClick={()=> setActiveIndex('')}>
                                <FaTimesCircle />
                            </button> 
                        </div>
                    </ul>
                </div>
               
                

            
        ))}
        
        </>
     );
}
 
export default OurPhotoList;