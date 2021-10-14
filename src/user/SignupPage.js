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
                    <h2>Create Your LOREMBIKES Account</h2>
                    <form>
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Password" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Confirm password"/>
                        <div>
                            <input type="checkbox" />
                            <span>I accept the rules*</span>
                        </div>
                        <button>Register</button>
                    </form>
                    <div className="sing-up-input">
                        <span>Have an account?</span>
                        <Link to="/login">Sign in</Link>
                    </div>
                    </div>
                </div>
            </div>        
        </div>
     );
};
 
export default LoginPage;
