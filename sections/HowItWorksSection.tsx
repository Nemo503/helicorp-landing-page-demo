/* ============================================================
   Section: Feature Story 4
   Full width lifestyle image with overlay.
   ============================================================ */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/utils/motion';
import { Button } from '@/components/ui/Button';

export function HowItWorksSection() {
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [imgSrc, setImgSrc] = useState('/images/lifestyle-bg.webp');
  const [errorCount, setErrorCount] = useState(0);
  const extensions = ['.png', '.jpg', '.jpeg'];

  const handleImageError = () => {
    if (errorCount < extensions.length) {
      setImgSrc(`/images/lifestyle-bg${extensions[errorCount]}`);
      setErrorCount((prev) => prev + 1);
    }
  };

  return (
    <section className="relative w-full h-[600px] lg:h-[800px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgSrc}
          alt="Không còn phải dọn cát mỗi ngày"
          className="w-full h-full object-cover object-[95%_center] md:object-[center_20%]"
          loading="lazy"
          onError={handleImageError}
        />
        {/* Gradient Overlay for Text Readability - Stronger on mobile */}
        <div className="absolute inset-0 bg-black/40 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent md:from-black/60 md:via-transparent dark:from-black/90 dark:via-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 lg:px-8 flex flex-col items-center justify-end h-full pb-24 lg:pb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center max-w-3xl"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
          >
            Không còn phải dọn cát <br />
            mỗi ngày.
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 px-4"
          >
            Dành nhiều thời gian hơn để chơi cùng boss, <br />
            thay vì lo việc vệ sinh.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              onClick={() => handleNavClick('#registration')}
              className="bg-white text-black hover:bg-white/90 shadow-xl"
            >
              Đặt hàng ngay
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
