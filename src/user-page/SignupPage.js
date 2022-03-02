import "./styles/login.css";

const LoginPage = ({setUserForm}) => {
  return (
    <div className="login-page">
        <div className="row-2">
          <div className="form-container">
            <h2>Create Your LOREMBIKES Account</h2>
            <form>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Confirm password" />
              <div>
                <input type="checkbox" />
                <span>I accept the rules*</span>
              </div>
              <button onClick={() => setUserForm("signup")}>Register</button>
            </form>
            <div className="sing-up-input">
              <span>Have an account?</span>
              <button onClick={() => setUserForm("login")}>Log In</button>
              {/* <Link to="/login">Sign in</Link> */}
            </div>
          </div>
        </div>
    </div>
    
  );
};

export default LoginPage;
