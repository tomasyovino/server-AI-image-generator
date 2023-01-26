import express from "express";
import cors from "cors";
import router from "./src/routes/index.js";
import connectDB from "./src/utils/db.js";
import { config } from "./src/utils/config.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use("/api", router);

const startServer = () => {
    try {
        connectDB(config.mongo_uri);
        app.listen(config.PORT, (req, res) => {
            console.log(`Server listening on port ${config.PORT}`);
        });
    } catch (err) {
        console.log(err);
    };
};

startServer();