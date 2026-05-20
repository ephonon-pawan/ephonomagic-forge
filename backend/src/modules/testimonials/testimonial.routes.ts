import { Router } from "express";
import { TestimonialController } from "./testimonial.controller";
import { asyncHandler } from "../../utils/asyncHandler";
import { authorize, protect } from "../../middleware/auth";

const router = Router();

router.get("/", asyncHandler(TestimonialController.getAll));
router.get("/:id", asyncHandler(TestimonialController.getById));
router.post("/", protect, authorize("admin", "editor"), asyncHandler(TestimonialController.create));
router.put("/:id", protect, authorize("admin", "editor"), asyncHandler(TestimonialController.update));
router.delete("/:id", protect, authorize("admin"), asyncHandler(TestimonialController.remove));

export default router;
