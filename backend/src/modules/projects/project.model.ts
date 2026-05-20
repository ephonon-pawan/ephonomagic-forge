import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    thumbnail: {
      type: String,
      trim: true
    },
    technologies: {
      type: [String],
      default: []
    },
    category: {
      type: String,
      required: true,
      trim: true
    },
    githubUrl: {
      type: String,
      trim: true
    },
    liveUrl: {
      type: String,
      trim: true
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export const Project = mongoose.model("Project", projectSchema);
