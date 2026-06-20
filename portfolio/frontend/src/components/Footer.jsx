import { FiGithub, FiLinkedin, FiTwitter, FiCode } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 section-pad !py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="font-display font-semibold text-lg mb-1">
            <span className="text-accent-violet">&lt;</span>
            {profile.initials}
            <span className="text-accent-cyan">/&gt;</span>
          </p>
          <p className="text-xs text-text-muted">Aspiring AI &amp; Data Engineer</p>
        </div>

        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-text-muted hover:text-accent-cyan transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          {[
            { Icon: FiGithub, href: profile.social.github },
            { Icon: FiLinkedin, href: profile.social.linkedin },
            { Icon: FiTwitter, href: profile.social.twitter },
            { Icon: FiCode, href: profile.social.leetcode }
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-text-muted hover:text-accent-cyan transition-colors"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-[11px] text-text-muted mt-10 font-mono">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  )
}
