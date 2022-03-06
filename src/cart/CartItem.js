
// import { useState, useEffect} from 'react';
import { FaTrash } from 'react-icons/fa';

import { useOrderDetails } from '../context/OrderDetails';

const CartItem = ({bike}) => {
   

    const [,updateItemCount] = useOrderDetails();
   
    console.log(bike)

    return ( 
        <div className="cartItem" key={bike.name}>
        
        

            <img className="cartItem__itemImg" src={bike.url} alt={bike.name}></img>

            <div className="cartItem__description">

                <div className="cartItem__preview">
                    <h2>{bike.name}</h2>
                    <div onClick={() => updateItemCount(0, bike, bike.name)} className='cartItem__delete'>
                        Remove
                    </div>
                </div>

                <div className="cartItem__price">
                    <span className="cartItem__cartDets"><b>Price:</b> {bike.price}$</span>
                </div>

                <div className="cartItem__quantity">
                    <span className="cartItem__cartDets"><b>Count:</b> {`${bike.newCount}`}</span>
                </div>

                <div className='cartItem__value'>
                    <span className="cartItem__cartDets"><b>Value:</b> {bike.price * bike.newCount}$</span>
                </div>
            
            
                <p className="cartItem__detailsSpan"><b>Details</b></p>
                <p className="cartItem__spcs1">
                    Type: {bike.type}
                </p>
                <p className="cartItem__spcs2">
                    Color: {bike.color}
                </p>
                <p className="cartItem__spcs3">
                    Frame: {bike.frame}
                </p>
                <p className="cartItem__spcs4">
                    Wheel: {bike.wheel}
                </p>
                </div>
               
            
        </div>     
     );
};
 
export default CartItem;


 // const [value, setValue] = useState(bike.counter * bike.price)
    // const [counter, setCounter] = useState(bike.counter)

    // //pobiera dane z localStorage, aktualizuje je na podstawie zmiennej counter. Jeżeli
    // //ta wartość zmienia się to wtedy ustala ilość z produktu który chcemy kupić
    // //w 'bike.counter' w localStorage dla tego produktu.
    // useEffect(() => {
        
    //     const temp = localStorage.getItem('item')
    //     const loadedItem = JSON.parse(temp)

    //     const calcItem = loadedItem.map(item => {
    //         if(bike.name === item.name){
    //             return {
    //                 ...item,
    //                 counter: counter
    //             }
    //         }
    //         return item
    //     })


    //     const temp2 = JSON.stringify(calcItem)
    //     localStorage.setItem('item', temp2)

    // }, [counter, bike.name])



    // const plusOne = () => {
    //     setCounter(prevState => {
    //         return prevState + 1
    //     })
    // }

    // const minusOne = () => {
    //     setCounter(prevState => {
    //         if(prevState >= 1){
    //             return prevState - 1
    //         }else{
    //             return prevState
    //         }
    //     })
    // }

    // const plusValue = (price) => {

    //     setValue(prevState =>
    //         prevState + price
    //     )
    //     addTotalValue(price)
    // }



    // const minusValue = (price) => {
    //     if(value > 0){
    //         setValue(prevState =>
    //             prevState - price
                
    //         )
    //         minusTotalValue(price)
            
            
    //     } else {
    //         setValue(prevState => 
    //             prevState
    //         )
    //     }
    // }
