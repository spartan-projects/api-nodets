import express from 'express';
import {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product';

const router = express.Router();

router.get('/product', getProducts);
router.get('/product/:id', getProduct);
router.post('/product', postProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;
