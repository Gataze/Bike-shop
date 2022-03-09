import { Link } from "react-router-dom";
import sorterFunction from "../utilities/sorterFunction";
import "./styles/product-item-styles/product-item.styles.css";

const ProductItem = ({ bikes, product, sortDirection }) => {
  const sortedProducts = sorterFunction(bikes, sortDirection);

  return (
    <>
      {sortedProducts.map((bike) => (
        <div className="productItem" key={bike.id}>
          <div className="productItem__container">
            <h2 className="productItem__header">{bike.name}</h2>
            <div className="productItem__photoContainer">
              <img className="productItem__photo" src={bike.url} alt={`${bike.name} bike`}></img>
            </div>
            <div className="productItem__descriptionContainer">
              <span className="productItem__descriptionItem">
                Price:<b> {bike.price}$</b>
              </span>
              <span className="productItem__descriptionItem">
                Type: <b>{bike.type}</b>
              </span>
              {bike.wheel? 
                <span className="productItem__descriptionItem">
                  Wheel size: <b>{bike.wheel}"</b>
                </span> : null
              }
              {bike.frame? 
                <span className="productItem__descriptionItem">
                  Frame size: <b>{bike.frame}"</b>
                </span>: null}
              <span className="productItem__descriptionItem">
                Color: <b>{bike.color}</b>
              </span>
              
                <Link className="productItem__button" to={`/products/${product + bike.id}`}>
                  MORE
                </Link>
              
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductItem;
