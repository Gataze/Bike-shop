import { render, screen} from "@testing-library/react"
import { MemoryRouter, Route } from "react-router-dom"
import { OrderDetailsProvider } from "../../context/OrderDetails"
import userEvent from "@testing-library/user-event"
import ProductCard from "../ProductCard"

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


test("Toggling active classes in ImgSlider component", async () => {
    renderWithRoute(<ProductCard/>)

    const optionOne = await screen.findByAltText("Griffon min one")
})