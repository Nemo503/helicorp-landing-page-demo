/* ============================================================
   Section: Registration Form
   React Hook Form + Zod validation + POST Webhook + Success Modal
   ============================================================ */

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Truck, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { registrationSchema, type RegistrationFormValues } from '@/lib/validations';
import { submitRegistration } from '@/lib/webhook';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/utils/cn';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/motion';

export function RegistrationSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      address: '',
      message: '',
    },
  });

  const onSubmit = async (data: RegistrationFormValues) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await submitRegistration(data);
      if (res.success) {
        trackEvent('form_submit', 'registration_success');
        setIsSuccessModalOpen(true);
        reset();
      } else {
        setServerError(res.message);
      }
    } catch {
      setServerError('Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="registration"
      className="py-24 lg:py-32 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Ưu đãi giới hạn"
          title="Đăng ký tư vấn ngay hôm nay"
          subtitle="Nhận ngay voucher giảm giá 1.000.000đ và bộ quà tặng phụ kiện cao cấp trị giá 500.000đ"
        />

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Form Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="lg:col-span-7 bg-secondary-bg dark:bg-gray-900 p-8 sm:p-10 rounded-3xl border border-border dark:border-gray-800 shadow-sm"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              {serverError && (
                <div className="p-4 rounded-xl bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400 text-sm">
                  {serverError}
                </div>
              )}

              {/* Name field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-heading dark:text-gray-200 mb-2"
                >
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Nguyễn Văn A"
                  {...register('name')}
                  className={cn(
                    'w-full px-4 py-3.5 rounded-xl bg-white dark:bg-gray-950 border text-heading dark:text-white',
                    'placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200',
                    errors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-border dark:border-gray-800 focus:ring-primary',
                  )}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Grid 2 cols: Phone & Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-heading dark:text-gray-200 mb-2"
                  >
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="0912345678"
                    {...register('phone')}
                    className={cn(
                      'w-full px-4 py-3.5 rounded-xl bg-white dark:bg-gray-950 border text-heading dark:text-white',
                      'placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200',
                      errors.phone
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border dark:border-gray-800 focus:ring-primary',
                    )}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-500 font-medium">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-heading dark:text-gray-200 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    {...register('email')}
                    className={cn(
                      'w-full px-4 py-3.5 rounded-xl bg-white dark:bg-gray-950 border text-heading dark:text-white',
                      'placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200',
                      errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border dark:border-gray-800 focus:ring-primary',
                    )}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500 font-medium">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold text-heading dark:text-gray-200 mb-2"
                >
                  Địa chỉ giao hàng / tư vấn <span className="text-red-500">*</span>
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Số nhà, Tên đường, Phường/Xã, Quận/Huyện, Tỉnh/TP"
                  {...register('address')}
                  className={cn(
                    'w-full px-4 py-3.5 rounded-xl bg-white dark:bg-gray-950 border text-heading dark:text-white',
                    'placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200',
                    errors.address
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-border dark:border-gray-800 focus:ring-primary',
                  )}
                />
                {errors.address && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-heading dark:text-gray-200 mb-2"
                >
                  Ghi chú (Tùy chọn)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Ví dụ: Cần tư vấn thêm về loại cát sử dụng..."
                  {...register('message')}
                  className={cn(
                    'w-full px-4 py-3.5 rounded-xl bg-white dark:bg-gray-950 border text-heading dark:text-white',
                    'placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 resize-none',
                    errors.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-border dark:border-gray-800 focus:ring-primary',
                  )}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                size="lg"
                fullWidth
                loading={isSubmitting}
                icon={<Send className="w-5 h-5" />}
                iconPosition="right"
                className="mt-4"
              >
                Gửi yêu cầu tư vấn
              </Button>

              <p className="text-xs text-center text-body dark:text-gray-400 mt-3">
                Thông tin của bạn luôn được bảo mật 100% theo chính sách HeLiCorp.
              </p>
            </form>
          </motion.div>

          {/* Guarantee / Benefits Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="lg:col-span-5 space-y-6"
          >
            <motion.div
              variants={staggerItem}
              className="p-6 rounded-2xl bg-secondary-bg dark:bg-gray-900 border border-border dark:border-gray-800 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-heading dark:text-white mb-1">
                  Bảo hành chính hãng 24 tháng
                </h4>
                <p className="text-sm text-body dark:text-gray-400 leading-relaxed">
                  Đổi mới 1:1 trong 30 ngày đầu nếu có lỗi từ nhà sản xuất. Hỗ trợ kỹ thuật trọn đời.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="p-6 rounded-2xl bg-secondary-bg dark:bg-gray-900 border border-border dark:border-gray-800 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-heading dark:text-white mb-1">
                  Miễn phí giao hàng toàn quốc
                </h4>
                <p className="text-sm text-body dark:text-gray-400 leading-relaxed">
                  Giao hàng nhanh trong 24h tại TP.HCM & Hà Nội. Kiểm tra hàng trước khi thanh toán.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="p-6 rounded-2xl bg-secondary-bg dark:bg-gray-900 border border-border dark:border-gray-800 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-heading dark:text-white mb-1">
                  Tư vấn tận tâm 24/7
                </h4>
                <p className="text-sm text-body dark:text-gray-400 leading-relaxed">
                  Chuyên viên HeLiCorp sẽ gọi lại trong vòng 15 phút để giải đáp mọi thắc mắc của bạn.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        size="md"
      >
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-heading dark:text-white mb-2">
            Đăng ký thành công!
          </h3>
          <p className="text-body dark:text-gray-400 leading-relaxed mb-6">
            Cảm ơn bạn đã quan tâm đến HeLiPet Open Top Pro Plus. Chuyên viên tư vấn của chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất qua số điện thoại đã cung cấp.
          </p>
          <Button
            onClick={() => setIsSuccessModalOpen(false)}
            size="md"
            fullWidth
          >
            Hoàn tất
          </Button>
        </div>
      </Modal>
    </section>
  );
}
