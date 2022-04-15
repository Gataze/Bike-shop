import "./styles/product-list-styles/products-list-styles.css";

export default function ProductsHeader({ urlHandler, sortTypeHandler }) {
  return (
    <div className="productsWrapper__headerContainer">
      <h2 className="productsWrapper__header">All Products</h2>
      <div className="productsWrapper__buttonContainer">
        <button
          className="productsWrapper__button"
          title="bikesPreview/"
          onClick={(e) => urlHandler(e)}
        >
          Bikes
        </button>
        <button
          className="productsWrapper__button"
          title="accesories/"
          onClick={(e) => urlHandler(e)}
        >
          Accesories
        </button>
      </div>

      <select
        className="productsWrapper__select"
        defaultValue=""
        onChange={(e) => sortTypeHandler(e)}
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
  );
}
