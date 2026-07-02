/* ============================================================
   Framer Motion — Reusable Animation Variants
   ============================================================ */

import type { Variants, Transition, TargetAndTransition } from 'framer-motion';

/** Default spring transition for smooth animations */
const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
};

/** Default ease transition - Upgraded to a premium 'Apple-like' cubic-bezier */
const easeTransition: Transition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
};

/* --------------------------------
   Fade variants
   -------------------------------- */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: easeTransition,
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: easeTransition,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: easeTransition,
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: easeTransition,
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: easeTransition,
  },
};

/* --------------------------------
   Scale variants
   -------------------------------- */

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
};

export const scaleInSoft: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: easeTransition,
  },
};

/* --------------------------------
   Stagger container
   -------------------------------- */

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/* --------------------------------
   Stagger item (child)
   -------------------------------- */

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: easeTransition,
  },
};

/* --------------------------------
   Slide variants
   -------------------------------- */

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: easeTransition,
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: easeTransition,
  },
};

/* --------------------------------
   Hover effects
   -------------------------------- */

export const hoverLift: TargetAndTransition = {
  y: -12,
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
};

export const hoverScale: TargetAndTransition = {
  scale: 1.04,
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
};

export const tapScale: TargetAndTransition = {
  scale: 0.97,
};

/* --------------------------------
   Reveal (for scroll-triggered)
   -------------------------------- */

export const revealFromBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/* --------------------------------
   Line draw (for timeline)
   -------------------------------- */

export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: 'easeInOut' },
      opacity: { duration: 0.3 },
    },
  },
};

/* --------------------------------
   Navbar
   -------------------------------- */

export const navbarVariants: Variants = {
  top: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    backdropFilter: 'blur(0px)',
  },
  scrolled: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(12px)',
  },
};

/* --------------------------------
   Modal
   -------------------------------- */

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springTransition,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.2 },
  },
};

/* --------------------------------
   Accordion
   -------------------------------- */

export const accordionContent: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
  },
};
