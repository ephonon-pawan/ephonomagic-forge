import { TeamMember } from "./team.model";
import { ApiError } from "../../utils/ApiError";

export class TeamService {
  static async getAll() {
    return TeamMember.find().sort({ createdAt: -1 });
  }

  static async getById(id: string) {
    const member = await TeamMember.findById(id);

    if (!member) {
      throw new ApiError(404, "Team member not found");
    }

    return member;
  }

  static async create(payload: Record<string, unknown>) {
    return TeamMember.create(payload);
  }

  static async update(id: string, payload: Record<string, unknown>) {
    const member = await TeamMember.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true
    });

    if (!member) {
      throw new ApiError(404, "Team member not found");
    }

    return member;
  }

  static async remove(id: string) {
    const member = await TeamMember.findByIdAndDelete(id);

    if (!member) {
      throw new ApiError(404, "Team member not found");
    }
  }
}
