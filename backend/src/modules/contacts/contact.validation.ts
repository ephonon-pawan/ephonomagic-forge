import { body } from "express-validator";

export const contactValidation = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("phone").optional().isString().withMessage("Phone must be a string"),
  body("company").optional().isString().withMessage("Company must be a string"),
  body("message").trim().notEmpty().withMessage("Message is required")
];
