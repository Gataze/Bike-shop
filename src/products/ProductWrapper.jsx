import React from "react";
import ProductsOptions from "./ProductsOptions";
import ProductsList from "./ProductsList";
import useFetchWithUrlHandler from "../hooks/useFetchSortHook";
// import useSortingHook from "../hooks/useSortingHook";

export default function ProductWrapper() {
  const {
    state: { data: items, isPending, error, type },
    urlHandler,
    sortTypeHandler,
  } = useFetchWithUrlHandler(
    `https://my-json-server.typicode.com/gataze/mockjson/`
  );

  console.log(type);

  return (
    <div>
      <ProductsOptions
        urlHandler={urlHandler}
        sortTypeHandler={sortTypeHandler}
      />
      <ProductsList
        items={items}
        isPending={isPending}
        error={error}
        type={type}
      />
    </div>
  );
}
