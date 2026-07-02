/* ============================================================
   Section: Split Comparison
   1 full-width image on top, 2 text panels below.
   ============================================================ */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/motion';

const TRADITIONAL_ITEMS = [
  'Phải dọn tay mỗi ngày',
  'Dễ có mùi hôi khó chịu',
  'Khó kiểm soát vệ sinh & sức khỏe',
  'Mất nhiều thời gian chăm sóc',
];

const HELIPET_ITEMS = [
  'Tự động làm sạch hoàn toàn',
  'Giảm 99.9% mùi hôi với ion bạc',
  'Theo dõi sức khỏe chi tiết qua App',
  'Tiết kiệm thời gian tối đa',
];

export function ComparisonSection() {
  const [imgSrc, setImgSrc] = useState('/images/compare-main.webp');
  const [errorCount, setErrorCount] = useState(0);
  const extensions = ['.png', '.jpg', '.jpeg'];

  const handleImageError = () => {
    if (errorCount < extensions.length) {
      setImgSrc(`/images/compare-main${extensions[errorCount]}`);
      setErrorCount((prev) => prev + 1);
    }
  };

  return (
    <section id="comparison" className="py-24 lg:py-32 bg-secondary-bg dark:bg-[#0a0a0a]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="So sánh"
          title="Tại sao chọn Open Top Pro?"
          subtitle="Sự khác biệt mang tính cách mạng so với phương pháp truyền thống"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto mt-16"
        >
          {/* Top Full-width Landscape Image */}
          <motion.div 
            variants={fadeInUp} 
            className="w-full mb-8 lg:mb-16 relative flex justify-center group"
          >
            <img 
              src={imgSrc} 
              alt="So sánh HeLiPet và Khay truyền thống" 
              className="w-full h-auto object-contain block"
              onError={handleImageError}
              loading="lazy"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Panel: HeLiPet */}
            <motion.div 
              variants={fadeInUp} 
              className="relative p-4 lg:p-8 flex flex-col"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 flex items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-white/5">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                  <Check className="w-6 h-6 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-bold text-heading dark:text-white">HeLiPet Open Top Pro Plus</h3>
              </div>
              
              <ul className="relative z-10 space-y-6">
                {HELIPET_ITEMS.map((item, idx) => (
                  <motion.li key={idx} variants={staggerItem} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-heading dark:text-white font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Panel: Traditional */}
            <motion.div 
              variants={fadeInUp} 
              className="p-4 lg:p-8 flex flex-col md:border-l border-gray-200 dark:border-white/10"
            >
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-white/10">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <X className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-500 dark:text-gray-400">Khay truyền thống</h3>
              </div>
              
              <ul className="space-y-6">
                {TRADITIONAL_ITEMS.map((item, idx) => (
                  <motion.li key={idx} variants={staggerItem} className="flex items-start gap-4">
                    <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-body dark:text-gray-400 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
