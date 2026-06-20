import { motion } from 'framer-motion'
import { FiDownload, FiEye } from 'react-icons/fi'

export default function Resume() {
  return (
    <section id="resume" className="section-pad relative">
      <div className="max-w-4xl mx-auto text-center">
        <p className="eyebrow mb-3">07 // resume</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          View My <span className="grad-text">Resume</span>
        </h2>
        <p className="text-text-muted max-w-xl mx-auto mb-10">
          Get the full picture of my education, skills, and project work in one document.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-10 max-w-md mx-auto"
        >
          <div className="w-20 h-24 mx-auto rounded-md bg-gradient-to-br from-accent-violet/30 to-accent-cyan/20 border border-white/10 flex items-center justify-center font-mono text-xs text-text-muted mb-6">
            PDF
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full glass hover:border-accent-cyan/50 transition-colors"
            >
              <FiEye /> View Resume
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan text-bg-deep font-semibold hover:shadow-glow transition-shadow"
            >
              <FiDownload /> Download PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
