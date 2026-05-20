import { Request, Response } from "express";
import { MediaService } from "./media.service";
import { sendResponse } from "../../utils/apiResponse";

export class MediaController {
  static async upload(req: Request, res: Response): Promise<void> {
    const result = await MediaService.uploadImage(req.file);
    sendResponse(res, 201, "Image uploaded successfully", result);
  }
}
