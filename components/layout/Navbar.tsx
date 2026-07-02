/* ============================================================
   Layout: Navbar
   Fixed navbar with blur backdrop, mobile menu, dark toggle.
   ============================================================ */

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/utils/cn';
import { NAV_ITEMS } from '@/constants/site';
import { useThemeContext } from '@/components/layout/ThemeProvider';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useThemeContext();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  function handleNavClick(href: string) {
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
          isScrolled
            ? 'bg-white/70 dark:bg-[#0F0F10]/70 backdrop-blur-xl shadow-sm border-b border-border/50 dark:border-white/5'
            : 'bg-transparent',
        )}
      >
        <nav className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 lg:h-14">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="flex items-center group"
            >
              <img 
                src="/images/logo.webp" 
                alt="HeLiPet Logo" 
                className="h-8 lg:h-9 w-auto object-contain transition-transform group-hover:scale-105" 
              />
            </a>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={cn(
                    'px-4 py-1.5 text-sm font-medium rounded-full',
                    'text-body dark:text-gray-300',
                    'hover:text-primary hover:bg-primary/5 hover:scale-105',
                    'dark:hover:text-white dark:hover:bg-white/5',
                    'transition-all duration-300 ease-out',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className={cn(
                    'p-2 rounded-full',
                    'text-body hover:text-primary hover:scale-110',
                    'dark:text-gray-400 dark:hover:text-white',
                    'hover:bg-primary/5 dark:hover:bg-white/5',
                    'transition-all duration-300 ease-out',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                  )}
                  aria-label={theme === 'light' ? 'Bật chế độ tối' : 'Bật chế độ sáng'}
                >
                  {theme === 'light' ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
                  )}
                </button>
              )}

              {/* CTA (desktop only) */}
              <a
                href="#registration"
                onClick={(e) => { e.preventDefault(); handleNavClick('#registration'); }}
                className={cn(
                  'hidden lg:inline-flex px-6 py-2 rounded-full text-sm font-semibold',
                  'bg-primary text-white hover:bg-primary-hover',
                  'shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02]',
                  'transition-all duration-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                )}
              >
                Đăng ký tư vấn
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={cn(
                  'lg:hidden p-2.5 rounded-full',
                  'text-body hover:text-heading',
                  'dark:text-gray-400 dark:hover:text-white',
                  'hover:bg-gray-100 dark:hover:bg-gray-800',
                  'transition-colors duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                )}
                aria-label={isMobileOpen ? 'Đóng menu' : 'Mở menu'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={cn(
                'absolute top-0 right-0 bottom-0 w-[280px]',
                'bg-white dark:bg-gray-950',
                'border-l border-border dark:border-gray-800',
                'shadow-2xl',
                'flex flex-col',
              )}
            >
              {/* Close area */}
              <div className="h-16 flex items-center justify-end px-4">
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Đóng menu"
                >
                  <X className="w-5 h-5 text-heading dark:text-white" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-4 py-4">
                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      'block px-4 py-3 text-base font-medium rounded-xl',
                      'text-heading dark:text-white',
                      'hover:bg-gray-100 dark:hover:bg-gray-800',
                      'transition-colors duration-200',
                    )}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-4 border-t border-border dark:border-gray-800">
                <a
                  href="#registration"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#registration'); }}
                  className={cn(
                    'block text-center px-5 py-3 rounded-full text-sm font-semibold',
                    'bg-primary text-white hover:bg-primary-hover',
                    'shadow-sm hover:shadow-md hover:-translate-y-0.5',
                    'transition-all duration-300',
                  )}
                >
                  Đăng ký tư vấn
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
