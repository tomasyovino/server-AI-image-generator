import { Router } from "express";
import * as openaiCtrl from "../controllers/api.controller.js";

const openaiRouter = Router();

openaiRouter.post("/", openaiCtrl.createAIImageController);

export default openaiRouter;