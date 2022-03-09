import { useState } from "react";
import { useParams } from "react-router";
import LoginPage from "./LoginPage";
import ForgotPage from "./ForgotPage";
import SignupPage from "./SignupPage"

export default function UserForm(){

    const { id } = useParams();
    

    const [userForm, setUserForm] = useState(id)

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