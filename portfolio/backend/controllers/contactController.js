import Contact from '../models/Contact.js'
import { sendContactEmail } from '../utils/sendEmail.js'

export async function submitContact(req, res, next) {
  try {
    const { name, email, subject, message } = req.body

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      ip: req.ip
    })

    try {
      await sendContactEmail({ name, email, subject, message })
    } catch (emailErr) {
      console.error('Email send failed (message still saved):', emailErr.message)
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully. Thank you for reaching out!',
      data: { id: contact._id }
    })
  } catch (err) {
    next(err)
  }
}

export async function getContacts(req, res, next) {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json({ success: true, count: contacts.length, data: contacts })
  } catch (err) {
    next(err)
  }
}
