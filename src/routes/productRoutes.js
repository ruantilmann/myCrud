import express from 'express';
import { createProduct, getAllProducts, deleteProduct } from '../controllers/productController.js';

const router = express.Router()

router.post('/createProduct', createProduct)
router.get('/allProducts', getAllProducts)
router.delete('/deleteProduct/:id', deleteProduct)

export default router