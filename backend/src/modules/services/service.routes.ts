import { Router } from "express";
import { ServiceController } from "./service.controller";
import { asyncHandler } from "../../utils/asyncHandler";
import { authorize, protect } from "../../middleware/auth";

const router = Router();

router.get("/", asyncHandler(ServiceController.getAll));
router.get("/:id", asyncHandler(ServiceController.getById));
router.post("/", protect, authorize("admin", "editor"), asyncHandler(ServiceController.create));
router.put("/:id", protect, authorize("admin", "editor"), asyncHandler(ServiceController.update));
router.delete("/:id", protect, authorize("admin"), asyncHandler(ServiceController.remove));

export default router;
