import { Router } from 'express';
import authRouter from './authRouter.ts';

const router: Router = Router();

router.use('/auth', authRouter);

export default router;
