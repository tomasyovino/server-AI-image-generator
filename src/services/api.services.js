import PostsDAO from "../persistence/PostsDAO.js";

let postsDAO = PostsDAO.createInstance();

export const getAllPosts = async () => {
    return await postsDAO.getAllPosts();
};

export const createPost = async (name, prompt, photo) => {
    return await postsDAO.createPost(name, prompt, photo);
};