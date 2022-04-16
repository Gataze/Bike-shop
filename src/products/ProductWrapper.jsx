import React from "react";
import ProductsHeader from "./ProductsOptions";
import ProductsList from "./ProductsList";
import useFetchWithUrlHandler from "../hooks/useFetchWithUrlHandler";
import useSortingHook from "../hooks/useSortingHook";

export default function ProductWrapper() {
  const {
    state: { data: items, isPending, error },
    urlHandler,
  } = useFetchWithUrlHandler(
    `https://my-json-server.typicode.com/gataze/mockjson/`
  );

  const { newItems, sortTypeHandler } = useSortingHook(items);

  return (
    <div>
      <ProductsHeader
        urlHandler={urlHandler}
        sortTypeHandler={sortTypeHandler}
      />
      <ProductsList newItems={newItems} isPending={isPending} error={error} />
    </div>
  );
}
