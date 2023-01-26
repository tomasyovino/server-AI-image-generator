import { Router } from "express";
import postRouter from "./post.routes.js";
import openaiRouter from "./openai.routes.js";

const router = Router();

router.use("/posts", postRouter);
router.use("/openai", openaiRouter);

router.get("/", (req, res) => {
    res.send("Welcome to AI Image Generator APP");
});

export default router;