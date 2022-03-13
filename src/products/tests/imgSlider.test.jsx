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
    window.scrollTo = jest.fn()
    renderWithRoute(<ProductCard/>)
    
    
    const slideOne = await screen.findByAltText("Griffon one")
    const slideTwo = await screen.findByAltText("Griffon two")
    
    expect(slideOne).toHaveClass("card__images--active")
    expect(slideTwo).toHaveClass("card__images--inActive")

    const optionTwo = await screen.findByAltText("Griffon min two")
    userEvent.click(optionTwo)
    expect(slideOne).toHaveClass("card__images--inActive")
    expect(slideTwo).toHaveClass("card__images--active")
})