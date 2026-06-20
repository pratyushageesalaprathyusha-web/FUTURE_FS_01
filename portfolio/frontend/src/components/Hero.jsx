import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiCode, FiDownload, FiMail } from 'react-icons/fi'
import { profile, stats } from '../data/portfolioData'

function useTypewriter(words, speed = 70, pause = 1400) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setIndex((i) => i + 1)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.taglineRoles)

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-grid overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/0 via-bg-deep/30 to-bg-deep pointer-events-none" />

      <div className="section-pad w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10">
        {/* Left: terminal card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-4">profile.compile() // status: online</p>

          <div className="glass rounded-2xl p-6 md:p-8 font-mono text-sm shadow-glow">
            <div className="flex gap-1.5 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
            </div>
            <p className="text-text-muted">$ whoami</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-1 mb-3 leading-tight">
              {profile.name}
            </h1>
            <p className="text-text-muted">$ role --current</p>
            <p className="text-xl md:text-2xl mt-1 mb-4 grad-text font-semibold">
              {typed}
              <span className="animate-blink text-accent-cyan">_</span>
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-lg md:text-xl font-display font-bold text-accent-cyan">
                    {s.value}{s.suffix}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan text-bg-deep font-semibold hover:shadow-glow transition-shadow"
            >
              <FiDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:border-accent-cyan/60 transition-colors"
            >
              <FiMail /> Contact Me
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            {[
              { Icon: FiGithub, href: profile.social.github, label: 'GitHub' },
              { Icon: FiLinkedin, href: profile.social.linkedin, label: 'LinkedIn' },
              { Icon: FiTwitter, href: profile.social.twitter, label: 'Twitter' },
              { Icon: FiCode, href: profile.social.leetcode, label: 'LeetCode' }
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/50 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: profile image placeholder with floating ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto animate-floaty">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-violet via-accent-cyan to-accent-gold opacity-30 blur-2xl" />
            <div className="relative w-full h-full rounded-full glass border-2 border-accent-violet/40 flex items-center justify-center overflow-hidden">
              <span className="font-display text-7xl font-bold grad-text">{profile.initials}</span>
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute left-0 right-0 h-1/3 bg-gradient-to-b from-transparent via-accent-cyan/20 to-transparent animate-scan" />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 glass rounded-full px-4 py-2 font-mono text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Open to work
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-text-muted"
      >
        scroll ↓
      </motion.div>
    </section>
  )
}
