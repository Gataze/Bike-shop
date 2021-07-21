import { useState } from 'react';
import { FaPlusCircle, FaMinusCircle, FaTrash } from 'react-icons/fa';




const CartItem = ({bikes}) => {

    
    const [value, setValue] = useState(null)
    const [counter, setCounter] = useState(1)

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

        // console.log(price)

        setValue(prevState =>
            prevState + price
        )
    }

    const minusValue = (price) => {

        setValue(prevState =>
            prevState - price
        )

    }





    // console.log(value)



    return ( 
        <div className="row">
             {bikes.map((bike) => (
                <div className="col-2" key={bike.id}>
                
                    <div className='cart-delete'>
                        <FaTrash />
                    </div>

                    <div className='cart-info'>

                        <img src={bike.url} alt="img"></img>

                        <div className="cart-preview">
                            <h2>{bike.name}</h2>
                            <p>Bike</p>
                            <p>Przenieś do schowka</p>
                        </div>

                    </div>

                    <div className="cart-price">
                        <span>Price:</span>
                        <span>{`${bike.price}$`}</span>
                    </div>

                    <div className="cart-quantity">
                        <FaPlusCircle onClick={()=> {plusOne(); plusValue(bike.price)}} style={{marginBottom: '10px', fontSize: '18px', cursor: "pointer"}}/>
                        <input type="text" value={counter}></input>
                        <FaMinusCircle onClick={()=> {minusOne(); minusValue(bike.price)}} style={{marginTop: '10px',  fontSize: '18px', cursor: "pointer"}}/>
                    </div>

                    <div className='cart-value'>
                        <span>Value:// </span>
                        <span className='value'>{value? value + bike.price + '$': `${bike.price}$`}</span>
                    </div>

                </div>
            ))}
        </div>
        
        
     );
}
 
export default CartItem;