import { Request, Response } from "express";
import { HomepageService } from "./homepage.service";
import { sendResponse } from "../../utils/apiResponse";

export class HomepageController {
  static async getContent(_req: Request, res: Response): Promise<void> {
    const content = await HomepageService.getContent();
    sendResponse(res, 200, "Homepage content fetched successfully", content);
  }

  static async updateContent(req: Request, res: Response): Promise<void> {
    const content = await HomepageService.updateContent(req.body);
    sendResponse(res, 200, "Homepage content updated successfully", content);
  }
}
