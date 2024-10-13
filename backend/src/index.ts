import express from 'express';

const app = express();

//Middlewares
app.use(express.json());

//Connections
app.listen(3000, () => {
    console.log(`server running on port 3000`);
});