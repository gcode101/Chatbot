import { connect, disconnect } from 'mongoose';
const DBURL = process.env.MONGODB_URL; 

async function connectDB() {
    try{
        connect(DBURL);
        console.log("Connected to DB");
    }catch(error){
        console.log(error);
        throw new Error("Unable to connect to database");
    }
}

async function disconnectDB() {
    try{
        disconnect();
    }catch(error){
        console.log(error)
        throw new Error("Unable to disconnect from database");
    }
}

export { connectDB, disconnectDB };