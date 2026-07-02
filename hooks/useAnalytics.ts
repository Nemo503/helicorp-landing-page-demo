/* ============================================================
   Hook: useAnalytics
   Tracks scroll depth on mount.
   ============================================================ */

'use client';

import { useEffect } from 'react';
import { trackScrollDepth, trackEvent } from '@/lib/analytics';
import type { AnalyticsEventType } from '@/types';

/**
 * Initialize analytics tracking.
 * Call once in the root layout or page component.
 */
export function useAnalytics(): void {
  useEffect(() => {
    const cleanup = trackScrollDepth();
    return cleanup;
  }, []);
}

/**
 * Track a single event. Thin wrapper for use in components.
 */
export function useTrackEvent() {
  return (
    type: AnalyticsEventType,
    label: string,
    value?: string | number,
  ) => {
    trackEvent(type, label, value);
  };
}
