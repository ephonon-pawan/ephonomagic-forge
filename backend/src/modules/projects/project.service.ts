import { Project } from "./project.model";
import { ApiError } from "../../utils/ApiError";
import { generateSlug } from "../../utils/generateSlug";

export class ProjectService {
  static async getAll() {
    return Project.find().sort({ createdAt: -1 });
  }

  static async getById(id: string) {
    const project = await Project.findById(id);

    if (!project) {
      throw new ApiError(404, "Project not found");
    }

    return project;
  }

  static async create(payload: Record<string, unknown>) {
    const project = await Project.create({
      ...payload,
      slug: generateSlug(String(payload.title))
    });

    return project;
  }

  static async update(id: string, payload: Record<string, unknown>) {
    const nextPayload = {
      ...payload,
      ...(payload.title ? { slug: generateSlug(String(payload.title)) } : {})
    };

    const project = await Project.findByIdAndUpdate(id, nextPayload, {
      new: true,
      runValidators: true
    });

    if (!project) {
      throw new ApiError(404, "Project not found");
    }

    return project;
  }

  static async remove(id: string) {
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      throw new ApiError(404, "Project not found");
    }
  }
}
