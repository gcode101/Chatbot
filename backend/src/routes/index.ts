import { Router } from 'express';
import userRouter from './user-router.js';
import chatRouter from './chat-router.js';

const appRouter = Router();

appRouter.use("/user", userRouter); //domain/api/user
appRouter.use("/chat", chatRouter); //domain/api/chat

export default appRouter;