/* ============================================================
   UI: ImagePlaceholder
   Elegant placeholder for missing product images.
   Shows gradient background with product info.
   ============================================================ */

import { ImageIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ImagePlaceholderProps {
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide';
}

const aspectStyles = {
  square: 'aspect-square',
  video: 'aspect-video',
  wide: 'aspect-[4/3]',
};

export function ImagePlaceholder({
  alt,
  className,
  aspectRatio = 'wide',
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-2xl',
        'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200',
        'dark:from-gray-800 dark:via-gray-850 dark:to-gray-900',
        'flex flex-col items-center justify-center gap-3',
        'border border-border dark:border-gray-700',
        aspectStyles[aspectRatio],
        className,
      )}
      role="img"
      aria-label={alt}
    >
      <ImageIcon
        className="w-12 h-12 text-gray-300 dark:text-gray-600"
        strokeWidth={1}
      />
      <span className="text-sm text-gray-400 dark:text-gray-500 text-center px-4 max-w-[200px]">
        {alt}
      </span>
    </div>
  );
}
