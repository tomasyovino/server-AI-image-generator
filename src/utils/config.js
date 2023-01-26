import * as dotenv from "dotenv";

dotenv.config();

export const config = {
    PORT: process.env.PORT,
    mongo_uri: process.env.MONGO_URI
};