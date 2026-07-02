/* ============================================================
   Section: Specifications
   Premium specification table with alternating rows.
   ============================================================ */

'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SPECIFICATIONS } from '@/constants/product';
import { cn } from '@/utils/cn';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/motion';

export function SpecificationsSection() {
  return (
    <section
      id="specifications"
      className="py-24 lg:py-32 bg-white dark:bg-gray-950"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Thông số"
          title="Thông số kỹ thuật"
          subtitle="Chi tiết kỹ thuật của HeLiPet Open Top Pro Plus"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-2xl border border-border dark:border-gray-800 overflow-hidden">
            {SPECIFICATIONS.map((spec, index) => {
              const Icon = spec.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className={cn(
                    'flex items-center gap-4 px-6 py-5',
                    isEven
                      ? 'bg-white dark:bg-gray-950'
                      : 'bg-secondary-bg dark:bg-gray-900',
                    index < SPECIFICATIONS.length - 1 &&
                      'border-b border-border dark:border-gray-800',
                  )}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="flex-1 text-body dark:text-gray-400 font-medium">
                    {spec.label}
                  </span>
                  <span className="text-heading dark:text-white font-semibold text-right">
                    {spec.value}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
