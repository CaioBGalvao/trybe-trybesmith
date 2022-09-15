import express from 'express';
import { ProductController } from '../controllers';

const productRoute = express.Router();

const productController = new ProductController();

productRoute
  .post(
    '/',
    productController.createProducts,
  )
  .get('/', productController.getProducts);

export default productRoute;