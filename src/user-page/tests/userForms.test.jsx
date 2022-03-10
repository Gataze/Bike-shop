// import { render } from "../../test-utils/testing-library-utils";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "../UserForm"


test("user forms tests", () => {
    render(<UserForm />)

    // Initially login form is rendered
    const loginForm = screen.getByRole("heading", {name: /log in to your account/i}) 
    expect(loginForm).toBeInTheDocument();

    //sign up form is shown after sing up button is clicked
    const signupButton = screen.getByRole("button", {name: /sign up/i})
    expect(screen.queryByRole("heading", {name: /create account/i})).not.toBeInTheDocument()

    userEvent.click(signupButton)
    expect(screen.getByRole("heading", {name: /create account/i})).toBeInTheDocument()

    //login form is shown after log in button in signup section is clicked
    const loginButtonSignup = screen.getByRole("button", {name: /log in/i})
    userEvent.click(loginButtonSignup)

    expect(screen.queryByRole("heading", {name: /create account/i})).not.toBeInTheDocument()
    expect(screen.getByRole("heading", {name: /log in to your account/i})).toBeInTheDocument()

    //reset password form is shown after reset password button is log in section is clicked
    const resetButton = screen.getByRole("button", {name: /reset password/i}) 
    userEvent.click(resetButton);

    expect(screen.queryByRole("heading", {name: /log in to your account/i})).not.toBeInTheDocument()
    expect(screen.getByRole("heading", {name: /password assistance/i})).toBeInTheDocument()

    //login form is shown after log in button in reset password section is clicked
    const loginButtonReset = screen.getByRole("button", {name: /log in/i})
    userEvent.click(loginButtonReset)
    expect(screen.queryByRole("heading", {name: /password assistance/i})).not.toBeInTheDocument()
    expect(screen.getByRole("heading", {name: /log in to your account/i})).toBeInTheDocument()
   

})