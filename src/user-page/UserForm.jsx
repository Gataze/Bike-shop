import { useState } from "react";
import LoginPage from "./LoginPage";
import ForgotPage from "./ForgotPage";
import SignupPage from "./SignupPage"

export default function UserForm(){

    const [userForm, setUserForm] = useState("login")

    let Component = LoginPage;

    switch( userForm ) {
        case "login": 
        Component = LoginPage;
        break;

        case "remind":
        Component = ForgotPage;
        break;

        case "signup":
        Component = SignupPage;
        break;

        case "": <></>
        break
    default:
        
    }

    return (
        <section>
            <Component setUserForm={setUserForm}/>
        </section>
    )
}