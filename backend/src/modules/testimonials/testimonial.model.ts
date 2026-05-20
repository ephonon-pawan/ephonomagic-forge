import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
      trim: true
    },
    company: {
      type: String,
      trim: true
    },
    review: {
      type: String,
      required: true,
      trim: true
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    image: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

export const Testimonial = mongoose.model("Testimonial", testimonialSchema);
