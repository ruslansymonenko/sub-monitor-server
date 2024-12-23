import express, { Express } from 'express';
import dotenv from 'dotenv';
import router from './routes/router.ts';
import dbConnection from './database/dbConnection.ts';

dotenv.config();

await dbConnection();

const app: Express = express();

app.use(express.json());
app.use('/api', router);

export default app;
