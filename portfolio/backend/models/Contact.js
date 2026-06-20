import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, required: true, trim: true, maxlength: 150 },
    message: { type: String, required: true, trim: true, maxlength: 2000 },
    ip: { type: String },
    status: { type: String, enum: ['new', 'read', 'archived'], default: 'new' }
  },
  { timestamps: true }
)

export default mongoose.model('Contact', contactSchema)
