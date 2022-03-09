import "./styles/login.css";

const LoginPage = ({setUserForm}) => {
  return (
    <section className="loginPage">
      <div className="loginPage__container">
      <h2 className="loginPage__header">
          LOREMBIKES
        </h2>
      <form className="loginPage__form">
        <h2 className="loginPage__formHeader">Log In to Your Account</h2>
        <input className="loginPage__input" type="text" placeholder="Email or username" />
        <input className="loginPage__input" placeholder="Password" />
        <div className="loginPage__checkboxContainer">
          <input className="loginPage__checkbox" type="checkbox"/>
          <span className="loginPage__checkboxText">Keep me logged in</span>
        </div>
        <button className="loginPage__submit">Login</button>
        </form>
        <div className="loginPage__loginEntry">
          <span className="loginPage__loginEntryInfo">Have an account?</span>
          <button className="loginPage__loginEntryButton" onClick={() => setUserForm("signup")}>Sign up</button>
        </div>
        <div className="loginPage__remindEntry">
          <span className="loginPage__loginEntryInfo">Forgot password?</span>
          <button className="loginPage__loginEntryButton" onClick={() => setUserForm("remind")}>Reset password</button>
        </div>
      </div> 
    </section>
  );
};

export default LoginPage;
