import app from './app.js';
import { connectDB } from './db/connection.js';
const PORT = process.env.PORT || 3000;
//Connections
connectDB()
    .then(() => {
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.log(error);
});
//# sourceMappingURL=index.js.map