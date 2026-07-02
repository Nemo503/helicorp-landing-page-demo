/* ============================================================
   Hook: useMagneticEffect
   Creates a magnetic hover effect — element follows cursor.
   ============================================================ */

'use client';

import { useRef, useCallback } from 'react';

interface MagneticOptions {
  /** How strong the pull is (default: 0.3) */
  strength?: number;
  /** Maximum distance in pixels to activate (default: 100) */
  maxDistance?: number;
}

export function useMagneticEffect(options: MagneticOptions = {}) {
  const { strength = 0.3, maxDistance = 100 } = options;
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < maxDistance) {
        el.style.transform = `translate(${distX * strength}px, ${distY * strength}px)`;
      }
    },
    [strength, maxDistance],
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0px, 0px)';
    el.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    // Reset transition after animation
    setTimeout(() => {
      if (el) el.style.transition = '';
    }, 400);
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
