import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';


config();
const app = express();

//Middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//This logs HTTP requests. Remove in production
app.use(morgan("dev"));

app.use("/api", appRouter);

export default app;