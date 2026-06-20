import { motion } from 'framer-motion'
import { useState } from 'react'
import { skills } from '../data/portfolioData'

const categories = ['All', ...Array.from(new Set(skills.map((s) => s.category)))]

export default function Skills() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? skills : skills.filter((s) => s.category === active)

  return (
    <section id="skills" className="section-pad relative bg-bg-panel/30">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow mb-3">02 // skills</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
          Technical <span className="grad-text">Skillset</span>
        </h2>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider border transition-colors ${
                active === c
                  ? 'bg-accent-violet/20 border-accent-violet text-accent-cyan'
                  : 'border-white/10 text-text-muted hover:border-white/30'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7">
          {filtered.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
            >
              <div className="flex justify-between mb-1.5 font-mono text-xs">
                <span>{s.name}</span>
                <span className="text-accent-cyan">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
