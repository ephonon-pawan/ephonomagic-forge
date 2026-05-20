import { body } from "express-validator";

export const projectValidation = [
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("description").trim().notEmpty().withMessage("Description is required"),
  body("category").trim().notEmpty().withMessage("Category is required"),
  body("thumbnail").optional().isString().withMessage("Thumbnail must be a string"),
  body("technologies").optional().isArray().withMessage("Technologies must be an array"),
  body("githubUrl").optional().isURL().withMessage("GitHub URL must be valid"),
  body("liveUrl").optional().isURL().withMessage("Live URL must be valid"),
  body("featured").optional().isBoolean().withMessage("Featured must be a boolean")
];
