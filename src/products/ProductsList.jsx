import "./styles/product-list-styles/products-list-styles.css";
import ProductItem from "./ProductItem";

const ProductsList = ({ items, isPending, error, type }) => {
  console.log(items);

  return (
    <article className="productsList__itemsContainer">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {items &&
        items.map((item) => (
          <ProductItem item={item} key={item.id} type={type} />
        ))}
    </article>
  );
};

export default ProductsList;
