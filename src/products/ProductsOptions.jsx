import "./styles/product-options-styles/Product-options-styles.css";

export default function ProductsOptions({ urlHandler, sortTypeHandler }) {
  return (
    <div className="productsOptions">
      <h2 className="productsOptions__header">All Products</h2>
      <div className="productsOptions__buttonContainer">
        <button
          className="productsOptions__button"
          title="bikesPreview/"
          onClick={(e) => urlHandler(e)}
        >
          Bikes
        </button>
        <button
          className="productsOptions__button"
          title="accesories/"
          onClick={(e) => urlHandler(e)}
        >
          Accesories
        </button>
      </div>

      <select
        className="productsOptions__select"
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
