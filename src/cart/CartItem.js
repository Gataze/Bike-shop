
// import { useState, useEffect} from 'react';
import { FaTrash } from 'react-icons/fa';

import { useOrderDetails } from '../context/OrderDetails';

const CartItem = ({bike}) => {
   

    const [counter, updateItemCount] = useOrderDetails();
   
    console.log(bike)

    return ( 
        <div className="col-2" key={bike.name}>
        
            <div className='cart-delete'>
                <FaTrash />
            </div>

            <div className='cart-info'>

                <img src={bike.url} alt="img"></img>

                <div className="cart-preview">
                    <h2>{bike.name}</h2>
                    <p>Bike</p>
                    <p>Zapytaj o produkt</p>
                </div>

            </div>

            <div className="cart-price">
                <span>Price:</span>
                <span>{`${bike.price}$`}</span>
            </div>

            <div className="cart-quantity">
            <input
                type="number"
                value={bike.newCount}
                onChange={(e) => updateItemCount(e.target.value, bike, bike.name)}
                min="0"
                max="999"
                className="card__input"
                />
            </div>

            <div className='cart-value'>
                <span>Value: </span>
                <span className='value'>{bike.price * bike.newCount}$</span>
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
