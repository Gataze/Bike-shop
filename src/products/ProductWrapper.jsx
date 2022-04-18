import React from "react";
import ProductsOptions from "./ProductsOptions";
import ProductsList from "./ProductsList";
import useFetchWithUrlHandler from "../hooks/useFetchSortHook";
// import useSortingHook from "../hooks/useSortingHook";

export default function ProductWrapper() {
  const {
    state: { data: items, isPending, error },
    urlHandler,
    sortTypeHandler,
  } = useFetchWithUrlHandler(
    `https://my-json-server.typicode.com/gataze/mockjson/`
  );

  // const { newItems, sortTypeHandler } = useSortingHook(items);

  console.log(items);

  return (
    <div>
      <ProductsOptions
        urlHandler={urlHandler}
        sortTypeHandler={sortTypeHandler}
      />
      <ProductsList items={items} isPending={isPending} error={error} />
    </div>
  );
}
