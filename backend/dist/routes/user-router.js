import { Router } from 'express';
import { getAllUsers, login, signup } from '../controllers/user-controller.js';
import { loginValidator, signupValidator, validate } from '../utils/validators.js';
const userRouter = Router();
userRouter.get('/', getAllUsers);
userRouter.post('/signup', validate(signupValidator), signup);
userRouter.post('/login', validate(loginValidator), login);
export default userRouter;
//# sourceMappingURL=user-router.js.map