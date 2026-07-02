/* ============================================================
   Section: FAQ
   Accordion with Framer Motion animations.
   ============================================================ */

'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { FAQ_ITEMS } from '@/constants/product';
import { fadeInUp } from '@/utils/motion';
import { trackEvent } from '@/lib/analytics';

export function FAQSection() {
  return (
    <section
      id="faq"
      className="py-24 lg:py-32 bg-secondary-bg dark:bg-gray-900"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Hỏi đáp"
          title="Câu hỏi thường gặp"
          subtitle="Giải đáp thắc mắc về HeLiPet Open Top Pro Plus"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-950 p-6 sm:p-10 rounded-3xl border border-border dark:border-gray-800 shadow-sm"
        >
          <Accordion
            items={FAQ_ITEMS}
            allowMultiple={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
