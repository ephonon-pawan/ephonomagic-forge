import { Router } from "express";
import { ContactController } from "./contact.controller";
import { asyncHandler } from "../../utils/asyncHandler";
import { authorize, protect } from "../../middleware/auth";
import { contactValidation } from "./contact.validation";
import { validateRequest } from "../../middleware/validateRequest";

const router = Router();

router.post("/", contactValidation, validateRequest, asyncHandler(ContactController.create));
router.get("/", protect, authorize("admin", "editor"), asyncHandler(ContactController.getAll));

export default router;
