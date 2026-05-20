import { Homepage } from "./homepage.model";

export class HomepageService {
  static async getContent() {
    let homepage = await Homepage.findOne();

    if (!homepage) {
      homepage = await Homepage.create({});
    }

    return homepage;
  }

  static async updateContent(payload: Record<string, unknown>) {
    const homepage = await Homepage.findOneAndUpdate({}, payload, {
      new: true,
      upsert: true,
      runValidators: true
    });

    return homepage;
  }
}
