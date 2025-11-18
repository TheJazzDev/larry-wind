'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
              LarryWind
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional music instructor dedicated to nurturing musical talent in Lagos and beyond.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#gallery">Gallery</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Instruments</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm hover:text-amber-400 transition-colors cursor-pointer">
                Saxophone
              </li>
              <li className="text-gray-400 text-sm hover:text-amber-400 transition-colors cursor-pointer">
                Piano
              </li>
              <li className="text-gray-400 text-sm hover:text-amber-400 transition-colors cursor-pointer">
                Drums
              </li>
              <li className="text-gray-400 text-sm hover:text-amber-400 transition-colors cursor-pointer">
                Violin
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <div className="text-gray-400 text-sm">
                <span className="text-amber-400">Email:</span>
                <br />
                contact@larrywind.com
              </div>
              <div className="text-gray-400 text-sm">
                <span className="text-amber-400">Location:</span>
                <br />
                Lagos, Nigeria
              </div>
              <div className="flex gap-4 mt-4">
                <SocialIcon icon="🎵" label="Instagram" />
                <SocialIcon icon="📘" label="Facebook" />
                <SocialIcon icon="🐦" label="Twitter" />
                <SocialIcon icon="▶️" label="YouTube" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LarryWind Music Instruction. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Crafted with dedication to musical excellence.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <li>
      <motion.a
        href={href}
        whileHover={{ x: 5 }}
        className="text-gray-400 text-sm hover:text-amber-400 transition-colors inline-block"
      >
        {children}
      </motion.a>
    </li>
  );
}

function SocialIcon({ icon, label }: { icon: string; label: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 bg-white/5 border border-amber-500/30 rounded-lg flex items-center justify-center hover:bg-amber-500/20 hover:border-amber-500 transition-all duration-300"
      aria-label={label}
    >
      <span className="text-lg">{icon}</span>
    </motion.button>
  );
}
