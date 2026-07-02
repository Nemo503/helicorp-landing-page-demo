/* ============================================================
   UI: StarRating
   5-star rating display component.
   ============================================================ */

import { Star } from 'lucide-react';
import { cn } from '@/utils/cn';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md';
  className?: string;
}

export function StarRating({
  rating,
  size = 'md',
  className,
}: StarRatingProps) {
  const sizeClass = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <div
      className={cn('flex items-center gap-0.5', className)}
      role="img"
      aria-label={`${rating} trên 5 sao`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            sizeClass,
            i < rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700',
          )}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}
