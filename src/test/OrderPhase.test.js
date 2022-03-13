import { screen, waitFor, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App"



test("Ordering phase - from homepage to cart component", async () => {
    window.scrollTo = jest.fn()
    render(<App/>)

    // Count of items icon in the cart should not render
    const productsButton = screen.getByRole("link", {name: /products/i});
    const menuCountIndicator = screen.queryByTitle("countIndicator")
    expect(menuCountIndicator).not.toBeInTheDocument();

    //Initially total value in product card component should be equal to 0
    userEvent.click(productsButton);
    const bikeOneLink = await screen.findByTitle("Manticora");
    userEvent.click(bikeOneLink);
    
    const spinButton = screen.getByRole("spinbutton");
    await waitFor(async () => {
        const bikeName = await screen.findByText("Total:", {exact: false})
        expect(bikeName).toHaveTextContent("0")
    })

    //Check total value based on ordered items
    userEvent.clear(spinButton);
    userEvent.type(spinButton, "2");
    await waitFor(async () => {
        const bikeName = await screen.findByText("Total:", {exact: false});
        expect(bikeName).toHaveTextContent("$3,598.00");
    })

    //Check total value after user is moved to cart
    const addToCartButton = screen.getByRole("button", {name: /add to cart/i});
    userEvent.click(addToCartButton);
    const bikeName = await screen.findByRole("heading", {name: /manticora/i})
    const totalValue = await screen.findByRole("heading", {name: /total value:/i})
    expect(totalValue).toHaveTextContent("$3,598.00")
    expect(bikeName).toBeInTheDocument()

    //Count of items in cart should be displayed on cart icon
    const menuActiveCountIndicator = screen.getByTitle("countIndicator")
    expect(menuActiveCountIndicator).toHaveTextContent("2");

    //User can add another item to the cart
    const backToShop = screen.getByRole("link", {name: /back to shop/i})
    userEvent.click(backToShop)
    
    const bikeTwoLink = await screen.findByTitle("Pegas");
    userEvent.click(bikeTwoLink);

    const pegasHeading = await screen.findByRole("heading", {name: /Pegas/i})
    expect(pegasHeading).toBeInTheDocument()


    //Input buttons, and total values updates properly after user add new items to cart
    const spinButtonTwo = screen.getByRole("spinbutton");
    const addToCartButtonTwo = screen.getByRole("button", {name: /add to cart/i});
    userEvent.clear(spinButtonTwo)
    userEvent.type(spinButtonTwo, "2");
    userEvent.click(addToCartButtonTwo);

    await waitFor(async () => {
        const bikeName = await screen.findByText("Total value:", {exact: false});
        expect(bikeName).toHaveTextContent("$6,196.00")
    })
    const menuActiveCountIndicatorTwo = screen.getByTitle("countIndicator")
    expect(menuActiveCountIndicatorTwo).toHaveTextContent("4");

    //User can remove item from the cart
    const removeButton = screen.getByTitle("remove Pegas");
    userEvent.click(removeButton);

    const pegasHeadingTwo = screen.queryByRole("heading", {name: /Pegas/i})
    expect(pegasHeadingTwo).not.toBeInTheDocument()

    //Second item should not be removed
    const bikeManticora = await screen.findByRole("heading", {name: /manticora/i})
    expect(bikeManticora).toBeInTheDocument()

}) 