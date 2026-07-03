/* ============================================================
   Section: Feature Story 2 (Bento Grid)
   Showcasing individual parts and features.
   ============================================================ */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeInUp, staggerContainer } from '@/utils/motion';
import { cn } from '@/utils/cn';
import Image from 'next/image';

interface BentoCardProps {
  srcBase: string;
  alt: string;
  title: string;
  desc: string;
  className?: string;
  imageClassName?: string;
  ext?: string;
}

const BentoCard = ({ srcBase, alt, title, desc, className, imageClassName, ext = '.webp' }: BentoCardProps) => {
  const [imgSrc, setImgSrc] = useState(`${srcBase}${ext}`);
  const [errorCount, setErrorCount] = useState(0);
  const extensions = ['.png', '.jpg', '.jpeg', '.webp'].filter(e => e !== ext);

  const handleImageError = () => {
    if (errorCount < extensions.length) {
      setImgSrc(`${srcBase}${extensions[errorCount]}`);
      setErrorCount((prev) => prev + 1);
    }
  };

  return (
    <motion.div 
      variants={fadeInUp} 
      className={cn("relative rounded-3xl overflow-hidden bg-gray-100 dark:bg-[#161618] border border-border dark:border-white/5 group h-[350px] lg:h-[400px]", className)}
    >
      <Image 
        src={imgSrc} 
        alt={alt} 
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={cn("object-cover group-hover:scale-105 transition-transform duration-700", imageClassName)} 
        onError={handleImageError}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8">
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 max-w-md text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
};

export function ProductShowcaseSection() {
  return (
    <section id="showcase" className="py-24 lg:py-32 bg-secondary-bg dark:bg-[#0f0f11] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Cấu tạo"
          title="Từng chi tiết được thiết kế tỉ mỉ"
          subtitle="Khám phá các công nghệ ẩn giấu bên trong HeLiPet Open Top Pro Plus"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
        >
          <BentoCard
            srcBase="/images/showcase-1"
            alt="Không gian mở rộng"
            title="Không gian mở rộng"
            desc="Thiết kế Open Top không trần, giúp mèo lớn xoay người thoải mái mà không bị bí bách."
            imageClassName="scale-[1.05] group-hover:scale-[1.1]"
          />

          <BentoCard
            srcBase="/images/showcase-2"
            alt="Cảm biến 360°"
            title="Cảm biến 360°"
            desc="Nhận diện chuyển động tức thì. Lồng xoay tự động dừng khi phát hiện mèo tới gần."
            imageClassName="scale-[1.3] group-hover:scale-[1.35]"
          />

          <BentoCard
            srcBase="/images/showcase-3"
            ext=".jpg"
            alt="Thảm lót đáy nâng cấp"
            title="Thảm lót đáy nâng cấp"
            desc="Thiết kế đặc biệt với khả năng chống dính, chống rò rỉ và chống trầy xước, bảo vệ toàn diện."
            imageClassName="scale-[1.1] group-hover:scale-[1.15]"
          />

          <BentoCard
            srcBase="/images/showcase-4"
            alt="Ngăn chứa 9 Lít"
            title="Ngăn chứa 9 Lít"
            desc="Dung tích siêu lớn, thiết kế đóng kín hoàn toàn, cho phép bạn rảnh tay lên đến 20 ngày."
            imageClassName="scale-[1.3] group-hover:scale-[1.35]"
          />
        </motion.div>
      </div>
    </section>
  );
}
