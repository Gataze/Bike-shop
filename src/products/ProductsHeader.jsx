import ProductsList from "./ProductsList";
import "./styles/product-list-styles/products-list-styles.css";
import useFetchWithUrlHandler from "../hooks/useFetchWithUrlHandler";
import useSortingHook from "../hooks/useSortingHook";

export default function ProductsHeader() {
  const {
    state: { data: items, isPending, error },
    urlHandler,
  } = useFetchWithUrlHandler(
    `https://my-json-server.typicode.com/gataze/mockjson/`
  );

  const { newItems, sortTypeHandler } = useSortingHook(items);

  return (
    <div className="productsWrapper">
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
        <ProductsList newItems={newItems} isPending={isPending} error={error} />
      </div>
    </div>
  );
}
