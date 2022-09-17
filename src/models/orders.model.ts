import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces';

class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const result = await this.connection.execute(
      `SELECT
        orders_table.id,
        orders_table.userId,
        JSON_ARRAYAGG(product_table.id) AS productsIds
      FROM
        Trybesmith.Orders as orders_table
          INNER JOIN 
        Trybesmith.Products AS product_table
      ON orders_table.id = product_table.orderId
      GROUP BY orders_table.id
      ORDER BY orders_table.userId`,
    );
    const [data] = result;
    return data as IOrder[];
  }
}

export default OrdersModel;