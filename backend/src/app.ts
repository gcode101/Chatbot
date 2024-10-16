import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import appRouter from './routes/index.js';


config();
const app = express();

//Middlewares
app.use(express.json());

//This logs HTTP requests. Remove in production
app.use(morgan("dev"));

app.use("/api", appRouter);

export default app;