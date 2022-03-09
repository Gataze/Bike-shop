import "./styles/signup.css";

const LoginPage = ({setUserForm}) => {
  return (
    <div className="signupPage">
      
      <div className="signupPage__container">
      <h2 className="signupPage__header">Create Account</h2>
        <form className="signupPage__form">
          <input className="signupPage__input"type="text" placeholder="First Name" />
          <input className="signupPage__input"type="text" placeholder="Last Name" />
          <input className="signupPage__input"type="text" placeholder="Username" />
          <input className="signupPage__input"type="text" placeholder="Password" />
          <input className="signupPage__input"type="email" placeholder="Email" />
          <input className="signupPage__input"type="password" placeholder="Confirm password" />
          <div>
            <input className="signupPage__checkbox" type="checkbox" />
            <span className="signupPage__info">I accept the rules*</span>
          </div>
          <button className="signupPage__submit"onClick={() => setUserForm("signup")}>Register</button>
        </form>
        <div className="signupPage__loginEntry">
          <span className="signupPage__loginEntryInfo">Have an account?</span>
          <button className="signupPage__loginEntryButton" onClick={() => setUserForm("login")}>Log In</button>
        </div>
        <div className="signupPage__remindEntry">
          <span className="signupPage__loginEntryInfo">Forgot password?</span>
          <button className="signupPage__loginEntryButton" onClick={() => setUserForm("remind")}>Reset password</button>
        </div>
      </div>
    </div>
    
  );
};

export default LoginPage;
