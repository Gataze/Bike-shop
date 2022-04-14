import ProductsList from "./ProductsList";
import "./styles/product-list-styles/products-list-styles.css";
import useFetchWithUrlHandler from "../hooks/useFetchWithUrlHandler";
import { useEffect, useState } from "react";

const useSortingHook = (items) => {
  const [sortDirection, setSortDirection] = useState(false);
  const [sortedItems, setSortedItem] = useState("");

  const sortTypeHandler = (e) => {
    setSortDirection(e.target.value);
  };

  useEffect(() => {
    // if (sortDirection === false) return;

    const sorterFunction = (items, sortDirection) => {
      let sorted = [...items];

      switch (sortDirection) {
        case "A-Z":
          sorted.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "Z-A":
          sorted.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "1-9":
          sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
          break;
        case "9-1":
          sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
          break;
        default:
          break;
      }
      console.log(sortDirection);
      setSortedItem(sorted);
    };

    sorterFunction(items, sortDirection);
  }, [items, sortDirection]);

  return {
    sortedItems,
    sortTypeHandler,
  };
};

export default function ProductsHeader() {
  const {
    state: { data: items, isPending, error },
    urlHandler,
  } = useFetchWithUrlHandler(
    `https://my-json-server.typicode.com/gataze/mockjson/`
  );

  const { sortedItems, sortTypeHandler } = useSortingHook(items);

  return (
    <div className="productsList">
      <div className="productsList__headerContainer">
        <h2 className="productsList__header">All Products</h2>
        <div className="productsList__buttonContainer">
          <button
            className="productsList__button"
            title="bikesPreview/"
            onClick={(e) => urlHandler(e)}
          >
            Bikes
          </button>
          <button
            className="productsList__button"
            title="accesories/"
            onClick={(e) => urlHandler(e)}
          >
            Accesories
          </button>
        </div>

        <select
          className="productsList__select"
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
        <ProductsList
          sortedItems={sortedItems}
          isPending={isPending}
          error={error}
        />
      </div>
    </div>
  );
}
