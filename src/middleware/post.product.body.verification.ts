import { Response, Request, NextFunction } from 'express';

class BodyValidations {
  public productValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { name, amount } = req.body;
    if (!name || name.length === 0
      || !amount || amount.length === 0) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
  };
}

export default BodyValidations;