import '../styles/cart/cart-styles.css'
import useFetch from '../useFetch';
import CartItem from './CartItem';


const Cart = () => {


    const {data: bikes, error, isPending} = useFetch('http://localhost:8000/bikesPreview')


    // const [bike, SetBike] = useState([])


    // const addBikeItem = () => {


    // }

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
                    {bikes && <CartItem  bikes={bikes}/>}
                    
                
            <div className="row clear-proceed">
                <div className="col btn">Clear shopping cart</div>
                <div className="col btn">Proceed to checkout</div>
            </div>
            </div>
        </section>

        </div>

     );
}
 
export default Cart;