import { Request, Response } from "express";
import { ContactService } from "./contact.service";
import { sendResponse } from "../../utils/apiResponse";

export class ContactController {
  static async create(req: Request, res: Response): Promise<void> {
    const lead = await ContactService.createLead(req.body);
    sendResponse(res, 201, "Contact inquiry submitted successfully", lead);
  }

  static async getAll(_req: Request, res: Response): Promise<void> {
    const leads = await ContactService.getLeads();
    sendResponse(res, 200, "Contact leads fetched successfully", leads);
  }
}
