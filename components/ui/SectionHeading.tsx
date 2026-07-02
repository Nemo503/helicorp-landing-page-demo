/* ============================================================
   UI: SectionHeading
   Reusable section title with badge, subtitle, and scroll animation.
   ============================================================ */

'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/motion';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
      className={cn(
        'mb-20 md:mb-24',
        align === 'center' && 'text-center',
        className,
      )}
    >
      {badge && (
        <span
          className={cn(
            'inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4',
            dark
              ? 'bg-primary/20 text-primary-light'
              : 'bg-primary/10 text-primary',
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]',
          dark ? 'text-white' : 'text-heading dark:text-white',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg md:text-xl max-w-2xl leading-relaxed',
            align === 'center' && 'mx-auto',
            dark
              ? 'text-gray-300'
              : 'text-body dark:text-gray-400',
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
