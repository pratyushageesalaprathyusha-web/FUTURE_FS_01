const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(req, res, next) {
  const { name, email, subject, message } = req.body
  const errors = {}

  if (!name || !name.trim()) errors.name = 'Name is required'
  else if (name.trim().length > 100) errors.name = 'Name is too long'

  if (!email || !email.trim()) errors.email = 'Email is required'
  else if (!emailRegex.test(email.trim())) errors.email = 'Email is invalid'

  if (!subject || !subject.trim()) errors.subject = 'Subject is required'
  else if (subject.trim().length > 150) errors.subject = 'Subject is too long'

  if (!message || !message.trim()) errors.message = 'Message is required'
  else if (message.trim().length < 10) errors.message = 'Message is too short'
  else if (message.trim().length > 2000) errors.message = 'Message is too long'

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, message: 'Validation failed', errors })
  }

  next()
}
