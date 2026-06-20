import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="max-w-4xl mx-auto">
        <p className="eyebrow mb-3">03 // experience</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
          Experience &amp; <span className="grad-text">Internships</span>
        </h2>

        <div className="relative pl-10">
          <div className="absolute left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-violet via-accent-cyan to-transparent" />
          <div className="space-y-10">
            {experience.map((e, i) => (
              <motion.div
                key={e.org}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-10 top-1 w-7 h-7 rounded-full glass flex items-center justify-center border border-accent-cyan/50">
                  <FiBriefcase className="text-accent-cyan" size={13} />
                </div>
                <div className="glass rounded-xl p-6 hover:border-accent-violet/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display font-semibold text-lg">{e.role}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-accent-violet/15 text-accent-cyan">
                      {e.period}
                    </span>
                  </div>
                  <p className="text-text-muted font-medium mb-3">{e.org}</p>
                  <ul className="space-y-1.5">
                    {e.points.map((p) => (
                      <li key={p} className="text-sm text-text-muted flex gap-2">
                        <span className="text-accent-cyan mt-1.5">▹</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
