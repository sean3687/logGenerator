import { Router } from "express"
import userRoutes from "./userRoutes";
import generatorRoutes from "./generator";
import sessionRoutes from "./sessionRoute";

const router = Router();

router.use("/users", userRoutes);
router.use("/generate", generatorRoutes);
router.use("/session", sessionRoutes);

export default router;
