import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
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
    content: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      trim: true
    },
    tags: {
      type: [String],
      default: []
    },
    metaTitle: {
      type: String,
      trim: true
    },
    metaDescription: {
      type: String,
      trim: true
    },
    published: {
      type: Boolean,
      default: false,
      index: true
    }
  },
  {
    timestamps: true
  }
);

export const Blog = mongoose.model("Blog", blogSchema);
