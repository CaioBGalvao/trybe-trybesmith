import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';
import { IToken } from '../interfaces';

const JWT_SECRET = 'superpassword';
const JWT_OPTIONS: SignOptions = { algorithm: 'HS256', expiresIn: '1 days' };

class Token {
  public create = (payload: JwtPayload): IToken => {
    const token = jwt
      .sign(payload, JWT_SECRET, JWT_OPTIONS);
    const newToken: IToken = { token };
    return newToken;
  };
}

export default Token;