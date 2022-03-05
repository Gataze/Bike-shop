import CartItem from './CartItem'

const CartList = ({counter}) => {



    const itemsArray = Array.from(counter.items.entries());

    const itemsArray2 = Array.from(counter.items.values());

    console.log(itemsArray2)

    const itemsList = itemsArray2.map((bike) => (
        
        <li key={bike.name}>
          <CartItem bike={bike} />
        </li>
    ));

    return ( 
        <div className="row">
            <ul>
                {itemsList}
            </ul>
        </div>
  
     );
};
 
export default CartList;
