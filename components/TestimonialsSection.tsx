'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Chioma A.',
    role: 'Piano Student',
    text: 'LarryWind transformed my piano journey. Patient, knowledgeable, and genuinely passionate about teaching.',
    rating: 5,
  },
  {
    name: 'Tunde O.',
    role: 'Saxophone Student',
    text: 'Best music teacher I could ask for. Her jazz improvisation lessons changed everything for me.',
    rating: 5,
  },
  {
    name: 'Zainab M.',
    role: 'Music Theory Student',
    text: 'Made music theory actually fun and understandable. Highly recommend for serious learners.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          What Students Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} index={idx} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  role,
  text,
  rating,
  index,
  isInView,
}: {
  name: string;
  role: string;
  text: string;
  rating: number;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -5, borderColor: 'rgba(245, 158, 11, 0.6)' }}
      className="p-8 bg-white/10 border border-amber-500/30 rounded-xl transition-all duration-300"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
        className="flex gap-1 mb-4"
      >
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: index * 0.15 + 0.4 + i * 0.1, duration: 0.3 }}
              className="text-amber-400"
            >
              ⭐
            </motion.span>
          ))}
      </motion.div>
      <p className="text-gray-300 mb-6 leading-relaxed italic">"{text}"</p>
      <div>
        <p className="font-bold text-white">{name}</p>
        <p className="text-sm text-amber-400">{role}</p>
      </div>
    </motion.div>
  );
}
