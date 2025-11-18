'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen md:min-h-screen flex items-center pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-screen filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-40 right-10 w-72 h-72 bg-amber-600 rounded-full mix-blend-screen filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-700 rounded-full mix-blend-screen filter blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Master Music With
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent mt-3"
            >
              A Professional Musician
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Elite music instructor in Lagos. Specialize in Saxophone, Piano, Drums,
            Violin & Music Theory.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex gap-4 justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 60px -15px rgba(245, 158, 11, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors duration-300"
            >
              Start Learning Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(245, 158, 11, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="pt-12 grid grid-cols-3 gap-6 max-w-md mx-auto text-sm"
          >
            <Stat number="500+" label="Students Trained" delay={1.0} />
            <Stat number="15+" label="Years Experience" delay={1.1} />
            <Stat number="100%" label="Success Rate" delay={1.2} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label, delay }: { number: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05, borderColor: 'rgb(245, 158, 11)' }}
      className="p-4 bg-white/5 rounded-lg border border-amber-500/30 transition-all duration-300"
    >
      <p className="text-2xl font-bold text-amber-400">{number}</p>
      <p className="text-xs text-gray-400 mt-2">{label}</p>
    </motion.div>
  );
}
