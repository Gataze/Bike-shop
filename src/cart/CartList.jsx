import CartItem from './CartItem'
import { useOrderDetails } from '../context/OrderDetails';

const CartList = () => {

    const [counter] = useOrderDetails();

    const itemsArray = Array.from(counter.items.values());

    return ( 
        <div className="cartListWrapper">
            <ul className="cartListWrapper__list">
                {itemsArray.map((bike) => (
                    <li key={bike.name}>
                        <CartItem bike={bike} />
                    </li>
                ))}
            </ul>
        </div>
     );
};
 
export default CartList;
