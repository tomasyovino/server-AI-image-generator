import { getAllPosts, createPost } from "../services/api.services.js";
import { v2 as cloudinary } from 'cloudinary';
import { Configuration, OpenAIApi } from 'openai';
import { config } from "../utils/config.js";

const configuration = new Configuration({ apiKey: config.openAI.api_key});
const openai = new OpenAIApi(configuration);

cloudinary.config({
    cloud_name: config.cloudinary.cloud_name,
    api_key: config.cloudinary.api_key,
    api_secret: config.cloudinary.api_secret,
});

export const createAIImageController = async (req, res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const image = aiResponse.data.data[0].b64_json;
        res.status(200).json({ photo: image });
    } catch (err) {
        console.error(err);
        res.status(500).send(err?.response.data.error.message || 'Something went wrong');
    };
};

export const getAllPostsController = async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.status(200).json({ success: true, data: posts });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Internal server error: Error getting posts" });
    };
};

export const createPostController = async (req, res) => {
    try {
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = await createPost(name, prompt, photoUrl.url);
        res.status(200).json({ success: true, data: newPost });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Internal server error: Post creation error" });
    };
};