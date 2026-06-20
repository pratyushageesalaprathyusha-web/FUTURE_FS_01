import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { achievements } from '../data/portfolioData'

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad relative bg-bg-panel/30">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow mb-3">06 // achievements</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
          Achievements
        </h2>

        <div className="space-y-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="glass rounded-xl p-5 flex items-start gap-4 hover:border-accent-violet/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-accent-violet/15 flex items-center justify-center flex-shrink-0">
                <FiStar className="text-accent-violet" size={16} />
              </div>
              <div>
                <h3 className="font-display font-semibold">{a.title}</h3>
                <p className="text-sm text-text-muted mt-1">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
