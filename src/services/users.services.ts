import { UsersModel, connection } from '../models';
import { IUsers } from '../interfaces';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async createUser(userObj: IUsers): Promise<boolean> {
    const result = await this.model.create(userObj);
    return result;
  }
}

export default UsersService;