import { Link } from "react-router-dom";

import "./styles/product-item-styles/product-item.styles.css";
import { formatCurrency } from "../utilities";

const ProductItem = ({ item, product }) => {
  // const sortedProducts = sorterFunction(bikes, sortDirection);

  return (
    <>
      <div className="productItem" key={item.id}>
        <div className="productItem__container">
          <h2 className="productItem__header">{item.name}</h2>
          <div className="productItem__photoContainer">
            <img
              className="productItem__photo"
              src={item.url}
              alt={`${item.name} ${product}`}
            ></img>
          </div>
          <div className="productItem__descriptionContainer">
            <span className="productItem__descriptionItem">
              Price:<b> {formatCurrency(item.price)}</b>
            </span>
            <span className="productItem__descriptionItem">
              Type: <b>{item.type}</b>
            </span>
            {item.wheel ? (
              <span className="productItem__descriptionItem">
                Wheel size: <b>{item.wheel}"</b>
              </span>
            ) : null}
            {item.frame ? (
              <span className="productItem__descriptionItem">
                Frame size: <b>{item.frame}"</b>
              </span>
            ) : null}
            <span className="productItem__descriptionItem">
              Color: <b>{item.color}</b>
            </span>

            <Link
              className="productItem__button"
              title={item.name}
              to={`/products/${product + item.id}`}
            >
              MORE
            </Link>
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default ProductItem;
