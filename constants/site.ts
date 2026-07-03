/* ============================================================
   Site-wide Constants
   All text content, nav links, social links in one place.
   NO hard-coded strings in components.
   ============================================================ */

import {
  Share2,
  Globe,
  Video,
  MessageCircle,
} from 'lucide-react';
import type { NavItem, SocialLink, FooterLinkGroup } from '@/types';

/* --------------------------------
   Site metadata
   -------------------------------- */

export const SITE_CONFIG = {
  name: 'HeLiPet Open Top Pro Plus',
  title: 'HeLiPet Open Top Pro Plus — Máy Dọn Vệ Sinh Mèo Tự Động Thông Minh',
  description:
    'HeLiPet Open Top Pro Plus tự động làm sạch, khử mùi và giúp việc chăm sóc mèo trở nên dễ dàng hơn. Sạch cho Boss, Khỏe cho Sen.',
  url: 'https://helipet.vn',
  locale: 'vi_VN',
  ogImage: '/images/og-image.webp',
} as const;

/* --------------------------------
   Navigation
   -------------------------------- */

export const NAV_ITEMS: NavItem[] = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Tính năng', href: '#features' },
  { label: 'Hoạt động', href: '#how-it-works' },
  { label: 'Thông số', href: '#specifications' },
  { label: 'Đánh giá', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Đăng ký', href: '#registration' },
];

/* --------------------------------
   Hero section
   -------------------------------- */

export const HERO_CONTENT = {
  headline: 'Sạch cho BOSS\nKhỏe cho SEN',
  subtitle:
    'HeLiPet Open Top Pro Plus tự động làm sạch, khử mùi và giúp việc chăm sóc mèo trở nên dễ dàng hơn',
  ctaPrimary: 'Khám phá ngay',
  ctaSecondary: 'Đăng ký tư vấn',
} as const;

/* --------------------------------
   Social links
   -------------------------------- */

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: Share2, href: 'https://facebook.com/helipet', label: 'Facebook' },
  { icon: Globe, href: 'https://instagram.com/helipet', label: 'Instagram' },
  { icon: Video, href: 'https://youtube.com/@helipet', label: 'YouTube' },
  { icon: MessageCircle, href: 'https://zalo.me/helipet', label: 'Zalo' },
];

/* --------------------------------
   Footer
   -------------------------------- */

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: 'Sản phẩm',
    links: [
      { label: 'Tính năng', href: '#features' },
      { label: 'Thông số kỹ thuật', href: '#specifications' },
      { label: 'So sánh', href: '#comparison' },
      { label: 'Bộ sưu tập', href: '#showcase' },
    ],
  },
  {
    title: 'Hỗ trợ',
    links: [
      { label: 'Câu hỏi thường gặp', href: '#faq' },
      { label: 'Đăng ký tư vấn', href: '#registration' },
      { label: 'Hướng dẫn sử dụng', href: '#' },
      { label: 'Chính sách bảo hành', href: '#' },
    ],
  },
  {
    title: 'Công ty',
    links: [
      { label: 'Về HeLiCorp', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Tuyển dụng', href: '#' },
      { label: 'Liên hệ', href: '#registration' },
    ],
  },
];

export const FOOTER_CONTACT = {
  phone: '0965255227',
  email: 'support@helicorp.vn',
  address: 'M2 đường F, Phường Đông Hưng Thuận, HCM',
  hours: '8:00 - 20:00 từ T2 - CN',
} as const;

/* --------------------------------
   Chatbot
   -------------------------------- */

export const CHATBOT_GREETING =
  'Xin chào! 👋 Tôi là trợ lý ảo của HeLiPet. Bạn cần tìm hiểu gì về Open Top Pro Plus?';

export const CHATBOT_RESPONSES: Record<string, string> = {
  default:
    'Cảm ơn bạn đã quan tâm! Để được tư vấn chi tiết, bạn có thể để lại thông tin ở mục Đăng ký tư vấn hoặc gọi hotline 1900 6868 nhé!',
  gia: 'HeLiPet Open Top Pro Plus có giá niêm yết 8.990.000đ. Hiện đang có chương trình ưu đãi đặc biệt cho khách hàng đăng ký sớm. Bạn có muốn đăng ký tư vấn không?',
  'tính năng':
    'Open Top Pro Plus có nhiều tính năng nổi bật: Tự động làm sạch, Cảm biến an toàn, Khử mùi hiệu quả, Điều khiển qua App, Giám sát sức khỏe mèo và Hoạt động siêu êm. Bạn muốn tìm hiểu tính năng nào cụ thể?',
  'bảo hành':
    'Sản phẩm được bảo hành chính hãng 24 tháng tại tất cả trung tâm bảo hành HeLiCorp trên toàn quốc.',
  'giao hàng':
    'HeLiPet giao hàng miễn phí toàn quốc. Thời gian giao hàng từ 2-5 ngày tùy khu vực.',
  mèo: 'Open Top Pro Plus phù hợp với mèo từ 1.5kg đến 10kg, tức là hầu hết các giống mèo phổ biến. Cảm biến thông minh sẽ tự nhận diện khi mèo vào và ra.',
};

/* --------------------------------
   Image placeholder directory
   -------------------------------- */

export const IMAGE_DIR = '/images' as const;
