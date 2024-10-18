import { Router } from 'express';
import { getAllUsers, signup } from '../controllers/user-controller.js';

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.post('/signup', signup);

export default userRouter;