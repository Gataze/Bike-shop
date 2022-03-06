import CartItem from './CartItem'

const CartList = ({counter}) => {

    const itemsArray = Array.from(counter.items.values());
    const itemsList = itemsArray.map((bike) => (
        
        <li key={bike.name}>
          <CartItem bike={bike} />
        </li>
    ));

    return ( 
        <div className="cartListWrapper">
            <ul className="cartListWrapper__list">
                {itemsList}
            </ul>
        </div>
     );
};
 
export default CartList;
