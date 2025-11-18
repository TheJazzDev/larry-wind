'use client';

import { motion } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-amber-500/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
        >
          LarryWind
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="hidden md:flex gap-8"
        >
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#instruments">Instruments</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors duration-300"
        >
          Book Now
        </motion.button>
      </nav>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
    >
      {children}
    </motion.a>
  );
}
