export const sorterFunction = (bikes, sortDirection) => {
  if (Array.isArray(bikes)) {
    let sorted = [...bikes];

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
  }

  // console.log(bikes);
  console.log("sorting...");
};

export function getTotalItemCount(count) {
  let itemCount = 0;
  for (const items of count.items.values()) {
    itemCount += items.newCount;
  }
  return itemCount;
}

export function formatCurrency(currency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(currency);
}
