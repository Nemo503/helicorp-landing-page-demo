/* ============================================================
   UI: Button
   Premium button with ripple, magnetic effect, and variants.
   ============================================================ */

'use client';

import { forwardRef, useState, useCallback } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';
import { tapScale } from '@/utils/motion';

interface RippleState {
  x: number;
  y: number;
  id: number;
}

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-hover shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:scale-[1.02]',
  secondary:
    'bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-border/50 text-heading hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm hover:-translate-y-1 hover:scale-[1.01]',
  ghost:
    'bg-transparent text-heading hover:bg-secondary-bg dark:text-white dark:hover:bg-gray-800',
  outline:
    'bg-transparent text-primary border border-primary/50 hover:bg-primary hover:text-white',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-base',
  lg: 'px-9 py-4.5 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      loading = false,
      className,
      children,
      onClick,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [ripples, setRipples] = useState<RippleState[]>([]);

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        // Ripple effect
        const rect = e.currentTarget.getBoundingClientRect();
        const ripple: RippleState = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          id: Date.now(),
        };
        setRipples((prev) => [...prev, ripple]);
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
        }, 600);

        // Scroll to href if provided
        if (href) {
          e.preventDefault();
          const target = document.querySelector(href);
          target?.scrollIntoView({ behavior: 'smooth' });
        }

        onClick?.(e);
      },
      [href, onClick],
    );

    return (
      <motion.button
        ref={ref}
        whileTap={tapScale}
        className={cn(
          'relative overflow-hidden rounded-full font-semibold',
          'transition-all duration-300 ease-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'inline-flex items-center justify-center gap-2 cursor-pointer',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className,
        )}
        onClick={handleClick}
        disabled={disabled || loading}
        {...props}
      >
        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-white/30 animate-ripple pointer-events-none"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
            }}
          />
        ))}

        {/* Loading spinner */}
        {loading && (
          <svg
            className="animate-spin h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              className="opacity-25"
            />
            <path
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              fill="currentColor"
              className="opacity-75"
            />
          </svg>
        )}

        {/* Icon + Text */}
        {!loading && icon && iconPosition === 'left' && icon}
        {children && <span>{children}</span>}
        {!loading && icon && iconPosition === 'right' && icon}
      </motion.button>
    );
  },
);

Button.displayName = 'Button';
