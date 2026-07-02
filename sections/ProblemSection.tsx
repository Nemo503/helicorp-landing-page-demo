/* ============================================================
   Section: Problem
   Creative Bento Grid layout for pain points.
   ============================================================ */

'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PROBLEMS } from '@/constants/product';
import { staggerContainer, fadeInUp } from '@/utils/motion';
import { cn } from '@/utils/cn';

const getBentoClasses = (index: number) => {
  switch (index) {
    case 0:
      return 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-[#1a1311] dark:to-[#1f1210]';
    case 1:
      return 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-[#0d141f] dark:to-[#10121f]';
    case 2:
      return 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-[#0d1a14] dark:to-[#0f1f18]';
    case 3:
      return 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-purple-50/50 to-fuchsia-50/50 dark:from-[#17101f] dark:to-[#1a0f1c]';
    case 4:
      return 'md:col-span-2 md:row-span-1 bg-gradient-to-br from-amber-50/50 to-yellow-50/50 dark:from-[#1f1a0d] dark:to-[#241c0f]';
    default:
      return 'bg-white dark:bg-[#111]';
  }
};

export function ProblemSection() {
  return (
    <section
      id="problems"
      className="py-24 lg:py-32 bg-secondary-bg dark:bg-gray-900 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Vấn đề"
          title="Những nỗi lo khi nuôi mèo"
          subtitle="Hơn 80% sen nuôi mèo gặp phải ít nhất một trong những vấn đề dưới đây hàng ngày"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(200px,auto)] gap-4 lg:gap-6 mt-16 max-w-6xl mx-auto"
        >
          {PROBLEMS.map((problem, index) => {
            const Icon = problem.icon;
            const isLarge = index === 0;

            return (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className={cn(
                  "relative group rounded-[2rem] p-8 lg:p-10 overflow-hidden border border-border dark:border-white/5 transition-all duration-500 hover:shadow-xl dark:hover:shadow-black/50 hover:-translate-y-1",
                  getBentoClasses(index)
                )}
              >
                {/* Large Background Image or Icon */}
                {isLarge ? (
                  <>
                    <img 
                      src="/images/problem-main.jpg" 
                      alt={problem.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src.includes('.webp')) {
                          target.src = '/images/problem-main.png';
                        } else if (target.src.includes('.png')) {
                          target.src = '/images/problem-main.jpg';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  </>
                ) : (
                  <div className="absolute -right-8 -bottom-8 opacity-[0.03] dark:opacity-[0.02] transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none">
                    <Icon className="w-64 h-64 text-current" strokeWidth={1} />
                  </div>
                )}
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm",
                    isLarge 
                      ? "bg-white/20 backdrop-blur-md border border-white/20 text-white" 
                      : "bg-white dark:bg-[#222] border border-gray-100 dark:border-white/5 text-primary group-hover:bg-primary group-hover:text-white",
                    "transition-colors duration-300"
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className={cn(
                      "font-bold mb-3",
                      isLarge ? "text-2xl lg:text-3xl text-white" : "text-xl text-heading dark:text-white"
                    )}>
                      {problem.title}
                    </h3>
                    <p className={cn(
                      "leading-relaxed",
                      isLarge ? "text-white/90" : "text-body dark:text-gray-400"
                    )}>
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
