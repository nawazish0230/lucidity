import { IProduct, IProducts } from "redux/home/types";

const formatValueFromProductData = (responseData: IProducts, options = {} as IProduct) => {
  const { isDisabled } = options;

  const totalProducts = responseData.length;

  const totalStoreValue = responseData.reduce((total, product) => {
    if (options.isDisabled && product.isDisabled) {
      return total;
    }
    const price = parseFloat(product.price.slice(1)); // Remove the dollar sign and parse to float
    return total + (price * Number(product.quantity));
  }, 0);

  const outOfStockProducts = responseData.filter(product => {
    if (options.isDisabled && product.isDisabled) {
      return false;
    }
    return Number(product.quantity) === 0;
  }).length;

  const categories = new Set(responseData.map(product => product.category));
  const numberOfCategories = categories.size;

  const updatedData = {
    totalProducts,
    totalStoreValue,
    outOfStockProducts,
    numberOfCategories,
    data: responseData.map(item => ({
      ...item,
      totalValue: parseFloat(item.price.slice(1)) * Number(item.quantity),
      isDisabled: item.isDisabled || (isDisabled && item.isDisabled),
    })),
  };

  return updatedData;
}

const replaceProductInArray = (items: IProducts, newItem: IProduct) => {
  return items.map(item => {
    if (item.name === newItem.name) {
      return newItem;
    }
    return item;
  });
}

export { formatValueFromProductData, replaceProductInArray };
