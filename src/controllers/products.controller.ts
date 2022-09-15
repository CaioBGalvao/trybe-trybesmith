import { Request, Response } from 'express';
import { ProductsService } from '../services';

class ProductController {
  constructor(private productsService = new ProductsService()) { }

  public createProducts = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const productObj = { name, amount };
    const result = await this.productsService.createProducts(productObj);
    res.status(201).json(result);
  };

  public getProducts = async (req: Request, res: Response) => {
    const result = await this.productsService.getProducts();
    res.status(200).json(result);
  };
}

export default ProductController;