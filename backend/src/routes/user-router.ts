import { Router } from 'express';
import { getAllUsers, signup } from '../controllers/user-controller.js';
import { signupValidator, validate } from '../utils/validators.js';

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.post('/signup',validate(signupValidator) ,signup);

export default userRouter; 