import { Request, Response } from "express";
import { TeamService } from "./team.service";
import { sendResponse } from "../../utils/apiResponse";

export class TeamController {
  static async getAll(_req: Request, res: Response): Promise<void> {
    const members = await TeamService.getAll();
    sendResponse(res, 200, "Team members fetched successfully", members);
  }

  static async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    const member = await TeamService.getById(id);
    sendResponse(res, 200, "Team member fetched successfully", member);
  }

  static async create(req: Request, res: Response): Promise<void> {
    const member = await TeamService.create(req.body);
    sendResponse(res, 201, "Team member created successfully", member);
  }

  static async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    const member = await TeamService.update(id, req.body);
    sendResponse(res, 200, "Team member updated successfully", member);
  }

  static async remove(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    await TeamService.remove(id);
    sendResponse(res, 200, "Team member deleted successfully");
  }
}
