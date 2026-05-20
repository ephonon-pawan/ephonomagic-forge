import { Testimonial } from "./testimonial.model";
import { ApiError } from "../../utils/ApiError";

export class TestimonialService {
  static async getAll() {
    return Testimonial.find().sort({ createdAt: -1 });
  }

  static async getById(id: string) {
    const testimonial = await Testimonial.findById(id);

    if (!testimonial) {
      throw new ApiError(404, "Testimonial not found");
    }

    return testimonial;
  }

  static async create(payload: Record<string, unknown>) {
    return Testimonial.create(payload);
  }

  static async update(id: string, payload: Record<string, unknown>) {
    const testimonial = await Testimonial.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true
    });

    if (!testimonial) {
      throw new ApiError(404, "Testimonial not found");
    }

    return testimonial;
  }

  static async remove(id: string) {
    const testimonial = await Testimonial.findByIdAndDelete(id);

    if (!testimonial) {
      throw new ApiError(404, "Testimonial not found");
    }
  }
}
