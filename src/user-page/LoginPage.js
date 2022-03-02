import "./styles/login.css";

const LoginPage = ({setUserForm}) => {
  return (
    <section className="loginPage">
      <h2 className="loginPage__header">
        LOREM<span>BIKES</span>
      </h2>
      <p className="loginPage__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        animi quis sit, perferendis quaerat reprehenderit.
      </p>
     
      <form className="loginPage__form">
        <h2 className="loginPage__formHeader">Log In to Your Account</h2>
        <input className="loginPage__input" type="text" placeholder="Email or username" />
        <input className="loginPage__input" placeholder="Password" />
        <div className="loginPage__checkboxContainer">
          <input className="loginPage__checkbox" type="checkbox"/>
          <span className="loginPage__checkboxText">Keep me logged in</span>
        </div>
        <button className="loginPage__button" onClick={() => setUserForm("remind")}>Forgot password?</button>
      </form>
      <div className="loginPage__signUp">
        <span className="loginPage__signUpText">Need an account?</span>
        <button className="loginPage__signUpText" onClick={() => setUserForm("signup")}>Sign Up</button>
      </div>
    </section>
  );
};

export default LoginPage;
