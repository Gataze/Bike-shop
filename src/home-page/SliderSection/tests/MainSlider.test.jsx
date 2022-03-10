import { screen } from "@testing-library/react";
import { render } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import MainSlider from "../MainSlider";


test("main slider tests", () => {
    render(<MainSlider />)
})