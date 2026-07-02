/* ============================================================
   Utility: className merger (clsx + tailwind-merge)
   ============================================================ */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes safely.
 * Combines clsx for conditional classes with tailwind-merge
 * to resolve conflicting Tailwind utilities.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
