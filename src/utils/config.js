import * as dotenv from "dotenv";
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

export const config = {
    PORT: process.env.PORT,
    mongo_uri: process.env.MONGO_URI,
    cloudinary: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    },
    openAI: {
        api_key: process.env.OPENAI_API_KEY
    }
};