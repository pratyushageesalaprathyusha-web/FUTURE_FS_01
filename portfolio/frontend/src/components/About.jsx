import { motion } from 'framer-motion'
import { FiCpu, FiDatabase, FiCloud, FiCode } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

const pillars = [
  { Icon: FiCpu, label: 'Generative AI' },
  { Icon: FiCloud, label: 'Cloud Architecture' },
  { Icon: FiDatabase, label: 'Data Engineering' },
  { Icon: FiCode, label: 'Full-Stack Development' }
]

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="eyebrow mb-3"
        >
          01 // about
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold mb-8"
        >
          About <span className="grad-text">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl leading-relaxed text-text-muted max-w-3xl"
        >
          {profile.about}
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-accent-cyan/40 hover:-translate-y-1 transition-all"
            >
              <p.Icon className="text-accent-cyan mb-3" size={26} />
              <p className="font-display font-medium">{p.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
