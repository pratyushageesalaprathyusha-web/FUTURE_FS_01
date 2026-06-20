import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative bg-bg-panel/30">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow mb-3">04 // projects</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
          Featured <span className="grad-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl overflow-hidden group hover:border-accent-cyan/40 transition-colors"
            >
              <div className="h-44 bg-gradient-to-br from-accent-violet/20 via-bg-panel2 to-accent-cyan/10 flex items-center justify-center relative overflow-hidden">
                <span className="font-display text-3xl font-bold text-text-muted/40 group-hover:scale-110 transition-transform">
                  {p.title.split(' ').map((w) => w[0]).join('').slice(0, 3)}
                </span>
                <div className="absolute inset-0 bg-grid opacity-30" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-2">{p.title}</h3>
                <p className="text-sm text-text-muted mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-4 py-2 rounded-full border border-white/15 hover:border-accent-cyan/50 hover:text-accent-cyan transition-colors"
                  >
                    <FiGithub size={14} /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-4 py-2 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan text-bg-deep font-semibold"
                  >
                    <FiExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
