import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
import blogRoutes from "../modules/blogs/blog.routes";
import contactRoutes from "../modules/contacts/contact.routes";
import homepageRoutes from "../modules/homepage/homepage.routes";
import mediaRoutes from "../modules/media/media.routes";
import projectRoutes from "../modules/projects/project.routes";
import serviceRoutes from "../modules/services/service.routes";
import teamRoutes from "../modules/team/team.routes";
import testimonialRoutes from "../modules/testimonials/testimonial.routes";

const router = Router();

router.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running"
  });
});

router.use("/auth", authRoutes);
router.use("/projects", projectRoutes);
router.use("/blogs", blogRoutes);
router.use("/services", serviceRoutes);
router.use("/homepage", homepageRoutes);
router.use("/testimonials", testimonialRoutes);
router.use("/team", teamRoutes);
router.use("/contact", contactRoutes);
router.use("/media", mediaRoutes);

export default router;
