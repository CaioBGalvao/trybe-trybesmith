import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(productObj: IProduct): Promise<IProduct> {
    const { name, amount } = productObj;
    const result = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO
      Trybesmith.Products (name, amount)
      VALUES (?, ?)`,
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...productObj };
  }

  public async getAll(): Promise<IProduct[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    const [data] = result;
    return data as IProduct[];
  }
}

export default ProductModel;