import { NextFunction, Response, Request } from 'express';
import HttpError from '../errors/HttpError.js';
import { logger } from '../utils/logger.js';

const errorHandler = async (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  const statusCode: number = err.statusCode || 500;
  const message: string = err.message ? err.message : 'Internal Server Error';

  await logger.log('error', `code: ${statusCode}, message: ${message}`);

  res.status(statusCode).json({
    success: false,
    message: message,
  });
};

export default errorHandler;
