import { Request, Response } from 'express';
import { OrdersService } from '../services';

class ProductController {
  constructor(private ordersService = new OrdersService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.ordersService.getAll();
    res.status(200).json(result);
  };
}

export default ProductController;