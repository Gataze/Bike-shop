
import { render, screen } from "@testing-library/react";
import { OrderDetailsProvider } from "../../context/OrderDetails";
import { MemoryRouter, Route } from "react-router-dom";
import ProductCard from "../ProductCard"
import userEvent from "@testing-library/user-event";

const WrapperWithRoute = ({children}) => {
    return (
      <MemoryRouter initialEntries={["/products/bikesPreview/3"]}>
          <OrderDetailsProvider>
            <Route path="/products/:typeId/:id">
            {children}
            </Route>
          </OrderDetailsProvider>
      </MemoryRouter>
    )
}

const renderWithRoute = (ui, options) => 
    render(ui, {wrapper: WrapperWithRoute, ...options }); 


test("product card input values tests", async () => {
    window.scrollTo = jest.fn()
    renderWithRoute(<ProductCard />)
   

    // Apropriate item image should be displayed
    const cardImage = await screen.findByAltText("Griffon one")
    expect(cardImage).toBeInTheDocument();
    
    //Add to cart button initially should be disabled
    const addToCartButton = screen.getByRole("button", {name: /add to cart/i});
    expect(addToCartButton).toBeDisabled();

    //Add to cart button should be enabled, when item count is >= 1 
    const input = screen.getByRole("spinbutton", {name: "Count"});
    userEvent.clear(input)
    userEvent.type(input, "1");
    expect(addToCartButton).toBeEnabled();

    //Add to cart button should be disabled, when item count is equal 0
    userEvent.clear(input)
    userEvent.type(input, "0");
    expect(addToCartButton).toBeDisabled();

    //Update total value when input value is valid
    const showTotal = screen.getByText("Total:", {exact: false})

    userEvent.clear(input)
    userEvent.type(input, "1");

    expect(showTotal).toHaveTextContent("$999.00")


    //Total value is 0 when input value is 0 or is not valid
    userEvent.clear(input)
    userEvent.type(input, "0");
    expect(showTotal).toHaveTextContent("0")

    userEvent.clear(input)
    userEvent.type(input, "1,5");
    expect(showTotal).toHaveTextContent("0")

    userEvent.clear(input)
    userEvent.type(input, "abc");
    expect(showTotal).toHaveTextContent("0")


})




