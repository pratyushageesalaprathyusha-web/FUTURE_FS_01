import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters'
    return e
  }

  function handleChange(ev) {
    const { name, value } = ev.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(ev) {
    ev.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setSubmitting(true)
    try {
      await axios.post(`${API_BASE}/api/contact`, form)
      toast.success("Message sent! I'll get back to you soon.")
      setForm(initialForm)
    } catch (err) {
      toast.error(
        err?.response?.data?.message || 'Something went wrong. Please try again.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-pad relative bg-bg-panel/30">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
        <div>
          <p className="eyebrow mb-3">08 // contact</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Let&apos;s <span className="grad-text">Connect</span>
          </h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Have an opportunity, project, or just want to talk AI and data engineering?
            My inbox is open.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full glass flex items-center justify-center text-accent-cyan">
                <FiMail size={16} />
              </span>
              <span className="text-sm">{profile.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full glass flex items-center justify-center text-accent-cyan">
                <FiMapPin size={16} />
              </span>
              <span className="text-sm">{profile.location}</span>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          noValidate
          className="glass rounded-2xl p-6 md:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-text-muted mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-cyan/60"
                placeholder="Your name"
              />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-text-muted mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-cyan/60"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block font-mono text-xs uppercase tracking-wider text-text-muted mb-2">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-cyan/60"
              placeholder="What's this about?"
            />
            {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-text-muted mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-cyan/60 resize-none"
              placeholder="Tell me about your project or opportunity..."
            />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan text-bg-deep font-semibold disabled:opacity-60 hover:shadow-glow transition-shadow"
          >
            <FiSend /> {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
