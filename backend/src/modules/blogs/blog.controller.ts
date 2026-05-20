import { Request, Response } from "express";
import { BlogService } from "./blog.service";
import { sendResponse } from "../../utils/apiResponse";

export class BlogController {
  static async getAll(_req: Request, res: Response): Promise<void> {
    const blogs = await BlogService.getAll();
    sendResponse(res, 200, "Blogs fetched successfully", blogs);
  }

  static async getBySlug(req: Request, res: Response): Promise<void> {
    const { slug } = req.params as { slug: string };
    const blog = await BlogService.getBySlug(slug);
    sendResponse(res, 200, "Blog fetched successfully", blog);
  }

  static async create(req: Request, res: Response): Promise<void> {
    const blog = await BlogService.create(req.body);
    sendResponse(res, 201, "Blog created successfully", blog);
  }

  static async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    const blog = await BlogService.update(id, req.body);
    sendResponse(res, 200, "Blog updated successfully", blog);
  }

  static async remove(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    await BlogService.remove(id);
    sendResponse(res, 200, "Blog deleted successfully");
  }
}
