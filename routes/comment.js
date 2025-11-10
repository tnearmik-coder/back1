import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import commentController from "../controllers/commentController.js";
export const commentRouter = express.Router()

commentRouter.post("/", isAuthenticated, commentController.createComment)
commentRouter.delete("/:id", isAuthenticated, commentController.deleteComment)
commentRouter.patch("/update/:id", isAuthenticated, commentController.updateComment)
commentRouter.get("/:targetType/:targetId", commentController.getComments)