import { Router } from "express";

const openaiRouter = Router();

openaiRouter.get("/", (req, res) => {
    res.send("openaiRouter");
});

export default openaiRouter;