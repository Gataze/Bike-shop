import { render } from "../../../test-utils/testing-library-utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MainPage from "../../MainPage";



test("bike models section tests", async () => {
    render(<MainPage />)

    //bike models section should be rendered
    const bikeModel = screen.getByRole("heading", {name: /new models/i});
    expect(bikeModel).toBeInTheDocument();

    //bike images should be renders
    const bikeImages = await screen.findAllByRole("img", {name: /bike$/i});
    expect(bikeImages).toHaveLength(3);

    //correct images should be rendered
    const altText = bikeImages.map(element => element.alt);
    expect(altText).toEqual(["Manticora bike", "Pegas bike", "Griffon bike"]);

    //correct product card should be shown after "view more" link is clicked 
    const manticoraLink = screen.getByTitle("Manticora");
    userEvent.click(manticoraLink);

    const cardHeader = screen.getByRole("heading", {name: /product card/i});
    expect(cardHeader).toBeInTheDocument();

    const bikeImage = await screen.findByRole("img", {name: /manticora max/i})
    expect(bikeImage).toBeInTheDocument();
})  