import { Router } from "express";
import { BlogController } from "./blog.controller";
import { asyncHandler } from "../../utils/asyncHandler";
import { authorize, protect } from "../../middleware/auth";
import { blogValidation } from "./blog.validation";
import { validateRequest } from "../../middleware/validateRequest";

const router = Router();

router.get("/", asyncHandler(BlogController.getAll));
router.get("/:slug", asyncHandler(BlogController.getBySlug));
router.post("/", protect, authorize("admin", "editor"), blogValidation, validateRequest, asyncHandler(BlogController.create));
router.put("/:id", protect, authorize("admin", "editor"), blogValidation, validateRequest, asyncHandler(BlogController.update));
router.delete("/:id", protect, authorize("admin"), asyncHandler(BlogController.remove));

export default router;
