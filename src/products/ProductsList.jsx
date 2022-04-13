import useFetchWithSorting from "../hooks/useFetchWithSorting";
import "./styles/product-list-styles/products-list-styles.css";
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";

// import { sorterFunction } from "../utilities";

// const useProductsOptions = (items) => {
//   const [product, setProduct] = useState("bikesPreview/");
//   const [sortDirection, setSortDirection] = useState([]);
//   const [sortedItems, setSortedItem] = useState("");

//   const productTypeHandler = (e) => {
//     setProduct(e.target.title);
//   };

//   const sortTypeHandler = (e) => {
//     setSortDirection(e.target.value);
//   };

//   useEffect(() => {
//     const sorterFunction = (bikes, sortDirection) => {
//       let sorted = [...bikes];

//       switch (sortDirection) {
//         case "A-Z":
//           sorted.sort((a, b) => a.name.localeCompare(b.name));
//           break;
//         case "Z-A":
//           sorted.sort((a, b) => b.name.localeCompare(a.name));
//           break;
//         case "1-9":
//           sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//           break;
//         case "9-1":
//           sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
//           break;
//         default:
//           break;
//       }
//       console.log(sorted);
//       setSortedItem(sorted);
//     };

//     sorterFunction(items, sortDirection);
//   }, [items, sortDirection]);

//   return {
//     product,
//     sortDirection,
//     sortedItems,
//     productTypeHandler,
//     sortTypeHandler,
//   };
// };

const ProductsList = () => {
  // const [product, setProduct] = useState("bikesPreview/");

  // const product = "bikesPreview/";

  // const [sortDirection, setSortDirection] = useState([]);

  const {
    state: { data: items, isPending, error },
    urlHandler,
  } = useFetchWithSorting(
    `https://my-json-server.typicode.com/gataze/mockjson/`
  );

  // const {
  //   product,
  //   sortDirection,
  //   sortedItems,
  //   productTypeHandler,
  //   sortTypeHandler,
  // } = useProductsOptions(items);

  // const sss = sorterFunction(items, sortDirection);
  console.log(items);

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
          // onChange={(e) => sortTypeHandler(e)}
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
        {items &&
          items.map((item) => <ProductItem item={item} key={item.id} />)}
      </article>
    </div>
  );
};

export default ProductsList;
