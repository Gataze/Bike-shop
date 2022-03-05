import { createContext, useContext, useMemo, useState, useEffect } from "react";

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


function calculateTotal(counter){
    let totalCount = 0;
    for(const count of counter.items.values()){
        totalCount += count.newCount * count.price
    }
    return totalCount
}



export function OrderDetailsProvider(props){
    const [counter, setCounter] = useState({
        items: new Map(),
    });
    const [total, setTotal] = useState({
        grandTotal: 0,
    })


    


    useEffect(() => {
        const grandTotal = calculateTotal(counter)
        setTotal({
            grandTotal: grandTotal
        })
    },[counter])
    

    const value = useMemo(() => {
        function updateItemCount(newCount, item, itemName){
            
            const newItems = new Map(counter.items)

            console.log(newCount)

            if(newCount === "0"){
                newItems.delete(itemName)
            }else{
                newItems.set(itemName, {...item, newCount})
            }

            

            setCounter({
                items: newItems
            })
        }

        return [counter, updateItemCount, total]
    },[counter, total])

    return <OrderDetails.Provider value={value} {...props} />
}