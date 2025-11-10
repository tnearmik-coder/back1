import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import photoController from "../controllers/photoController.js";
import { upload } from "../uploads/upload.js";
export const photoRouter = express.Router()

photoRouter.post("/upload/:destId", isAuthenticated, upload.single('photo'), photoController.uploadPhoto)
photoRouter.delete("/:photoId", isAuthenticated, photoController.deletePhoto)