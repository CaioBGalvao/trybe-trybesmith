import { OrdersModel, connection } from '../models';
import { IOrder } from '../interfaces';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const result = await this.model.getAll();
    return result;
  }
}

export default OrdersService;