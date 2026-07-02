/* ============================================================
   Section: Hero
   Premium fullscreen hero with noise texture, depth, and floating product.
   ============================================================ */

'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, ShieldCheck, Cpu, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { HERO_CONTENT } from '@/constants/site';
import { fadeInUp, fadeIn } from '@/utils/motion';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export function HeroSection() {
  function handleCtaClick(label: string) {
    trackEvent('cta_click', label);
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF9F7] dark:bg-[#0F0F10]"
    >
      {/* Background with radial gradient and noise texture for depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft radial glow centering around the product area */}
        <div className="absolute top-0 right-0 w-[80%] h-[100%] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-80 blur-2xl" />
        
        {/* Very light noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay dark:opacity-[0.03] dark:mix-blend-color-dodge" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
          }} 
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full pt-24 pb-32 lg:pt-0 lg:pb-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Text Column (50%) */}
          <div className="order-2 lg:order-1 w-full lg:w-[50%] z-10 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mb-4"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                Sản phẩm mới 2025
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-bold text-heading dark:text-white leading-[1.05] tracking-tight"
            >
              {HERO_CONTENT.headline.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {line.includes('BOSS') ? (
                    <>
                      {line.split('BOSS')[0]}
                      <span className="text-primary">BOSS</span>
                      {line.split('BOSS')[1]}
                    </>
                  ) : line.includes('SEN') ? (
                    <>
                      {line.split('SEN')[0]}
                      <span className="text-primary">SEN</span>
                      {line.split('SEN')[1]}
                    </>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.15 }}
              className="mt-5 text-lg md:text-xl text-body dark:text-gray-400 leading-relaxed max-w-md"
            >
              {HERO_CONTENT.subtitle}
            </motion.p>

            {/* Compact CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button
                href="#features"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                onClick={() => handleCtaClick('hero_explore')}
                className="px-6 rounded-full"
              >
                {HERO_CONTENT.ctaPrimary}
              </Button>
              <Button
                href="#registration"
                variant="outline"
                size="md"
                onClick={() => handleCtaClick('hero_register')}
                className="px-6 rounded-full border-border/80 dark:border-gray-700 hover:border-primary text-heading dark:text-white"
              >
                {HERO_CONTENT.ctaSecondary}
              </Button>
            </motion.div>
          </div>

          {/* Image Column (50%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="order-1 lg:order-2 w-full lg:w-[50%] relative flex justify-center lg:justify-end"
          >
            {/* Interactive Image Wrapper */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ rotateZ: -3, scale: 1.02 }}
              className="relative w-full max-w-[450px] sm:max-w-[500px] lg:max-w-[750px] xl:max-w-[850px] cursor-grab active:cursor-grabbing z-20"
            >
              {/* Soft radial glow tightly behind the product */}
              <div className="absolute inset-0 bg-primary/15 dark:bg-primary/20 rounded-full blur-[70px] scale-90" aria-hidden="true" />
              
              <Image
                src="/images/1.png"
                alt="HeLiPet Open Top Pro Plus — Máy dọn vệ sinh mèo tự động"
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] scale-100 lg:scale-125 origin-center"
                priority
                width={850}
                height={850}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 850px"
              />

              {/* Floating Badges */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute top-[15%] left-0 sm:-left-[10%] md:-left-[15%] lg:-left-[20%] z-30 bg-white/80 dark:bg-[#232326]/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-white/40 dark:border-white/5 flex items-center gap-1.5"
              >
                <span className="text-primary font-bold">✓</span>
                <span className="text-xs font-semibold text-heading dark:text-white whitespace-nowrap">AI Smart Sensor</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute top-[35%] right-0 sm:-right-[10%] md:-right-[15%] lg:-right-[20%] z-30 bg-white/80 dark:bg-[#232326]/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-white/40 dark:border-white/5 flex items-center gap-1.5"
              >
                <span className="text-primary font-bold">✓</span>
                <span className="text-xs font-semibold text-heading dark:text-white whitespace-nowrap">Ultra Quiet</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-[25%] right-0 sm:-right-[5%] md:-right-[10%] lg:-right-[15%] z-30 bg-white/80 dark:bg-[#232326]/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-white/40 dark:border-white/5 flex items-center gap-1.5"
              >
                <span className="text-primary font-bold">✓</span>
                <span className="text-xs font-semibold text-heading dark:text-white whitespace-nowrap">Odor Control</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute bottom-[10%] left-0 sm:-left-[5%] lg:-left-[10%] z-30 bg-white/80 dark:bg-[#232326]/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-white/40 dark:border-white/5 flex items-center gap-1.5"
              >
                <span className="text-primary font-bold">✓</span>
                <span className="text-xs font-semibold text-heading dark:text-white whitespace-nowrap">24 Months Warranty</span>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="hidden lg:block absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => {
            document.querySelector('#problems')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-1.5 text-body dark:text-gray-400 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-2"
          aria-label="Cuộn xuống để xem thêm"
        >
          <span className="text-[10px] font-semibold tracking-widest uppercase">Khám phá</span>
          <ChevronDown className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}
