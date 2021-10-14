import '../styles/cart/cart-styles.css'
import useFetch from '../hooks/useFetch';
import CartList from './CartList';
import { useState, useEffect } from 'react'

const Cart = () => {


    const {data: bikes, error, isPending} = useFetch('https://my-json-server.typicode.com/gataze/mockjson/bikesPreview')

    const [items, setItems] = useState([])

    //Zmienna która będzie przechwoywać całkowitą wartość produktów w koszyku
    const [totalValue, setTotalValue] = useState(0)

    useEffect(()=> {

        //pobranie danych z localStorage
        const temp = localStorage.getItem('item')
        const loadedItem = JSON.parse(temp)

        
        //Jeśli cokowliek było w localStorage to zapisuje to w zmiennej items
        if(loadedItem){
            setItems(loadedItem)   
        }

    },[])

    //zapisuje items do localStorage po dodaniu lub usunięciu danego produktu z koszyka
    useEffect(() => {       
        const temp = JSON.stringify(items)
        localStorage.setItem('item', temp)
    }, [items])


    //usówa dany produkt z localStorage
    const delFromCart = (id) => {

        const temp = localStorage.getItem('item')
        const loadedItem = JSON.parse(temp)
        console.log(loadedItem)


        setItems(
            loadedItem.filter((localItem) => localItem.id !== id)
        )
    }

    //clears the cart and localStorage
    const clearCart = () => {

        setItems([])

    }



    //efekt zliczający całkowitą wartośc produktów w koszyku
    useEffect(() => {
        setTotalValue(
            [...items].map(item => {
                return item.counter * item.price
            }).reduce((a, b) => a + b, 0)
        )   
    }, [items])

    


    const addTotalValue = (price) => {
        setTotalValue(prevState=> 
            prevState + price
        )
    }

    const minusTotalValue = (price) => {
        setTotalValue(prevState=> 
            prevState - price
        )
    }


    return ( 
        <div>
        <section className="cart-ribbon">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>CART</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className='main-cart'>
            <div className="container">
                
                    {isPending && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                    {bikes && <CartList 
                    items={items}
                    delFromCart={delFromCart}
                    totalValue={totalValue}
                    addTotalValue={addTotalValue}
                    minusTotalValue={minusTotalValue}
                    />}
                    
                
            <div className="row clear-proceed">
                <div className="col btn"  onClick={()=> clearCart()}>Clear shopping cart</div>
                <div className="col btn">Proceed to checkout</div>
            </div>
            </div>
        </section>

        </div>

     );
};
 
export default Cart;
