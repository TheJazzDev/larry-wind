'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  type: 'image' | 'video';
  src: string;
}

const galleryItems: GalleryItem[] = [
  // Performance - Groups of students
  {
    id: 1,
    title: 'Student Ensemble',
    description: 'Group performance at ODEYA Center',
    category: 'Performance',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.42.58.jpeg',
  },
  {
    id: 2,
    title: 'Summer Music School',
    description: 'Promotional event showcase',
    category: 'Performance',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.14.jpeg',
  },
  {
    id: 3,
    title: 'Stage Performance',
    description: 'Solo student on stage',
    category: 'Performance',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.23.jpeg',
  },
  {
    id: 4,
    title: 'Saxophone Trio',
    description: 'Three students with saxophones',
    category: 'Performance',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.24 (1).jpeg',
  },
  {
    id: 5,
    title: 'Student Musicians',
    description: 'Group ensemble performance',
    category: 'Performance',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.24 (2).jpeg',
  },
  {
    id: 6,
    title: 'Young Performer',
    description: 'Student performing solo',
    category: 'Performance',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.24 (3).jpeg',
  },
  {
    id: 7,
    title: 'Group Performance',
    description: 'Students night group performance',
    category: 'Performance',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.24.jpeg',
  },
  {
    id: 8,
    title: 'Orchestra on Stage',
    description: 'Group performing on stage',
    category: 'Performance',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.25.jpeg',
  },
  {
    id: 9,
    title: 'Saxophone Section',
    description: 'Student saxophonists performing',
    category: 'Performance',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.25 (1).jpeg',
  },
  {
    id: 10,
    title: 'String Ensemble',
    description: 'Violin section on stage',
    category: 'Performance',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.25 (2).jpeg',
  },
  {
    id: 11,
    title: 'Group Session',
    description: 'Ensemble rehearsal with instructor',
    category: 'Performance',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.25 (3).jpeg',
  },
  {
    id: 12,
    title: 'Stage Ensemble',
    description: 'Group performing on stage',
    category: 'Performance',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.26.jpeg',
  },
  {
    id: 13,
    title: 'Concert Performance',
    description: 'Students performing live',
    category: 'Performance',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.26 (1).jpeg',
  },
  {
    id: 14,
    title: 'Choir Performance',
    description: 'Group vocal and instrument performance',
    category: 'Performance',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.26 (2).jpeg',
  },
  {
    id: 15,
    title: 'Performance Rehearsal',
    description: 'Students with instructor backstage',
    category: 'Performance',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.27.jpeg',
  },

  // Teaching - Single students with instruments
  {
    id: 16,
    title: 'Violin Lesson',
    description: 'Students learning violin technique',
    category: 'Teaching',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.10.jpeg',
  },
  {
    id: 17,
    title: 'Keyboard Training',
    description: 'One-on-one piano instruction',
    category: 'Teaching',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.13.jpeg',
  },
  {
    id: 18,
    title: 'Young Violinist',
    description: 'Young student with violin',
    category: 'Teaching',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.23 (2).jpeg',
  },
  {
    id: 19,
    title: 'Performance Ready',
    description: 'Student prepared for performance',
    category: 'Teaching',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.27 (1).jpeg',
  },
  {
    id: 20,
    title: 'Solo Performer',
    description: 'Student in performance attire',
    category: 'Teaching',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.27 (2).jpeg',
  },
  {
    id: 21,
    title: 'Studio Practice',
    description: 'Student practicing in studio',
    category: 'Teaching',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.27 (3).jpeg',
  },

  // Sales - Instruments only (no people)
  {
    id: 22,
    title: 'Casio Keyboard',
    description: 'Professional Casio CT-X700 keyboard',
    category: 'Sales',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.16.jpeg',
  },
  {
    id: 23,
    title: 'Premium Saxophone',
    description: 'Professional saxophone with case',
    category: 'Sales',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.18.jpeg',
  },
  {
    id: 24,
    title: 'Saxophone Package',
    description: 'Complete saxophone set with accessories',
    category: 'Sales',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.20.jpeg',
  },
  {
    id: 25,
    title: 'Instrument Collection',
    description: 'Various instruments available',
    category: 'Sales',
    type: 'image',
    src: '/assets/WhatsApp Image 2025-11-19 at 06.54.23 (1).jpeg',
  },

  // Videos - All videos in one category
  {
    id: 26,
    title: 'Performance Video 1',
    description: 'Student performance footage',
    category: 'Videos',
    type: 'video',
    src: '/assets/WhatsApp Video 2025-11-19 at 06.46.27.mp4',
  },
  {
    id: 27,
    title: 'Performance Video 2',
    description: 'Live performance clip',
    category: 'Videos',
    type: 'video',
    src: '/assets/WhatsApp Video 2025-11-19 at 06.54.09.mp4',
  },
  {
    id: 28,
    title: 'Performance Video 3',
    description: 'Student showcase video',
    category: 'Videos',
    type: 'video',
    src: '/assets/WhatsApp Video 2025-11-19 at 06.54.11.mp4',
  },
  {
    id: 29,
    title: 'Performance Video 4',
    description: 'Musical performance footage',
    category: 'Videos',
    type: 'video',
    src: '/assets/WhatsApp Video 2025-11-19 at 06.54.22.mp4',
  },
  {
    id: 30,
    title: 'Performance Video 5',
    description: 'Live show video clip',
    category: 'Videos',
    type: 'video',
    src: '/assets/WhatsApp Video 2025-11-19 at 06.54.23 (1).mp4',
  },
  {
    id: 31,
    title: 'Performance Video 6',
    description: 'Student performance recording',
    category: 'Videos',
    type: 'video',
    src: '/assets/WhatsApp Video 2025-11-19 at 06.54.23.mp4',
  },
  {
    id: 32,
    title: 'Performance Video 7',
    description: 'Concert footage',
    category: 'Videos',
    type: 'video',
    src: '/assets/WhatsApp Video 2025-11-19 at 06.54.24.mp4',
  },
  {
    id: 33,
    title: 'Performance Video 8',
    description: 'Musical showcase video',
    category: 'Videos',
    type: 'video',
    src: '/assets/WhatsApp Video 2025-11-19 at 06.54.25.mp4',
  },
  {
    id: 34,
    title: 'Performance Video 9',
    description: 'Live performance recording',
    category: 'Videos',
    type: 'video',
    src: '/assets/WhatsApp Video 2025-11-19 at 06.54.26 (1).mp4',
  },
  {
    id: 35,
    title: 'Performance Video 10',
    description: 'Student concert video',
    category: 'Videos',
    type: 'video',
    src: '/assets/WhatsApp Video 2025-11-19 at 06.54.26.mp4',
  },
  {
    id: 36,
    title: 'Performance Video 11',
    description: 'Final performance footage',
    category: 'Videos',
    type: 'video',
    src: '/assets/WhatsApp Video 2025-11-19 at 06.54.27.mp4',
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [itemsToShow, setItemsToShow] = useState(9); // Show 9 items initially

  const categories = ['All', 'Performance', 'Teaching', 'Sales', 'Videos'];

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const displayedItems = filteredItems.slice(0, itemsToShow);
  const hasMore = itemsToShow < filteredItems.length;

  const loadMore = () => {
    setItemsToShow((prev) => prev + 9);
  };

  // Reset items to show when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setItemsToShow(9);
  };

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
              onClick={() => handleCategoryChange(category)}
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
          {displayedItems.map((item, idx) => (
            <GalleryCard
              key={item.id}
              {...item}
              index={idx}
              isInView={isInView}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 60px -15px rgba(245, 158, 11, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
              className="bg-amber-500 text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors duration-300"
            >
              Load More ({filteredItems.length - itemsToShow} remaining)
            </motion.button>
          </motion.div>
        )}

        {/* Modal for viewing full-size media */}
        {selectedItem && (
          <MediaModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </div>
    </section>
  );
}

function GalleryCard({
  title,
  description,
  category,
  type,
  src,
  index,
  isInView,
  onClick,
}: GalleryItem & {
  index: number;
  isInView: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: '0 25px 70px -20px rgba(245, 158, 11, 0.4)' }}
      onClick={onClick}
      className="group relative h-80 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl border border-amber-500/30 overflow-hidden cursor-pointer"
    >
      {type === 'image' ? (
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading={index < 3 ? 'eager' : 'lazy'}
          priority={index < 3}
          quality={75}
        />
      ) : (
        <video
          src={src}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          muted
          loop
          playsInline
          preload="none"
        />
      )}

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />

      {type === 'video' && (
        <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold">
          ▶ VIDEO
        </div>
      )}

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

function MediaModal({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full cursor-default"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors text-xl font-bold"
        >
          ✕ Close
        </button>

        <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-xl overflow-hidden">
          {item.type === 'image' ? (
            <div className="relative w-full" style={{ paddingBottom: '75%' }}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                quality={85}
                priority
              />
            </div>
          ) : (
            <video
              src={item.src}
              controls
              autoPlay
              className="w-full max-h-[80vh] object-contain"
              preload="metadata"
            />
          )}

          <div className="p-6 bg-black/50">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-amber-500 text-black rounded-full mb-2">
              {item.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
