'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const galleryImages = [
  {
    id: 1,
    title: 'Live Performance',
    description: 'Jazz night at Muson Center',
    category: 'Performance',
  },
  {
    id: 2,
    title: 'Teaching Session',
    description: 'One-on-one saxophone lesson',
    category: 'Teaching',
  },
  {
    id: 3,
    title: 'Studio Recording',
    description: 'Recording original compositions',
    category: 'Studio',
  },
  {
    id: 4,
    title: 'Group Ensemble',
    description: 'Leading student orchestra',
    category: 'Teaching',
  },
  {
    id: 5,
    title: 'Festival Appearance',
    description: 'Lagos International Music Festival',
    category: 'Performance',
  },
  {
    id: 6,
    title: 'Workshop',
    description: 'Music theory masterclass',
    category: 'Teaching',
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Performance', 'Teaching', 'Studio'];

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" ref={ref} className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Moments from performances, teaching sessions, and studio recordings
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-amber-500 text-black'
                  : 'bg-white/5 text-gray-300 border border-amber-500/30 hover:border-amber-500/60'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, idx) => (
            <GalleryCard key={image.id} {...image} index={idx} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  title,
  description,
  category,
  index,
  isInView,
}: {
  title: string;
  description: string;
  category: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: '0 25px 70px -20px rgba(245, 158, 11, 0.4)' }}
      className="group relative h-80 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl border border-amber-500/30 overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="text-7xl opacity-50 group-hover:opacity-30 transition-opacity duration-300"
        >
          📸
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent"
      >
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-amber-500 text-black rounded-full mb-2">
          {category}
        </span>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </motion.div>
    </motion.div>
  );
}
