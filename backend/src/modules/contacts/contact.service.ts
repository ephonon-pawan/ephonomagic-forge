import { ContactLead } from "./contact.model";

export class ContactService {
  static async createLead(payload: Record<string, unknown>) {
    return ContactLead.create(payload);
  }

  static async getLeads() {
    return ContactLead.find().sort({ createdAt: -1 });
  }
}
