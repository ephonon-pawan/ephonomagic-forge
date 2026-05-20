import { body } from "express-validator";

export const blogValidation = [
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("content").trim().notEmpty().withMessage("Content is required"),
  body("thumbnail").optional().isString().withMessage("Thumbnail must be a string"),
  body("tags").optional().isArray().withMessage("Tags must be an array"),
  body("metaTitle").optional().isString().withMessage("Meta title must be a string"),
  body("metaDescription").optional().isString().withMessage("Meta description must be a string"),
  body("published").optional().isBoolean().withMessage("Published must be a boolean")
];
