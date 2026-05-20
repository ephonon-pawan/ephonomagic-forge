import { Router } from "express";
import { ProjectController } from "./project.controller";
import { asyncHandler } from "../../utils/asyncHandler";
import { authorize, protect } from "../../middleware/auth";
import { projectValidation } from "./project.validation";
import { validateRequest } from "../../middleware/validateRequest";

const router = Router();

router.get("/", asyncHandler(ProjectController.getAll));
router.get("/:id", asyncHandler(ProjectController.getById));
router.post("/", protect, authorize("admin", "editor"), projectValidation, validateRequest, asyncHandler(ProjectController.create));
router.put("/:id", protect, authorize("admin", "editor"), projectValidation, validateRequest, asyncHandler(ProjectController.update));
router.delete("/:id", protect, authorize("admin"), asyncHandler(ProjectController.remove));

export default router;
