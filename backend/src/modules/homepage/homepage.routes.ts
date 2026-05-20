import { Router } from "express";
import { HomepageController } from "./homepage.controller";
import { asyncHandler } from "../../utils/asyncHandler";
import { authorize, protect } from "../../middleware/auth";

const router = Router();

router.get("/", asyncHandler(HomepageController.getContent));
router.put("/", protect, authorize("admin", "editor"), asyncHandler(HomepageController.updateContent));

export default router;
