import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../context/OrderDetails";
import { MemoryRouter } from "react-router-dom";


const AllWrappers = ({children}) => {
    return (
        <MemoryRouter>
            <OrderDetailsProvider>
                {children}
            </OrderDetailsProvider>
        </MemoryRouter>
    )
}



const renderWithContext = (ui, options) => 
    render(ui, {wrapper: AllWrappers, ...options }); 


//re-export everything
export * from "@testing-library/react";

export {renderWithContext as render }
