import { getProducts } from '../services/productService.js';

const getProductsHandler = async (req, res) => {
  const { companyname, categoryname, top, minPrice, maxPrice } = req.body;

  try {
    const products = await getProducts(companyname, categoryname, minPrice, maxPrice, top);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export { getProductsHandler };