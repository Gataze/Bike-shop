
import {render} from "../../test-utils/testing-library-utils"
import { screen } from "@testing-library/react"
import Cart from "../Cart"


test("cart test", () => {
    render(<Cart />)

    //cart header should be rendered
    const header = screen.getByRole("heading", {name: /cart/i})
    expect(header).toBeInTheDocument()

    //total value initially should be equal to 0
    const totalValue = screen.getByRole("heading", {name: /Total value/i})
    expect(totalValue).toHaveTextContent("$0.00")
})