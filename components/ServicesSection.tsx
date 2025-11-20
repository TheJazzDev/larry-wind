'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: '🎷',
    title: 'Saxophone',
    description:
      'From beginner fundamentals to advanced jazz improvisation. Master technique and musical expression.',
  },
  {
    icon: '🎹',
    title: 'Piano',
    description:
      'Classical, contemporary, and jazz piano. Build strong foundational skills and music literacy.',
  },
  {
    icon: '🥁',
    title: 'Drums',
    description:
      'Rhythm mastery, coordination, and advanced drumming techniques across multiple genres.',
  },
  {
    icon: '🎻',
    title: 'Violin',
    description:
      'Classical elegance and proper technique. Develop bow control and melodic sensitivity.',
  },
  {
    icon: '📚',
    title: 'Music Theory',
    description:
      'Complete music education from basics to advanced harmony, composition, and analysis.',
  },
  {
    icon: '🏆',
    title: 'Exam Preparation',
    description:
      'Professional preparation for Trinity College London and ABRSM practical exams. Proven track record with students achieving excellent results.',
  },
  {
    icon: '🎵',
    title: 'Ensemble Playing',
    description:
      'Learn to perform with others, collaboration skills, and group dynamics.',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id='services' ref={ref} className='py-24 px-6 bg-white/5'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-4'>
            Specialized Instruction
          </h2>
          <p className='text-gray-400 text-center mb-16 max-w-2xl mx-auto'>
            Comprehensive music education tailored to your goals and skill level
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              {...service}
              index={idx}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  index,
  isInView,
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 20px -15px rgba(245, 158, 11, 0.3)',
      }}
      className='group p-4 pl:g-6 bg-white/5 border border-amber-500/30 rounded-xl hover:bg-white/10 hover:border-amber-500/60 transition-all duration-500'>
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className='text-5xl mb-4'>
        {icon}
      </motion.div>
      <h3 className='text-xl font-bold mb-3'>{title}</h3>
      <p className='text-gray-400 leading-relaxed'>{description}</p>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className='mt-4 flex items-center gap-2 text-amber-400 text-sm font-semibold'>
        Learn More <span>→</span>
      </motion.div>
    </motion.div>
  );
}
