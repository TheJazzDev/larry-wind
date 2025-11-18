'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional Excellence
              <span className="block text-amber-400 mt-2">In Every Note</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              LarryWind is a passionate saxophonist and dedicated music educator based in Lagos,
              Nigeria. With over 15 years of professional experience, she combines technical
              expertise with inspiring teaching methodology.
            </p>
            <ul className="space-y-4">
              <ListItem text="Certified music instructor with advanced degrees" delay={0.2} isInView={isInView} />
              <ListItem text="Performed at major venues and festivals across Nigeria and beyond" delay={0.3} isInView={isInView} />
              <ListItem text="Personalized lesson plans adapted to each student's goals" delay={0.4} isInView={isInView} />
              <ListItem text="Patient, encouraging approach that builds confidence" delay={0.5} isInView={isInView} />
              <ListItem text="Flexible scheduling for working professionals and students" delay={0.6} isInView={isInView} />
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="relative h-96 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl border border-amber-500/30 flex items-center justify-center overflow-hidden"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-center"
            >
              <div className="text-7xl mb-4">🎷</div>
              <p className="text-gray-300">
                Professional saxophonist & music educator
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ListItem({ text, delay, isInView }: { text: string; delay: number; isInView: boolean }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay, duration: 0.5 }}
      className="flex gap-3 items-start"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: delay + 0.2, duration: 0.3 }}
        className="text-amber-400 font-bold text-xl mt-1"
      >
        ✓
      </motion.span>
      <span className="text-gray-300">{text}</span>
    </motion.li>
  );
}
