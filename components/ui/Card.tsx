/* ============================================================
   UI: Card
   Premium card with hover lift, shadow, icon slot.
   ============================================================ */

'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { hoverLift, staggerItem } from '@/utils/motion';
import type { LucideIcon } from 'lucide-react';

interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  className?: string;
  iconClassName?: string;
  index?: number;
}

export function Card({
  icon: Icon,
  title,
  description,
  badge,
  className,
  iconClassName,
}: CardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={hoverLift}
      className={cn(
        'group relative p-8 rounded-[24px]',
        'bg-white dark:bg-[#232326]',
        'border border-border/30 dark:border-white/5',
        'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)]',
        'transition-all duration-500 ease-out',
        className,
      )}
    >
      {badge && (
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
          {badge}
        </span>
      )}

      {Icon && (
        <div
          className={cn(
            'w-14 h-14 rounded-2xl flex items-center justify-center mb-6',
            'bg-primary/10 text-primary',
            'group-hover:bg-primary group-hover:text-white',
            'transition-colors duration-300',
            iconClassName,
          )}
        >
          <Icon className="w-7 h-7" strokeWidth={1.5} />
        </div>
      )}

      <h3 className="text-xl font-bold text-heading dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-body dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
