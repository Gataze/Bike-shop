import { createContext, useContext, useMemo, useState } from "react";
// import useFetch from "../hooks/useFetch";

// const OrderDetails = createContext();
//   export const value = useContext({})
//   return <OrderDetails.Provider value={value} {...props} />
// }

const OrderDetails = createContext()


export function useOrderDetails(){
    const context = useContext(OrderDetails)

    if(!context){
        throw new Error("useOrderDetails must be used within context provider")
      }
    return context
    }

export function OrderDetailsProvider(props){
    const [counter, setCounter] = useState({
        count: 0,
        total: 0,
    });

    const value = useMemo(() => {
        function updateItemCount(newCount, itemPrice){
            setCounter({
                count: newCount,
                total: newCount * itemPrice,
            })
        }
   

        return [counter, updateItemCount]
    },[counter])

    return <OrderDetails.Provider value={value} {...props} />
}