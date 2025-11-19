'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id='contact' ref={ref} className='py-24 px-6'>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.8 }}
        className='max-w-3xl mx-auto text-center space-y-8 bg-gradient-to-r from-amber-600/20 to-amber-700/20 p-12 rounded-2xl border border-amber-500/30'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='text-4xl md:text-5xl font-bold'>
          Ready to Begin?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='text-xl text-gray-300'>
          Take the first step toward musical excellence. Contact LarryWind today
          to discuss your learning goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
          <motion.a
            href='https://wa.me/2348180911669'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 60px -15px rgba(245, 158, 11, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            className='bg-amber-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors duration-300'>
            Book Free Consultation
          </motion.a>
          <motion.a
            href='mailto:larrywindmusic@gmail.com'
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
            className='border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-block'>
            Email Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
