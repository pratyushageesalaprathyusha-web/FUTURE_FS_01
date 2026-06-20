import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-deep">
      <div className="text-center">
        <div className="font-mono text-accent-cyan text-sm tracking-[0.3em] mb-4">
          BOOTING SYSTEM
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 220 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="h-[3px] bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full mx-auto"
        />
        <div className="mt-4 font-display text-2xl text-text-primary tracking-wide">
          GP<span className="text-accent-violet">.</span>init()
        </div>
      </div>
    </div>
  )
}
