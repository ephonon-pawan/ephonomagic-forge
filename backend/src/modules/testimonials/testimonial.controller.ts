import { Request, Response } from "express";
import { TestimonialService } from "./testimonial.service";
import { sendResponse } from "../../utils/apiResponse";

export class TestimonialController {
  static async getAll(_req: Request, res: Response): Promise<void> {
    const testimonials = await TestimonialService.getAll();
    sendResponse(res, 200, "Testimonials fetched successfully", testimonials);
  }

  static async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    const testimonial = await TestimonialService.getById(id);
    sendResponse(res, 200, "Testimonial fetched successfully", testimonial);
  }

  static async create(req: Request, res: Response): Promise<void> {
    const testimonial = await TestimonialService.create(req.body);
    sendResponse(res, 201, "Testimonial created successfully", testimonial);
  }

  static async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    const testimonial = await TestimonialService.update(id, req.body);
    sendResponse(res, 200, "Testimonial updated successfully", testimonial);
  }

  static async remove(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    await TestimonialService.remove(id);
    sendResponse(res, 200, "Testimonial deleted successfully");
  }
}
