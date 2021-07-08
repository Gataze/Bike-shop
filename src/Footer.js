import './styles/footer/footer.css'
import { FaPaperPlane } from 'react-icons/fa';


const Footer = () => {
    return ( 
    
    <footer>
        <div className="container">
            <div className="row">
            <div className="col">
                    <span>Company</span>
                    <span>Materials</span>
                    <span>Our Process</span>
                </div>
                <div className="col">
                    <span>Setup</span>
                    <span>Warranty</span>
                    <span>Bike Registration</span>
                    <span></span>
                </div>
                <div className="col">
                    <span>Contac Us</span>
                    <span>Dealer Location</span>
                    <span>Shipping/Returns</span>
                    <span>Careers</span>
                </div>
                <div className="col">
                <div className="social-footer">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span>Subscribe to our newsletter</span>
                    <form action="#">
                        <input type="text" placeholder='Your email adress...'/>
                        <div className="plane">
                            <button className="footer-subscribe">
                                <FaPaperPlane />
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </footer> 
    
    );
}
 
export default Footer;