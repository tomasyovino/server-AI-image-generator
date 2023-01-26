import { Router } from "express";

const postRouter = Router();

postRouter.get("/", (req, res) => {
    res.send("postRouter");
});

export default postRouter;