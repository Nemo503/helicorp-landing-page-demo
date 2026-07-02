/* ============================================================
   Zod Validation Schemas
   ============================================================ */

import { z } from 'zod';

/** Registration form validation schema */
export const registrationSchema = z.object({
  name: z
    .string()
    .min(2, 'Vui lòng nhập họ tên (ít nhất 2 ký tự)')
    .max(100, 'Họ tên không được quá 100 ký tự'),
  phone: z
    .string()
    .regex(
      /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/,
      'Số điện thoại không hợp lệ (VD: 0912345678)',
    ),
  email: z
    .string()
    .email('Email không hợp lệ')
    .max(255, 'Email không được quá 255 ký tự'),
  address: z
    .string()
    .min(5, 'Vui lòng nhập địa chỉ (ít nhất 5 ký tự)')
    .max(500, 'Địa chỉ không được quá 500 ký tự'),
  message: z
    .string()
    .max(2000, 'Nội dung không được quá 2000 ký tự')
    .optional()
    .or(z.literal('')),
});

/** Inferred type from the schema */
export type RegistrationFormValues = z.infer<typeof registrationSchema>;
