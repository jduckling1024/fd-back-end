import { Router } from "express";
import user_router from "./user_router.js";

const router = Router();
router.use("/users", user_router);

export default router;
