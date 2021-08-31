
import { useState, useEffect} from 'react';
import { FaPlusCircle, FaMinusCircle, FaTrash } from 'react-icons/fa';

const CartItem = ({bike, delFromCart, addTotalValue, minusTotalValue}) => {

    
    const [value, setValue] = useState(bike.counter * bike.price)
    const [counter, setCounter] = useState(bike.counter)



    //pobiera dane z localStorage, aktualizuje je na podstawie zmiennej counter. Jeżeli
    //ta wartość zmienia się to wtedy ustala ilość z produktu który chcemy kupić
    //w 'bike.counter' w localStorage dla tego produktu.
    useEffect(() => {
        
        const temp = localStorage.getItem('item')
        const loadedItem = JSON.parse(temp)

        const calcItem = loadedItem.map(item => {
            if(bike.name === item.name){
                return {
                    ...item,
                    counter: counter
                }
            }
            return item
        })


        const temp2 = JSON.stringify(calcItem)
        localStorage.setItem('item', temp2)

    }, [counter, bike.name])



    const plusOne = () => {
        setCounter(prevState => {
            return prevState + 1
        })
    }

    const minusOne = () => {
        setCounter(prevState => {
            if(prevState >= 1){
                return prevState - 1
            }else{
                return prevState
            }
        })
    }

    const plusValue = (price) => {

        setValue(prevState =>
            prevState + price
        )
        addTotalValue(price)
    }



    const minusValue = (price) => {
        if(value > 0){
            setValue(prevState =>
                prevState - price
                
            )
            minusTotalValue(price)
            
            
        } else {
            setValue(prevState => 
                prevState
            )
        }
    }




    //bike to obiekt pozyskany z macierzy produktów 'items'. Macierz ta tworzona jest
    //na podstawie danych zapisanych w localStorage(umożliwia to przegladarce na zapamiętanie
    //jakie produkty zostały umieszczone w koszyku). Dane w localStorage zapisywane są
    //przez funkcę addToCart na stronie z szczegółami produktów - element ProductDetails.js.
    //Dane to pochodzą z lokalnego serwera zawierającego dane wszysktich produktów. 

    return ( 
            
            <div className="col-2" key={bike.id}>
            
                <div className='cart-delete' onClick={()=> delFromCart(bike.id)}>
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
                    <FaPlusCircle onClick={()=> {plusOne(); plusValue(bike.price)}} style={{marginBottom: '10px', fontSize: '18px', cursor: "pointer"}}/>
                    <span type="text" value={counter}>{counter}</span>
                    <FaMinusCircle onClick={()=> {minusOne(); minusValue(bike.price)}} style={{marginTop: '10px',  fontSize: '18px', cursor: "pointer"}}/>
                </div>

                <div className='cart-value'>
                    <span>Value: </span>
                    <span className='value'>{value}$</span>
                </div>
            </div> 
         
     );
}
 
export default CartItem;