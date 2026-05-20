import { Request, Response } from "express";
import { ServiceCmsService } from "./service.service";
import { sendResponse } from "../../utils/apiResponse";

export class ServiceController {
  static async getAll(_req: Request, res: Response): Promise<void> {
    const services = await ServiceCmsService.getAll();
    sendResponse(res, 200, "Services fetched successfully", services);
  }

  static async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    const service = await ServiceCmsService.getById(id);
    sendResponse(res, 200, "Service fetched successfully", service);
  }

  static async create(req: Request, res: Response): Promise<void> {
    const service = await ServiceCmsService.create(req.body);
    sendResponse(res, 201, "Service created successfully", service);
  }

  static async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    const service = await ServiceCmsService.update(id, req.body);
    sendResponse(res, 200, "Service updated successfully", service);
  }

  static async remove(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    await ServiceCmsService.remove(id);
    sendResponse(res, 200, "Service deleted successfully");
  }
}
