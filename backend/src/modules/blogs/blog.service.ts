import { Blog } from "./blog.model";
import { ApiError } from "../../utils/ApiError";
import { generateSlug } from "../../utils/generateSlug";

export class BlogService {
  static async getAll() {
    return Blog.find().sort({ createdAt: -1 });
  }

  static async getBySlug(slug: string) {
    const blog = await Blog.findOne({ slug });

    if (!blog) {
      throw new ApiError(404, "Blog not found");
    }

    return blog;
  }

  static async create(payload: Record<string, unknown>) {
    return Blog.create({
      ...payload,
      slug: generateSlug(String(payload.title))
    });
  }

  static async update(id: string, payload: Record<string, unknown>) {
    const blog = await Blog.findByIdAndUpdate(
      id,
      {
        ...payload,
        ...(payload.title ? { slug: generateSlug(String(payload.title)) } : {})
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!blog) {
      throw new ApiError(404, "Blog not found");
    }

    return blog;
  }

  static async remove(id: string) {
    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      throw new ApiError(404, "Blog not found");
    }
  }
}
