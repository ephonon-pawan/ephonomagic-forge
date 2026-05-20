import { Router } from "express";
import { AuthController } from "./auth.controller";
import { asyncHandler } from "../../utils/asyncHandler";
import { validateRequest } from "../../middleware/validateRequest";
import { loginValidation, registerValidation } from "./auth.validation";
import { authorize, protect } from "../../middleware/auth";

const router = Router();

router.post(
  "/register",
  protect,
  authorize("admin"),
  registerValidation,
  validateRequest,
  asyncHandler(AuthController.register)
);
router.post("/login", loginValidation, validateRequest, asyncHandler(AuthController.login));
router.post("/logout", protect, asyncHandler(AuthController.logout));
router.post("/refresh", asyncHandler(AuthController.refresh));
router.get("/profile", protect, asyncHandler(AuthController.profile));

export default router;
