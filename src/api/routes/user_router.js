import { Router } from "express";
import user_controller from "../middlewares/index.js";

const user_router = Router();
user_router.post("/signup", user_controller.signUp);

export default user_router;
