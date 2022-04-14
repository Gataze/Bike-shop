import { useState } from "react";

const useSortingHook = (items) => {
  const [sortedItems, setSortedItem] = useState("");

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
    return sorted;
  };

  const sortTypeHandler = (e) => {
    const sorted = sorterFunction(items, e.target.value);
    setSortedItem(sorted);
  };

  const newItems = sortedItems ? sortedItems : items;
  return { newItems, sortTypeHandler };
};

export default useSortingHook;
