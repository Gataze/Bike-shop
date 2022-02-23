import useFetch from "../hooks/useFetch";
import "./styles/product-list-styles/products-list-styles.css";
import ProductItem from "./ProductItem";
import { useState } from "react";

const ProductsList = () => {
  const [product, setProduct] = useState("bikesPreview/");
  const [sortDirection, setSortDirection] = useState("");
  const {
    data: bikes = 0,
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
    <div className="products">
      <div className="row-1">
        <div className="col-1">
          <h2>All Products</h2>
        </div>
        <div className="col-2">
          <span title="bikesPreview/" onClick={(e) => handleClick(e)}>
            Bikes
          </span>
          <span title="accesories/" onClick={(e) => handleClick(e)}>
            Accesories
          </span>
        </div>

        <div className="col-2">
          <select
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
      </div>

      <div className="row-2">
        <div className="container">
          {isPending && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {bikes && (
            <ProductItem
              product={product}
              bikes={bikes}
              sortDirection={sortDirection}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
