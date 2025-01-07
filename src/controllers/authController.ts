import { Request, Response, NextFunction } from 'express';

export const login = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ hello: 'world!' });
};

export const register = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ hello: 'world!!' });
};
