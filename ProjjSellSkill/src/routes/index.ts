import { Router } from "express";
import { HelloController } from "../controllers/HelloController";
import { HttpController } from "../controllers/HttpController";

const router = Router();

router.get("/hello", HelloController.hello);
router.get("/http/ip", HttpController.ip);

export default router;
