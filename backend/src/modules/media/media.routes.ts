import { Router } from "express";
import { MediaController } from "./media.controller";
import { asyncHandler } from "../../utils/asyncHandler";
import { authorize, protect } from "../../middleware/auth";
import { upload } from "../../middleware/upload";

const router = Router();

router.post(
  "/upload",
  protect,
  authorize("admin", "editor"),
  upload.single("image"),
  asyncHandler(MediaController.upload)
);

export default router;
