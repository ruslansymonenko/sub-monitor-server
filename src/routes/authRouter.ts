import { Router } from 'express';
import { login, register } from '../controllers/authController.ts';

const authRouter: Router = Router();

authRouter.post('/login', login);

authRouter.post('/register', register);

export default authRouter;
