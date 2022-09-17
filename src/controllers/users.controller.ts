import { Request, Response } from 'express';
import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';
import { UsersService } from '../services';

const JWT_SECRET = 'superpassword';
const JWT_OPTIONS: SignOptions = { algorithm: 'HS256', expiresIn: '1 days' };

class UsersController {
  constructor(private usersService = new UsersService()) { }

  public createUser = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    const userObj = { username, classe, level, password };
    const result = await this.usersService.createUser(userObj);
    if (result) {
      const payload: JwtPayload = { username, classe, level };
      const token = jwt.sign(payload, JWT_SECRET, JWT_OPTIONS);
      return res.status(201).json({ token });
    }
    res.status(404).json({ message: 'User not created' });
  };
}

export default UsersController;