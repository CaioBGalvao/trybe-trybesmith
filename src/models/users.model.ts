import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUsers } from '../interfaces';

class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(productObj: IUsers): Promise<boolean> {
    const { username, classe, level, password } = productObj;
    const result = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO
      Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?)`,
      [username, classe, level, password],
    );
    if (result[0].affectedRows > 0) {
      return true;
    }
    return false;
  }
}

export default UsersModel;