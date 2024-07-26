import express from 'express';
import { getProductsHandler } from '../controller/productController.js';

const productRoutes = express.Router();

productRoutes.get('/products', getProductsHandler);

export default productRoutes;