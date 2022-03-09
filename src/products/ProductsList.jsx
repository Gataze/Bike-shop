import useFetch from "../hooks/useFetch";
import "./styles/product-list-styles/products-list-styles.css";
import ProductItem from "./ProductItem";
import { useState } from "react";

const ProductsList = () => {
  const [product, setProduct] = useState("bikesPreview/");
  const [sortDirection, setSortDirection] = useState("");
  const {
    data: items = 0,
    error,
    isPending,
  } = useFetch(
    `https://my-json-server.typicode.com/gataze/mockjson/${product}`
  );

  const handleClick = (e) => {
    const {
      target: { title },
    } = e;
    setProduct(title);
  };

  return (
    <div className="productsList">
        <div className="productsList__headerContainer">
          <h2 className="productsList__header">All Products</h2>
          <div className="productsList__buttonContainer">
            <button className="productsList__button" title="bikesPreview/" onClick={(e) => handleClick(e)}>
              Bikes
            </button>
            <button className="productsList__button" title="accesories/" onClick={(e) => handleClick(e)}>
              Accesories
            </button>
          </div>
         
          <select
            className="productsList__select"
            defaultValue=""
            onChange={(e) => setSortDirection(e.target.value)}
          >
            <option value="" disabled hidden>
              Sort items by:{" "}
            </option>
            <option value="A-Z">Name (A...Z)</option>
            <option value="Z-A">Name (Z...A)</option>
            <option value="1-9">Price (1...9)</option>
            <option value="9-1">Price (9...1)</option>
          </select>
        </div>

        <article className="productsList__itemsContainer">
          {isPending && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {items && (
            <ProductItem
              product={product}
              bikes={items}
              sortDirection={sortDirection}
            />
          )}
        </article>
      
    </div>
  );
};

export default ProductsList;
