/* ============================================================
   UI: Skeleton
   Loading placeholder with shimmer animation.
   ============================================================ */

import { cn } from '@/utils/cn';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export function Skeleton({
  className,
  variant = 'rectangular',
  width,
  height,
}: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-gray-200 dark:bg-gray-800',
        variant === 'circular' && 'rounded-full',
        variant === 'text' && 'rounded h-4',
        variant === 'rectangular' && 'rounded-2xl',
        className,
      )}
      style={{ width, height }}
      role="status"
      aria-label="Đang tải..."
    />
  );
}

/** Card skeleton for loading states */
export function CardSkeleton() {
  return (
    <div className="p-8 rounded-2xl border border-border dark:border-gray-800">
      <Skeleton className="w-14 h-14 rounded-2xl mb-6" />
      <Skeleton className="h-6 w-3/4 mb-3" variant="text" />
      <Skeleton className="h-4 w-full mb-2" variant="text" />
      <Skeleton className="h-4 w-5/6" variant="text" />
    </div>
  );
}
