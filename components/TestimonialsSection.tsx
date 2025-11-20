'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

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
  {
    name: 'Oluwaseun D.',
    role: 'ABRSM Grade 7 Student',
    text: 'I passed my ABRSM Grade 7 with distinction! LarryWind\'s exam preparation was thorough and confidence-building.',
    rating: 5,
  },
  {
    name: 'Amara N.',
    role: 'Violin Student',
    text: 'My daughter has grown so much as a musician. LarryWind is patient and knows exactly how to motivate young students.',
    rating: 5,
  },
  {
    name: 'Femi K.',
    role: 'Drum Student',
    text: 'The best investment I made in my music career. Her teaching methods are effective and enjoyable.',
    rating: 5,
  },
  {
    name: 'Grace I.',
    role: 'Trinity College Student',
    text: 'Successfully passed Trinity College London exam with merit! Excellent preparation and guidance throughout.',
    rating: 5,
  },
  {
    name: 'Ibrahim S.',
    role: 'Saxophone & Theory',
    text: 'Learning both saxophone and theory from LarryWind has been incredible. She makes complex concepts easy to grasp.',
    rating: 5,
  },
  {
    name: 'Blessing O.',
    role: 'Piano & ABRSM',
    text: 'My son passed ABRSM Grade 5 with flying colors! Her structured approach to exam preparation is outstanding.',
    rating: 5,
  },
  {
    name: 'Michael E.',
    role: 'Adult Beginner',
    text: 'Started learning saxophone at 35, and LarryWind made it possible. Never too late to start!',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isDragging, setIsDragging] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === 'left'
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={ref} className="py-24 bg-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          What Students Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-center mb-12"
        >
          Hear from our students and parents about their learning journey
        </motion.p>

        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-amber-500 hover:bg-amber-400 text-black p-3 rounded-full shadow-lg transition-all duration-300 hidden md:block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-amber-500 hover:bg-amber-400 text-black p-3 rounded-full shadow-lg transition-all duration-300 hidden md:block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>

          {/* Scrollable Container */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
          >
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                {...testimonial}
                index={idx}
                isInView={isInView}
                isDragging={isDragging}
              />
            ))}
          </div>

          {/* Scroll Hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center text-gray-500 text-sm mt-4 md:hidden"
          >
            👆 Swipe to see more reviews
          </motion.p>
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
  isDragging,
}: {
  name: string;
  role: string;
  text: string;
  rating: number;
  index: number;
  isInView: boolean;
  isDragging: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: Math.min(index * 0.1, 0.8), duration: 0.6 }}
      whileHover={!isDragging ? { y: -5, borderColor: 'rgba(245, 158, 11, 0.6)' } : {}}
      className="flex-shrink-0 w-[350px] md:w-[400px] p-8 bg-white/10 border border-amber-500/30 rounded-xl transition-all duration-300 snap-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: Math.min(index * 0.1 + 0.3, 1), duration: 0.5 }}
        className="flex gap-1 mb-4"
      >
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: Math.min(index * 0.1 + 0.4 + i * 0.1, 1.2), duration: 0.3 }}
              className="text-amber-400 text-xl"
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
