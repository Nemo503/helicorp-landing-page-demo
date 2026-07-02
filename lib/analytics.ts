/* ============================================================
   Analytics — Event Tracking Utility
   ============================================================ */

import type { AnalyticsEvent, AnalyticsEventType } from '@/types';

/**
 * Track an analytics event.
 * In production, replace the console.log with your preferred
 * analytics service (GA4, Mixpanel, Amplitude, etc.)
 */
export function trackEvent(
  type: AnalyticsEventType,
  label: string,
  value?: string | number,
): void {
  const event: AnalyticsEvent = {
    type,
    label,
    value,
    timestamp: new Date(),
  };

  // Development: log to console
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event);
  }

  // Production: send to analytics service
  // Example: window.gtag?.('event', type, { label, value });
}

/**
 * Track scroll depth milestones (25%, 50%, 75%, 100%).
 * Returns a cleanup function to remove the listener.
 */
export function trackScrollDepth(): () => void {
  const milestones = [25, 50, 75, 100];
  const reached = new Set<number>();

  function handleScroll(): void {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    for (const milestone of milestones) {
      if (scrollPercent >= milestone && !reached.has(milestone)) {
        reached.add(milestone);
        trackEvent('scroll_depth', `${milestone}%`, milestone);
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}
