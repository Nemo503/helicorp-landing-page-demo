/* ============================================================
   Section: Reviews
   Customer reviews with horizontal scroll carousel.
   ============================================================ */

'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StarRating } from '@/components/ui/StarRating';
import { REVIEWS } from '@/constants/product';
import { cn } from '@/utils/cn';
import { fadeInUp } from '@/utils/motion';

export function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function updateScrollState() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);

  function scroll(direction: 'left' | 'right') {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 380;
    el.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  }

  return (
    <section
      id="reviews"
      className="py-24 lg:py-32 bg-white dark:bg-gray-950"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16 md:mb-20">
          <SectionHeading
            badge="Đánh giá"
            title="Sen nói gì về Open Top Pro Plus?"
            subtitle="Hàng nghìn sen đã tin tưởng sử dụng"
            align="left"
            className="!mb-0"
          />

          {/* Navigation arrows — desktop only */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={cn(
                'p-3 rounded-full border border-border dark:border-gray-800',
                'hover:bg-gray-100 dark:hover:bg-gray-800',
                'transition-colors duration-200',
                'disabled:opacity-30 disabled:cursor-not-allowed',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              )}
              aria-label="Xem đánh giá trước"
            >
              <ChevronLeft className="w-5 h-5 text-heading dark:text-white" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                'p-3 rounded-full border border-border dark:border-gray-800',
                'hover:bg-gray-100 dark:hover:bg-gray-800',
                'transition-colors duration-200',
                'disabled:opacity-30 disabled:cursor-not-allowed',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              )}
              aria-label="Xem đánh giá tiếp"
            >
              <ChevronRight className="w-5 h-5 text-heading dark:text-white" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className={cn(
                  'flex-shrink-0 w-[340px] sm:w-[380px] p-8 rounded-2xl snap-start',
                  'bg-secondary-bg dark:bg-gray-900',
                  'border border-border dark:border-gray-800',
                  'transition-shadow duration-300 hover:shadow-lg',
                )}
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" strokeWidth={1} />

                {/* Review text */}
                <p className="text-heading dark:text-gray-200 leading-relaxed mb-6 min-h-[100px]">
                  &quot;{review.text}&quot;
                </p>

                {/* Rating */}
                <StarRating rating={review.rating} className="mb-4" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-heading dark:text-white">
                      {review.name}
                    </p>
                    {review.petName && (
                      <p className="text-xs text-body dark:text-gray-400">
                        Sen của {review.petName}
                      </p>
                    )}
                  </div>
                  <span className="ml-auto text-xs text-body dark:text-gray-500">
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
