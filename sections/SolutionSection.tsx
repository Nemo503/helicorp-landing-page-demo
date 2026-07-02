/* ============================================================
   Section: Feature Story 1
   Split screen: Text left, Image right (Auto Cleaning).
   ============================================================ */

'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/motion';
import { cn } from '@/utils/cn';

export function SolutionSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white dark:bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="max-w-xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 ring-1 ring-inset ring-primary/20">
                Làm sạch tự động
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-heading dark:text-white tracking-tight mb-6">
                Tự động làm sạch <br className="hidden sm:block" />
                sau mỗi lần sử dụng
              </h2>
              <p className="text-lg text-body dark:text-gray-400 leading-relaxed mb-8">
                Hệ thống sàng lọc thông minh tự động tách biệt chất thải và cát sạch, giữ cho không gian luôn vệ sinh mà bạn không cần phải động tay vào.
              </p>
            </motion.div>

            <motion.ul variants={staggerContainer} className="space-y-5">
              {[
                'Cảm biến nhận diện khi mèo rời khỏi',
                'Tự động sàng cát',
                'Chất thải được đưa vào ngăn chứa kín'
              ].map((bullet, idx) => (
                <motion.li key={idx} variants={staggerItem} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-heading dark:text-gray-200 font-medium">{bullet}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="relative"
          >
            {/* Glow background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 dark:bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative aspect-square lg:aspect-[4/5] flex items-center justify-center group">
              <img
                src="/images/feature-auto.webp"
                alt="Tự động làm sạch"
                className="w-full h-full object-cover relative z-10 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] dark:[mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute bottom-8 right-8 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-4 shadow-xl"
              >
                <div className="text-sm font-bold text-heading dark:text-white">0 phút</div>
                <div className="text-xs text-body dark:text-gray-400">Dọn dẹp mỗi ngày</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
