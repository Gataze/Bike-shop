import "./styles/cart-styles.css";
import CartList from "./CartList";
import { useOrderDetails } from "../context/OrderDetails"
import { Link } from "react-router-dom";

const Cart = () => {

  const [counter,,total] = useOrderDetails();


  return (
    <div className="cart">
      <section className="cart__ribbon">
        <h2>CART</h2>
      </section>
      <section className="cart__mainCart">
        {total.grandTotal?
          <>
            <CartList counter={counter}/>
            <div className="cart__buttons">
              <button className="cart__button">Proceed to checkout</button>
              <Link to="/products" className="cart__button">Back to shop</Link>
            </div>
            <h2 className="cart__total"><b>Total value:</b> {total.grandTotal}$</h2>
          </>
          :<div className="cart__emptyContainer">
            <p className="cart__empty">Your cart is empty</p>
            <Link to="/products" className="cart__button">Back to shop</Link>
          </div>
        }
      </section>
    </div>
  );
};

export default Cart;



  // const [items, setItems] = useState([]);

  // //Zmienna która będzie przechwoywać całkowitą wartość produktów w koszyku
  // const [totalValue, setTotalValue] = useState(0);

  // useEffect(() => {
  //   //pobranie danych z localStorage
  //   const temp = localStorage.getItem("item");
  //   const loadedItem = JSON.parse(temp);

  //   //Jeśli cokowliek było w localStorage to zapisuje to w zmiennej items
  //   if (loadedItem) {
  //     setItems(loadedItem);
  //   }
  // }, []);

  // //zapisuje items do localStorage po dodaniu lub usunięciu danego produktu z koszyka
  // useEffect(() => {
  //   const temp = JSON.stringify(items);
  //   localStorage.setItem("item", temp);
  // }, [items]);

  // //usówa dany produkt z localStorage
  // const delFromCart = (id) => {
  //   const temp = localStorage.getItem("item");
  //   const loadedItem = JSON.parse(temp);
  //   console.log(loadedItem);

  //   setItems(loadedItem.filter((localItem) => localItem.id !== id));
  // };

  // //clears the cart and localStorage
  // const clearCart = () => {
  //   setItems([]);
  // };

  // //efekt zliczający całkowitą wartośc produktów w koszyku
  // useEffect(() => {
  //   setTotalValue(
  //     [...items]
  //       .map((item) => {
  //         return item.counter * item.price;
  //       })
  //       .reduce((a, b) => a + b, 0)
  //   );
  // }, [items]);

  // const addTotalValue = (price) => {
  //   setTotalValue((prevState) => prevState + price);
  // };

  // const minusTotalValue = (price) => {
  //   setTotalValue((prevState) => prevState - price);
  // };