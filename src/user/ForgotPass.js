import { Link } from "react-router-dom";
import '../styles/login/login.css'
import '../styles/login/forgot.css'

const ForgotPass = () => {
    
    return ( 
        <div className="login-page">
            <div className="container">
                <div className="row-1">
                    <h2>LOREM<span>BIKES</span></h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi quis sit, perferendis quaerat reprehenderit.</p>
                </div>
                <div className="row-2">
                    <div className="form-container">
                    <h2>Password assistance</h2>
                    <p>Enter the email address associated with your LOREMBIKES account.</p>
                    <form>
                        <label>Email adress</label>
                        <input type="text"/>
                        <button>Continue</button>
                    </form>
                    <div className="sing-up-input">
                        <span>Need an account?</span>
                        <Link to="/signup">Sign up</Link>
                    </div>
                    </div>
                </div>
            </div>        
        </div>
     );
}
 
export default ForgotPass;