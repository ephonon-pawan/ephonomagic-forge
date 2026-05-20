import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true
    },
    phone: {
      type: String,
      trim: true
    },
    company: {
      type: String,
      trim: true
    },
    message: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      enum: ["new", "in-progress", "closed"],
      default: "new",
      index: true
    }
  },
  {
    timestamps: true
  }
);

export const ContactLead = mongoose.model("ContactLead", contactSchema);
