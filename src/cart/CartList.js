import CartItem from './CartItem'

const CartList = ({items, totalValue, addTotalValue, minusTotalValue, delFromCart}) => {

    return ( 
        <div className="row">
            {!items.length  && <div className='noItemsMsg'>There is no product in your cart...</div>}
            {items && items.map((bike) => (
                <CartItem 
                    key={bike.id}
                    bike={bike}
                    delFromCart={delFromCart}
                    addTotalValue={addTotalValue}
                    minusTotalValue={minusTotalValue}
                />
            ))}
            <div className='col-2 cart-total-value'>
                <span>Total value: {totalValue}$</span>
            </div>
        </div>
  
     );
}
 
export default CartList;
