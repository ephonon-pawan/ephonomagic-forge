import { Router } from "express";
import { TeamController } from "./team.controller";
import { asyncHandler } from "../../utils/asyncHandler";
import { authorize, protect } from "../../middleware/auth";

const router = Router();

router.get("/", asyncHandler(TeamController.getAll));
router.get("/:id", asyncHandler(TeamController.getById));
router.post("/", protect, authorize("admin", "editor"), asyncHandler(TeamController.create));
router.put("/:id", protect, authorize("admin", "editor"), asyncHandler(TeamController.update));
router.delete("/:id", protect, authorize("admin"), asyncHandler(TeamController.remove));

export default router;
