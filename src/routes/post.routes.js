import { Router } from "express";
import * as postsCtrl from "../controllers/api.controller.js";

const postRouter = Router();

postRouter.get("/", postsCtrl.getAllPostsController);
postRouter.post("/", postsCtrl.createPostController);

export default postRouter;