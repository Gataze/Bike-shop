import "./styles/product-list-styles/products-list-styles.css";
import ProductItem from "./ProductItem";

const ProductsList = ({ items, isPending, error }) => {
  return (
    <article className="productsList__itemsContainer">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {items && items.map((item) => <ProductItem item={item} key={item.id} />)}
    </article>
  );
};

export default ProductsList;
