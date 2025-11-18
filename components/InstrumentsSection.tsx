'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const instruments = [
  {
    icon: '🎷',
    name: 'Saxophones',
    description:
      'Alto, tenor, soprano, and baritone saxophones from leading brands. Professional and student models available.',
    price: 'From ₦150,000',
  },
  {
    icon: '🎹',
    name: 'Pianos & Keyboards',
    description:
      'Acoustic pianos, digital pianos, and electronic keyboards. Full range from beginner to professional.',
    price: 'From ₦80,000',
  },
  {
    icon: '🥁',
    name: 'Drum Kits',
    description:
      'Complete drum sets, practice pads, cymbals, and percussion instruments. Quality brands for all levels.',
    price: 'From ₦120,000',
  },
  {
    icon: '🎻',
    name: 'String Instruments',
    description:
      'Violins, violas, cellos, and acoustic guitars. Handcrafted and factory models with accessories.',
    price: 'From ₦45,000',
  },
  {
    icon: '🎺',
    name: 'Brass Instruments',
    description:
      'Trumpets, trombones, French horns, and tubas. Student and professional grade instruments.',
    price: 'From ₦95,000',
  },
  {
    icon: '🎸',
    name: 'Electric Guitars',
    description:
      'Electric guitars, bass guitars, amplifiers, and effects pedals. Complete setups for rock and jazz.',
    price: 'From ₦65,000',
  },
  {
    icon: '🎤',
    name: 'Audio Equipment',
    description:
      'Microphones, mixers, studio monitors, and recording gear. Professional sound equipment.',
    price: 'From ₦25,000',
  },
  {
    icon: '🎼',
    name: 'Accessories',
    description:
      'Sheet music, stands, cases, strings, reeds, and maintenance supplies. Everything you need.',
    price: 'From ₦2,000',
  },
];

export default function InstrumentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="instruments" ref={ref} className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Musical Instruments
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Quality instruments for musicians of all levels. From student models
            to professional equipment, we have everything you need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instruments.map((instrument, idx) => (
            <InstrumentCard
              key={idx}
              {...instrument}
              index={idx}
              isInView={isInView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Looking for something specific? We can help you find the perfect
            instrument.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors duration-300"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function InstrumentCard({
  icon,
  name,
  description,
  price,
  index,
  isInView,
}: {
  icon: string;
  name: string;
  description: string;
  price: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, boxShadow: '0 20px 60px -15px rgba(245, 158, 11, 0.3)' }}
      className="group p-6 bg-white/5 border border-amber-500/30 rounded-xl hover:bg-white/10 hover:border-amber-500/60 transition-all duration-500"
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className="text-5xl mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-amber-400 font-semibold text-sm">{price}</span>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="flex items-center gap-1 text-amber-400 text-xs font-semibold"
        >
          View <span>→</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
