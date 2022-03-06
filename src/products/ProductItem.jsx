import { Link } from "react-router-dom";
import sorterFunction from "../utilities/sorterFunction";
import "./styles/product-item-styles/product-item.styles.css";

const ProductItem = ({ bikes, product, sortDirection }) => {
  const sortedProducts = sorterFunction(bikes, sortDirection);

  return (
    <>
      {sortedProducts.map((bike) => (
        <div className="product-item" key={bike.id}>
          <div className="col-3">
            <h2>{bike.name}</h2>
            <div className="photo">
              <img src={bike.url} alt={`${bike.name} bike`}></img>
            </div>
            <div className="description">
              <span className="price">
                Price:<b> {bike.price}$</b>
              </span>
              <span>
                Type of bicycle: <b>{bike.type}</b>
              </span>
              <span>
                Wheel size: <b>{bike.wheel}"</b>
              </span>
              <span>
                Frame size: <b>{bike.frame}"</b>
              </span>
              <span>
                Color: <b>{bike.color}</b>
              </span>
              <button>
                <Link className="btn" to={`/products/${product + bike.id}`}>
                  MORE
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductItem;
