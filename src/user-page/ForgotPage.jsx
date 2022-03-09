import "./styles/forgot.css";

const ForgotPage = ({setUserForm}) => {
  return (
    <section className="forgotPage">
      <div className="forgotPage__container">
      <h2 className="forgotPage__header">Password assistance</h2>
        <p className="forgotPage__instruction">
          Enter the email address associated with your LOREMBIKES account.
        </p>
        <form className="forgotPage__form">
          <input className="forgotPage__input" type="text" placeholder="Type your email here"/>
          <input className="forgotPage__submit" type="submit" />
        </form>
        <div className="forgotPage__signupEntry">
          <span className="forgotPage__signupEntryText">Need an account?</span>
          <button className="forgotPage__signupEntryButton" onClick={() => setUserForm("signup")}>Sign up</button>
        </div>
        <div className="forgotPage__loginEntry">
          <span className="forgotPage__signupEntryText">Have an account?</span>
          <button className="forgotPage__signupEntryButton" onClick={() => setUserForm("login")}>Log in</button>
        </div>
      </div> 
    </section>
  );
};
export default ForgotPage;