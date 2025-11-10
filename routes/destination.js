import express from 'express'
import destinationController from '../controllers/destinationController.js'
import isAuthenticated from '../middleware/isAuthenticated.js'
export const destinationRouter = express.Router()

destinationRouter.post("/create/:tripId", isAuthenticated, destinationController.createDestination)
destinationRouter.get("/all/:tripId", isAuthenticated, destinationController.getDestinations)
destinationRouter.delete("/:id", isAuthenticated, destinationController.deleteDestination) 
destinationRouter.patch("/update/:id", isAuthenticated, destinationController.updateDestination)
destinationRouter.get("/:id", isAuthenticated, destinationController.getDestination)