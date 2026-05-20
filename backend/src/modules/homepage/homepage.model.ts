import mongoose from "mongoose";

const statisticSchema = new mongoose.Schema(
  {
    label: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true }
  },
  { _id: false }
);

const homepageSchema = new mongoose.Schema(
  {
    heroSection: {
      heading: { type: String, default: "" },
      subheading: { type: String, default: "" },
      backgroundImage: { type: String, default: "" },
      primaryButtonText: { type: String, default: "" },
      primaryButtonUrl: { type: String, default: "" }
    },
    statistics: {
      type: [statisticSchema],
      default: []
    },
    ctaSection: {
      heading: { type: String, default: "" },
      description: { type: String, default: "" },
      buttonText: { type: String, default: "" },
      buttonUrl: { type: String, default: "" }
    },
    aboutPreview: {
      heading: { type: String, default: "" },
      description: { type: String, default: "" },
      image: { type: String, default: "" }
    }
  },
  {
    timestamps: true
  }
);

export const Homepage = mongoose.model("Homepage", homepageSchema);
