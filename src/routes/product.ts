import express from 'express';
import { getController } from '../controllers/product';

const router = express.Router();

router.get('/product', getController);

export default router;
