import { Router } from 'express'
import { submitContact, getContacts } from '../controllers/contactController.js'
import { validateContact } from '../middleware/validateContact.js'

const router = Router()

// @route   POST /api/contact
// @desc    Submit a new contact form message
router.post('/', validateContact, submitContact)

// @route   GET /api/contact
// @desc    Get all contact submissions (admin use)
router.get('/', getContacts)

export default router
