import express from 'express'
import isAuthenticated from '../middleware/isAuthenticated.js'
import journalController from '../controllers/journalController.js'
export const journalRouter = express.Router()

journalRouter.post("/:destId", isAuthenticated, journalController.createJournal)
journalRouter.patch("/update/:id", isAuthenticated, journalController.updateJournal)
journalRouter.delete("/:id", isAuthenticated, journalController.deleteJournal)
journalRouter.get("/all/:destId", isAuthenticated, journalController.getJournals)
journalRouter.get("/:id", isAuthenticated, journalController.getJournal)