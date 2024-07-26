import fetchProducts from '../utils/fetchProducts.js';

const getProducts = async (company, category, minPrice, maxPrice, top) => {
  const products = await fetchProducts(company, category, minPrice, maxPrice, top);
  return products;
};
  // Sorting products in ascending order
  products.sort((a, b) => a.price - b.price);
export { getProducts };