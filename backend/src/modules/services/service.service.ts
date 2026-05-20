import { ServiceItem } from "./service.model";
import { ApiError } from "../../utils/ApiError";

export class ServiceCmsService {
  static async getAll() {
    return ServiceItem.find().sort({ createdAt: -1 });
  }

  static async getById(id: string) {
    const service = await ServiceItem.findById(id);

    if (!service) {
      throw new ApiError(404, "Service not found");
    }

    return service;
  }

  static async create(payload: Record<string, unknown>) {
    return ServiceItem.create(payload);
  }

  static async update(id: string, payload: Record<string, unknown>) {
    const service = await ServiceItem.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true
    });

    if (!service) {
      throw new ApiError(404, "Service not found");
    }

    return service;
  }

  static async remove(id: string) {
    const service = await ServiceItem.findByIdAndDelete(id);

    if (!service) {
      throw new ApiError(404, "Service not found");
    }
  }
}
