import { Link } from "react-router-dom";
import './../styles/login/login.css'

const LoginPage = () => {
    
    
    return ( 
        <div className="login-page">
            <div className="container">
                <div className="row-1">
                    <h2>LOREM<span>BIKES</span></h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi quis sit, perferendis quaerat reprehenderit.</p>
                </div>
                <div className="row-2">
                    <div className="form-container">
                    <h2>Log In to Your Account</h2>
                    <form>
                        <input type="text" placeholder="Email or username" />
                        <input type="password" placeholder="Password"/>
                        <div>
                            <input type="checkbox" />
                            <span>Keep me logged in</span>
                            <Link to="/remind">Forgot password?</Link>
                        </div>
                        <button>Log In</button>
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
 
export default LoginPage;