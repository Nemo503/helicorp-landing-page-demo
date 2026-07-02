/* ============================================================
   Webhook Utility
   POST form data to an external endpoint.
   ============================================================ */

import type { RegistrationFormData } from '@/types';

/** Webhook endpoint — configure in environment variable */
const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL ?? '';

interface WebhookResponse {
  success: boolean;
  message: string;
}

/**
 * Send registration form data via POST.
 * Falls back to console logging when no webhook URL is configured.
 */
export async function submitRegistration(
  data: RegistrationFormData,
): Promise<WebhookResponse> {
  // If no webhook URL configured, simulate success
  if (!WEBHOOK_URL) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Webhook] No URL configured. Data:', data);
    }
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return { success: true, message: 'Đăng ký thành công!' };
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        source: 'helipet-landing-page',
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return { success: true, message: 'Đăng ký thành công!' };
  } catch (error) {
    console.error('[Webhook] Error:', error);
    return {
      success: false,
      message: 'Có lỗi xảy ra. Vui lòng thử lại sau.',
    };
  }
}
