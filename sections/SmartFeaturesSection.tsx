/* ============================================================
   Section: App Control & Smart Features
   ============================================================ */

'use client';

import { motion } from 'framer-motion';
import { Shield, Sparkles, Smartphone, BarChart3, BellRing, Settings2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeInUp, staggerContainer, staggerItem, scaleInSoft } from '@/utils/motion';
import Image from 'next/image';

export function SmartFeaturesSection() {
  return (
    <>
      {/* SECTION 3: APP CONTROL STORY */}
      <section className="py-24 lg:py-32 bg-white dark:bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: App Lifestyle Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={scaleInSoft}
              className="relative order-2 lg:order-1 flex justify-center w-full lg:w-[130%] lg:-ml-[30%]"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
              
              {/* Landscape Image */}
              <div className="relative z-10 w-full aspect-video group">
                <Image 
                  src="/images/app-smart.webp" 
                  alt="HeLiPet App Smart Connection" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
              className="max-w-xl lg:max-w-none mx-auto lg:mx-0 order-1 lg:order-2"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 ring-1 ring-inset ring-primary/20">
                  HeLiPet App
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-heading dark:text-white tracking-tight mb-6">
                  Kiểm soát mọi thứ <br className="hidden sm:block" />
                  ngay trên điện thoại
                </h2>
                <p className="text-lg text-body dark:text-gray-400 leading-relaxed mb-8">
                  Ứng dụng HeLiPet giúp bạn theo dõi tình trạng khay vệ sinh và sức khỏe của boss mọi lúc mọi nơi.
                </p>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: BarChart3, title: 'Theo dõi sức khỏe', desc: 'Ghi nhận số lần và thời gian sử dụng' },
                  { icon: BellRing, title: 'Thông báo', desc: 'Nhắc nhở thay cát và đổ rác' },
                  { icon: Smartphone, title: 'Điều khiển từ xa', desc: 'Dọn dẹp chỉ với một chạm' },
                  { icon: Settings2, title: 'Tùy chỉnh', desc: 'Cài đặt thời gian chờ và chế độ ngủ' },
                ].map((item, idx) => (
                  <motion.div key={idx} variants={staggerItem} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary-bg dark:bg-[#1a1a1c] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-heading dark:text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-body dark:text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SMART FEATURES SUMMARY */}
      <section className="py-24 lg:py-32 bg-secondary-bg dark:bg-[#111]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Tóm tắt"
            title="Đỉnh cao công nghệ"
            subtitle="Ba yếu tố cốt lõi tạo nên sự hoàn hảo của HeLiPet Open Top Pro Plus"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16"
          >
            {/* Feature 1 */}
            <motion.div variants={fadeInUp} className="group flex flex-col items-center text-center">
              <div className="w-full aspect-square relative mb-8 [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)]">
                <Image src="/images/feature-auto.webp" alt="Auto Cleaning" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-heading dark:text-white mb-4">Auto Cleaning</h3>
              <p className="text-body dark:text-gray-400 leading-relaxed max-w-sm">
                Hệ thống làm sạch tự động, tách chất thải chuẩn xác mà không gây lãng phí cát.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeInUp} className="group flex flex-col items-center text-center">
              <div className="w-full aspect-square relative mb-8 [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)]">
                <Image src="/images/feature-safety.webp" alt="Safety Sensor" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-heading dark:text-white mb-4">Safety Sensor</h3>
              <p className="text-body dark:text-gray-400 leading-relaxed max-w-sm">
                Hệ thống 4 cảm biến trọng lượng và hồng ngoại 360°, bảo vệ mèo tuyệt đối.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeInUp} className="group flex flex-col items-center text-center">
              <div className="w-full aspect-square relative mb-8 [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)]">
                <Image src="/images/feature-odor.webp" alt="Odor Control" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-heading dark:text-white mb-4">Dual Odor Control</h3>
              <p className="text-body dark:text-gray-400 leading-relaxed max-w-sm">
                Ngăn chứa kín kết hợp công nghệ ion khử 99.9% mùi hôi, giữ không gian thoáng đãng.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
