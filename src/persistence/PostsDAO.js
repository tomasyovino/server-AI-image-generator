import PostModel from "./models/Post.js";

let instance = null;

class PostsDAO {
    constructor() {
        this.collection = PostModel;
    };
    static createInstance() {
        if (!instance) {
            instance = new PostsDAO();
        };
        return instance;
    };

    async getAllPosts() {
        try {
            const posts = await this.collection.find({});
            return posts;
        } catch (err) {
            console.log(err);
        };
    };

    async createPost(name, prompt, photo) {
        try {
            const newPost = await this.collection.create({
                name,
                prompt,
                photo
            });
            return newPost;
        } catch (err) {
            console.log(err);
        };
    };
};

export default PostsDAO;