import { FaStar } from "react-icons/fa";
import { useParams } from "react-router";
import "./styles/product-details-styles/product-details-styles.css";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ProductDescription from "./ProductDescription";
import ImgSlider from "./ImgSlider";
import { useOrderDetails } from "../context/OrderDetails";
import { formatCurrency } from "../utilities";


const ProductCard = () => {

  const [, updateItemCount] = useOrderDetails();
  const [counter, setCounter] = useState(0);
  const { typeId, id } = useParams();
  const { data: item } = useFetch(
    `https://my-json-server.typicode.com/gataze/mockjson/${typeId}/${id}`
  );


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="card">
      <h2 className="card__header">Product card</h2>
      <div className="card__container">
        <ImgSlider item={item} />
        <div className="card__descriptionContainer">
          <h2 className="card__itemName">{item.name}</h2>
          <div className="card__fiveStars">
            {[...Array(5)].map((e, i) => (
              <FaStar key={i} />
            ))}
            <span className="card__starsSpan">4.8/5 (33)</span>
          </div>
          <p className="card__itemPrice">{formatCurrency(item.price)}</p>
          <p className="card__itemLoan">10 rat x {formatCurrency(item.price / 10)}</p>
          <p className="card__detailsSpan">Details:</p>
          <p className="card__spcs1">
            Type: <b>{item.type}</b>
          </p>
          <p className="card__spcs2">
            Color: <b>{item.color}</b>
          </p>
          <p className="card__spcs3">
            Frame: <b>{item.frame}</b>
          </p>
          <p className="card__spcs4">
            Wheel: <b>{item.wheel}</b>
          </p>

          <form className="card__form">
            <label htmlFor="spinInput" className="card__label">Count</label>
            <input
              type="number"
              id="spinInput"
              value={counter}
              onChange={(e) => setCounter(Math.floor(Number(e.target.value)))}
              min="0"
              max="999"
              className="card__input"
            />
          </form>

          <form className="card__form">
            
            <span>Total: {counter? formatCurrency(counter * (item.price)) : 0}</span>
          </form>
          

          
            <Link onClick={() => updateItemCount(counter, item, item.name)} to="/cart" className="card__addBtn" >
              <button className="card__add" disabled={!counter}>ADD TO CART</button>
            </Link>
          
        
          
                 
        </div>
      </div>

      <ProductDescription />
    </section>
  );
};

export default ProductCard;



  

  // const addToCart = (item) => {
  //   const oldItems = JSON.parse(localStorage.getItem("item"));

  //   //Item object that was fetched
  //   const newItem = {
  //     name: item.name,
  //     body: item.body,
  //     price: item.price,
  //     url: item.url,
  //     id: item.id,
  //   };

  //   const updatedItems = oldItems.filter(
  //     (oldItem) => oldItem.id !== newItem.id
  //   );
  //   const allItems = [...updatedItems, newItem];

  //   const temp = JSON.stringify(allItems);
  //   localStorage.setItem("item", temp);
  // };