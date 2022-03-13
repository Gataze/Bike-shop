import { screen, waitFor } from "@testing-library/react";
import { render } from "../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import ProductsList from "../ProductsList"

test("product list tests", async () => {
    render(<ProductsList />)

    //Initially three  items (bikes) should be rendered in products list
    const initialList = await screen.findAllByRole("img", {name: /bikesPreview\/$/i});
    expect(initialList).toHaveLength(3);
    const initialItems = initialList.map(element => element.alt);
    expect(initialItems).toEqual(["Manticora bikesPreview/", "Pegas bikesPreview/", "Griffon bikesPreview/"]);

    // After accesories button is clicked three other items (accesories) should be rendered in products list
    const accesoriesButton = screen.getByRole("button", {name: /accesories/i})
    userEvent.click(accesoriesButton)


    await waitFor(async () => {
        const accesoriesList = await screen.findAllByRole("img", {name: /accesories\/$/i});
        const accesoriesItems = accesoriesList.map(element => element.alt);
        expect(accesoriesItems).toEqual(["Helmet accesories/", "Saddle accesories/", "Water bottle accesories/"])
    })
}) 

test("sorting product lists", async () => {
    render(<ProductsList />)

    const selectBox = screen.getByRole("combobox")
    expect(selectBox).toBeInTheDocument();


    //items should be sorted from "A" to "Z" after sort option (A...Z) is selected
    userEvent.selectOptions(
        screen.getByRole("combobox"),
        screen.getByRole("option", {name: "Name (A...Z)"})
    )

    expect(screen.getByRole('option', {name: "Name (A...Z)"}).selected).toBe(true)

    const azSortedList = await screen.findAllByRole("img", {name: /bikesPreview\/$/i});
    expect(azSortedList).toHaveLength(3);
    const azSortedArray = azSortedList.map(element => element.alt);
    expect(azSortedArray).toEqual(["Griffon bikesPreview/", "Manticora bikesPreview/", "Pegas bikesPreview/"])


    //items should be sorted from "Z" to "A" after sort option (Z...A) is selected
    userEvent.selectOptions(
        screen.getByRole("combobox"),
        screen.getByRole("option", {name: "Name (Z...A)"})
    )

    expect(screen.getByRole('option', {name: "Name (Z...A)"}).selected).toBe(true);

    const zaSortedList = await screen.findAllByRole("img", {name: /bikesPreview\/$/i});
    const zaSortedArray = zaSortedList.map(element => element.alt);
    expect(zaSortedArray).toEqual(["Pegas bikesPreview/" , "Manticora bikesPreview/", "Griffon bikesPreview/"]);

    ////items should be sorted by lowest price after sort option (1...9) is selected
    userEvent.selectOptions(
        screen.getByRole("combobox"),
        screen.getByRole("option", {name: "Price (1...9)"})
    )

    expect(screen.getByRole('option', {name: "Price (1...9)"}).selected).toBe(true)

    const lowestPriceSortedList = await screen.findAllByRole("img", {name: /bikesPreview\/$/i});

    const lowestPriceSortedArray = lowestPriceSortedList.map(element => element.alt);
    expect(lowestPriceSortedArray).toEqual(["Griffon bikesPreview/", "Pegas bikesPreview/", "Manticora bikesPreview/"]);

    ////items should be sorted by highest price after sort option (9...1) is selected
    userEvent.selectOptions(
        screen.getByRole("combobox"),
        screen.getByRole("option", {name: "Price (9...1)"})
    )

    expect(screen.getByRole('option', {name: "Price (9...1)"}).selected).toBe(true)

    const highestPriceSortedList = await screen.findAllByRole("img", {name: /bikesPreview\/$/i});

    const highestPriceSortedArray = highestPriceSortedList.map(element => element.alt);
    expect(highestPriceSortedArray).toEqual(["Manticora bikesPreview/", "Pegas bikesPreview/", "Griffon bikesPreview/"]);
})