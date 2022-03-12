import { screen } from "@testing-library/react";
import { render } from "../../test-utils/testing-library-utils";
import MainMenu from "../MainMenu";
import userEvent from "@testing-library/user-event"

test("burger button and its influence on menu active classes", () => {

    render(<MainMenu/>);

    // burger button initially does not have class active
    const burgerBtn = screen.getByRole("button");
    const menu = screen.getByRole("navigation")

    expect(burgerBtn).toHaveClass("hamburger");
    expect(menu).not.toHaveClass("MainNav MainNav--active")

    //burger button should have class active after clicked
    userEvent.click(burgerBtn);
    expect(burgerBtn).toHaveClass("hamburger hamburger--active");
    expect(menu).toHaveClass("MainNav MainNav--active")
})