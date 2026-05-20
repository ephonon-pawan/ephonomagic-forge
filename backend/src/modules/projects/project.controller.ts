import { Request, Response } from "express";
import { ProjectService } from "./project.service";
import { sendResponse } from "../../utils/apiResponse";

export class ProjectController {
  static async getAll(_req: Request, res: Response): Promise<void> {
    const projects = await ProjectService.getAll();
    sendResponse(res, 200, "Projects fetched successfully", projects);
  }

  static async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    const project = await ProjectService.getById(id);
    sendResponse(res, 200, "Project fetched successfully", project);
  }

  static async create(req: Request, res: Response): Promise<void> {
    const project = await ProjectService.create(req.body);
    sendResponse(res, 201, "Project created successfully", project);
  }

  static async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    const project = await ProjectService.update(id, req.body);
    sendResponse(res, 200, "Project updated successfully", project);
  }

  static async remove(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    await ProjectService.remove(id);
    sendResponse(res, 200, "Project deleted successfully");
  }
}
