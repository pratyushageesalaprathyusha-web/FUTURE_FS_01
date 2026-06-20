import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow mb-3">05 // certifications</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
          Certifications
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass rounded-xl p-6 relative overflow-hidden hover:border-accent-gold/40 transition-colors"
            >
              <FiAward className="text-accent-gold mb-4" size={26} />
              <h3 className="font-display font-semibold mb-1">{c.name}</h3>
              <p className="text-sm text-text-muted">{c.issuer}</p>
              <p className="font-mono text-[10px] text-accent-cyan mt-3">{c.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
