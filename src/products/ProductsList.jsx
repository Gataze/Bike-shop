import "./styles/product-list-styles/products-list-styles.css";
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";

// import { sorterFunction } from "../utilities";

const ProductsList = ({ sortedItems, isPending, error }) => {
  console.log(sortedItems);

  return (
    <article className="productsList__itemsContainer">
      <p>asdf</p>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {sortedItems &&
        sortedItems.map((item) => <ProductItem item={item} key={item.id} />)}
    </article>
  );
};

export default ProductsList;
