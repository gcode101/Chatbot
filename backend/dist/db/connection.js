import { connect, disconnect } from 'mongoose';
const DBURL = process.env.MONGODB_URL;
async function connectDB() {
    try {
        connect(DBURL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Unable to connect to database");
    }
}
async function disconnectDB() {
    try {
        disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Unable to disconnect from database");
    }
}
export { connectDB, disconnectDB };
//# sourceMappingURL=connection.js.map