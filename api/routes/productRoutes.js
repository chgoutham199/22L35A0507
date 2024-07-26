import express from 'express';
import { getProductsHandler } from '../controllers/productController.js';

const router = express.Router();

router.get('/products', getProductsHandler);

export default router;