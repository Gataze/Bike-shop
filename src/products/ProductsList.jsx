import "./styles/product-list-styles/products-list-styles.css";
import ProductItem from "./ProductItem";

const ProductsList = ({ newItems, isPending, error }) => {
  console.log("Product List component");

  return (
    <article className="productsList__itemsContainer">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {newItems &&
        newItems.map((item) => <ProductItem item={item} key={item.id} />)}
    </article>
  );
};

export default ProductsList;
