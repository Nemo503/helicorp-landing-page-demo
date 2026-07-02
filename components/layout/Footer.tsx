/* ============================================================
   Layout: Footer
   Logo, quick links, contact, social, back-to-top.
   ============================================================ */

'use client';

import { motion } from 'framer-motion';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
import { cn } from '@/utils/cn';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/motion';
import { FOOTER_LINKS, FOOTER_CONTACT, SOCIAL_LINKS, SITE_CONFIG } from '@/constants/site';

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main footer */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8"
        >
          {/* Brand column */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/images/logo.webp"
                alt="HeLiPet Logo"
                className="h-8 lg:h-9 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              {SITE_CONFIG.description}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center',
                      'bg-gray-800 text-gray-400',
                      'hover:bg-primary hover:text-white',
                      'transition-colors duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Link columns */}
          {FOOTER_LINKS.map((group) => (
            <motion.div key={group.title} variants={staggerItem}>
              <h4 className="text-white font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a
              href={`tel:${FOOTER_CONTACT.phone}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              {FOOTER_CONTACT.phone}
            </a>
            <a
              href={`mailto:${FOOTER_CONTACT.email}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              {FOOTER_CONTACT.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              {FOOTER_CONTACT.address}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Phuc vu test phong van. Khong phai web chinh thuc cua Helipet
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className={cn(
              'p-2.5 rounded-full',
              'bg-gray-800 text-gray-400',
              'hover:bg-primary hover:text-white',
              'transition-colors duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
            )}
            aria-label="Về đầu trang"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
