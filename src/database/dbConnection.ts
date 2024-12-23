import mongoose from 'mongoose';
import { logger } from '../utils/logger.ts';
import dotenv from 'dotenv';

dotenv.config();

const databaseConnectionData: string | undefined = process.env.MONGO_DB_CONNECTION;

const dbConnection = async (): Promise<void> => {
  if (!databaseConnectionData) {
    await logger.log(
      'error',
      `Database connection string is not provided or incorrect, ${databaseConnectionData}`,
    );
    process.exit(1);
  }

  try {
    await mongoose.connect(databaseConnectionData, {});

    await logger.log('info', 'Connected to database');
  } catch (error) {
    await logger.log('error', `${error}`);
    process.exit(1);
  }
};

export default dbConnection;
