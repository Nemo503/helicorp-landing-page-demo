/* ============================================================
   Product Constants
   All product-specific data: problems, features, specs, etc.
   ============================================================ */

import {
  Wind,
  Trash2,
  Bug,
  Clock,
  Briefcase,
  RefreshCw,
  Shield,
  Sparkles,
  Smartphone,
  Wifi,
  Bell,
  HeartPulse,
  ShieldCheck,
  Volume2,
  Zap,
  Cat,
  Eye,
  Timer,
  Settings,
  Archive,
  CheckCircle,
  Ruler,
  Weight,
  Battery,
  Droplets,
  Palette,
  Box,
} from 'lucide-react';
import type {
  ProblemItem,
  FeatureItem,
  StepItem,
  SmartFeatureItem,
  SpecItem,
  ComparisonItem,
  ReviewItem,
  FAQItem,
  GalleryImage,
} from '@/types';

/* --------------------------------
   Problems
   -------------------------------- */

export const PROBLEMS: ProblemItem[] = [
  {
    icon: Wind,
    title: 'Mùi hôi khó chịu',
    description:
      'Khay vệ sinh bốc mùi chỉ sau vài giờ, ảnh hưởng đến không gian sống và sức khỏe cả gia đình.',
  },
  {
    icon: Trash2,
    title: 'Dọn phân mỗi ngày',
    description:
      'Phải dọn khay vệ sinh ít nhất 1-2 lần mỗi ngày, công việc không ai muốn làm nhưng không thể bỏ qua.',
  },
  {
    icon: Bug,
    title: 'Vi khuẩn & ký sinh trùng',
    description:
      'Chất thải tồn đọng là môi trường lý tưởng cho vi khuẩn và ký sinh trùng phát triển, gây bệnh cho mèo.',
  },
  {
    icon: Clock,
    title: 'Mất thời gian',
    description:
      'Trung bình mỗi sen mất 15-20 phút mỗi ngày cho việc vệ sinh, tương đương hơn 100 giờ mỗi năm.',
  },
  {
    icon: Briefcase,
    title: 'Bận rộn & đi vắng',
    description:
      'Khi đi công tác hay du lịch, luôn lo lắng không có ai dọn vệ sinh cho boss yêu quý.',
  },
];

/* --------------------------------
   Solution Features
   -------------------------------- */

export const SOLUTION_FEATURES: FeatureItem[] = [
  {
    icon: RefreshCw,
    title: 'Auto Cleaning',
    description:
      'Tự động dọn sạch chất thải sau mỗi lần boss sử dụng. Cảm biến trọng lượng chính xác, vận hành êm ái.',
    badge: 'Cốt lõi',
  },
  {
    icon: Shield,
    title: 'Safety Sensor',
    description:
      'Cảm biến hồng ngoại nhận diện mèo trong phạm vi 360°. Tự động dừng ngay khi phát hiện boss quay lại.',
    badge: 'An toàn',
  },
  {
    icon: Sparkles,
    title: 'Odor Removal',
    description:
      'Hệ thống khử mùi 3 lớp kết hợp than hoạt tính và ion bạc, loại bỏ 99.9% mùi hôi khó chịu.',
    badge: 'Sạch sẽ',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description:
      'Điều khiển và giám sát từ xa qua ứng dụng HeLiPet. Nhận thông báo thời gian thực về hoạt động của boss.',
    badge: 'Thông minh',
  },
];

/* --------------------------------
   How It Works Steps
   -------------------------------- */

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    icon: Cat,
    title: 'Boss đi vệ sinh',
    description: 'Mèo bước vào và sử dụng máy như khay vệ sinh thông thường.',
    step: 1,
  },
  {
    icon: Eye,
    title: 'Cảm biến nhận diện',
    description:
      'Hệ thống cảm biến trọng lượng và hồng ngoại tự động nhận diện mèo đã vào.',
    step: 2,
  },
  {
    icon: Timer,
    title: 'Đợi boss rời đi',
    description:
      'Sau khi mèo rời khỏi, máy sẽ đợi thêm một khoảng thời gian an toàn trước khi hoạt động.',
    step: 3,
  },
  {
    icon: Settings,
    title: 'Tự động làm sạch',
    description:
      'Hệ thống sàng lọc tự động tách biệt chất thải rắn khỏi cát sạch một cách nhẹ nhàng.',
    step: 4,
  },
  {
    icon: Archive,
    title: 'Chất thải vào ngăn chứa',
    description:
      'Chất thải được đưa vào ngăn chứa kín, khóa mùi hoàn toàn. Dễ dàng tháo và vệ sinh.',
    step: 5,
  },
  {
    icon: CheckCircle,
    title: 'Hoàn tất',
    description:
      'Khay vệ sinh luôn sạch sẽ, sẵn sàng cho lần sử dụng tiếp theo. Bạn nhận thông báo trên App.',
    step: 6,
  },
];

/* --------------------------------
   Smart Features
   -------------------------------- */

export const SMART_FEATURES: SmartFeatureItem[] = [
  {
    icon: Wifi,
    title: 'App Control',
    description:
      'Điều khiển mọi chức năng từ xa qua smartphone. Hỗ trợ cả iOS và Android.',
  },
  {
    icon: Bell,
    title: 'Real-time Notification',
    description:
      'Nhận thông báo tức thì khi boss sử dụng, khi ngăn chứa đầy hoặc cần bảo trì.',
  },
  {
    icon: HeartPulse,
    title: 'Health Monitoring',
    description:
      'Theo dõi tần suất, thời gian và cân nặng mỗi lần boss đi vệ sinh. Phát hiện sớm dấu hiệu bất thường.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety Protection',
    description:
      'Cảm biến 360° bảo vệ boss an toàn tuyệt đối. Tự động dừng ngay khi phát hiện chuyển động.',
  },
  {
    icon: Volume2,
    title: 'Ultra Quiet',
    description:
      'Hoạt động với độ ồn chỉ 40dB — êm hơn cả tiếng thì thầm. Không làm phiền boss và cả nhà.',
  },
  {
    icon: Zap,
    title: 'Energy Saving',
    description:
      'Chỉ tiêu thụ 5W khi hoạt động, tương đương 1 bóng đèn LED. Tiết kiệm điện tối đa.',
  },
];

/* --------------------------------
   Gallery Images
   (numbered placeholders — replace with real product images)
   -------------------------------- */

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/images/1.webp', alt: 'HeLiPet Open Top Pro Plus — Góc nhìn chính diện', width: 800, height: 600 },
  { src: '/images/2.webp', alt: 'HeLiPet Open Top Pro Plus — Góc nhìn 3/4', width: 800, height: 600 },
  { src: '/images/3.webp', alt: 'HeLiPet Open Top Pro Plus — Ngăn chứa chất thải', width: 800, height: 600 },
  { src: '/images/4.webp', alt: 'HeLiPet Open Top Pro Plus — Bảng điều khiển', width: 800, height: 600 },
  { src: '/images/5.webp', alt: 'HeLiPet Open Top Pro Plus — Mèo sử dụng', width: 800, height: 600 },
  { src: '/images/6.webp', alt: 'HeLiPet Open Top Pro Plus — Giao diện App', width: 800, height: 600 },
];

/* --------------------------------
   Specifications
   -------------------------------- */

export const SPECIFICATIONS: SpecItem[] = [
  { label: 'Kích thước', value: '580 x 530 x 510 mm', icon: Ruler },
  { label: 'Khối lượng', value: '8.5 kg', icon: Weight },
  { label: 'Dung tích ngăn chứa', value: '9 lít', icon: Box },
  { label: 'Điện năng tiêu thụ', value: '5W (12V DC)', icon: Battery },
  { label: 'Độ ồn', value: '≤ 40 dB', icon: Volume2 },
  { label: 'Dung tích cát', value: '7 lít', icon: Droplets },
  { label: 'Màu sắc', value: 'Trắng ngọc trai / Xám than chì', icon: Palette },
];

/* --------------------------------
   Comparison
   -------------------------------- */

export const COMPARISONS: ComparisonItem[] = [
  {
    feature: 'Vệ sinh',
    traditional: 'Dọn thủ công 1-2 lần/ngày',
    helipet: 'Hoàn toàn tự động',
    traditionalStatus: 'negative',
    helipetStatus: 'positive',
  },
  {
    feature: 'Mùi hôi',
    traditional: 'Bốc mùi liên tục',
    helipet: 'Khử mùi 99.9%',
    traditionalStatus: 'negative',
    helipetStatus: 'positive',
  },
  {
    feature: 'An toàn',
    traditional: 'Không có cảm biến',
    helipet: 'Cảm biến 360° thông minh',
    traditionalStatus: 'negative',
    helipetStatus: 'positive',
  },
  {
    feature: 'Giám sát sức khỏe',
    traditional: 'Không có',
    helipet: 'Theo dõi tần suất & cân nặng',
    traditionalStatus: 'negative',
    helipetStatus: 'positive',
  },
  {
    feature: 'Điều khiển từ xa',
    traditional: 'Không có',
    helipet: 'App iOS & Android',
    traditionalStatus: 'negative',
    helipetStatus: 'positive',
  },
  {
    feature: 'Tiếng ồn',
    traditional: 'Không áp dụng',
    helipet: 'Chỉ 40dB — siêu êm',
    traditionalStatus: 'neutral',
    helipetStatus: 'positive',
  },
  {
    feature: 'Thời gian dọn dẹp',
    traditional: '15-20 phút/ngày',
    helipet: '0 phút — tự động hoàn toàn',
    traditionalStatus: 'negative',
    helipetStatus: 'positive',
  },
];

/* --------------------------------
   Reviews
   -------------------------------- */

export const REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    name: 'Nguyễn Minh Anh',
    avatar: '/images/avatar-1.webp',
    rating: 5,
    text: 'Mình nuôi 2 bé mèo, trước đây phải dọn khay 3-4 lần/ngày. Từ khi có Open Top Pro Plus, nhà lúc nào cũng sạch sẽ và thơm tho. Các bé rất thích dùng!',
    date: '15/06/2025',
    petName: 'Mochi & Luna',
  },
  {
    id: 'r2',
    name: 'Trần Đức Huy',
    avatar: '/images/avatar-2.webp',
    rating: 5,
    text: 'Ban đầu hơi lo boss không quen, nhưng chỉ sau 2 ngày là bé tự vào dùng thoải mái. Máy chạy rất êm, ngủ cạnh cũng không nghe thấy.',
    date: '28/05/2025',
    petName: 'Gấu',
  },
  {
    id: 'r3',
    name: 'Lê Thị Hồng Nhung',
    avatar: '/images/avatar-3.webp',
    rating: 5,
    text: 'Tính năng giám sát sức khỏe cực kỳ hữu ích. Phát hiện bé nhà mình đi vệ sinh bất thường và đưa đi khám kịp thời. Cảm ơn HeLiPet!',
    date: '10/05/2025',
    petName: 'Sushi',
  },
  {
    id: 'r4',
    name: 'Phạm Quang Minh',
    avatar: '/images/avatar-4.webp',
    rating: 4,
    text: 'Thiết kế đẹp, chất lượng xứng đáng với giá tiền. Đặc biệt thích tính năng điều khiển qua App, đi công tác cũng yên tâm về boss ở nhà.',
    date: '02/04/2025',
    petName: 'Bông',
  },
  {
    id: 'r5',
    name: 'Hoàng Thị Mai',
    avatar: '/images/avatar-5.webp',
    rating: 5,
    text: 'Mua cho mẹ dùng vì mẹ nuôi mèo mà tuổi cao khó khom lưng dọn. Mẹ rất thích, nói là "phát minh vĩ đại nhất". Đáng đồng tiền bát gạo!',
    date: '18/03/2025',
    petName: 'Miu',
  },
];

/* --------------------------------
   FAQ
   -------------------------------- */

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'HeLiPet Open Top Pro Plus có phù hợp với tất cả giống mèo không?',
    answer:
      'Open Top Pro Plus phù hợp với hầu hết các giống mèo phổ biến có trọng lượng từ 1.5kg đến 10kg. Bao gồm mèo Anh lông ngắn, mèo Ba Tư, mèo Munchkin, mèo ta và nhiều giống khác. Thiết kế Open Top giúp cả những bé mèo lớn cũng thoải mái sử dụng.',
  },
  {
    question: 'Máy có an toàn cho mèo không?',
    answer:
      'Tuyệt đối an toàn. Open Top Pro Plus được trang bị cảm biến hồng ngoại 360° và cảm biến trọng lượng. Máy sẽ tự động dừng ngay lập tức nếu phát hiện mèo quay lại trong quá trình hoạt động. Sản phẩm đã đạt các chứng nhận an toàn quốc tế.',
  },
  {
    question: 'Mèo nhà tôi có dễ làm quen với máy không?',
    answer:
      'Hầu hết mèo sẽ làm quen với Open Top Pro Plus trong 1-3 ngày. Bạn có thể đặt máy cạnh khay cũ trong vài ngày đầu, cho một ít cát cũ vào máy mới để mèo nhận ra mùi quen thuộc. Thiết kế Open Top giúp mèo không bị cảm giác bí bách.',
  },
  {
    question: 'Ngăn chứa chất thải cần thay bao lâu một lần?',
    answer:
      'Với 1 mèo, ngăn chứa 9 lít có thể sử dụng được khoảng 10-14 ngày trước khi cần vệ sinh. App sẽ thông báo khi ngăn chứa gần đầy. Túi rác chuyên dụng HeLiPet giúp việc thay thế nhanh chóng và sạch sẽ.',
  },
  {
    question: 'Máy sử dụng loại cát nào?',
    answer:
      'Open Top Pro Plus tương thích với hầu hết các loại cát vón cục phổ biến: cát bentonite, cát đậu nành, cát tofu, cát ngô. Khuyến nghị sử dụng cát có hạt từ 1.5mm trở lên để đạt hiệu quả sàng lọc tốt nhất. Không sử dụng cát thủy tinh hoặc cát không vón cục.',
  },
  {
    question: 'Sản phẩm được bảo hành như thế nào?',
    answer:
      'HeLiPet Open Top Pro Plus được bảo hành chính hãng 24 tháng cho toàn bộ máy và linh kiện. Hỗ trợ kỹ thuật 24/7 qua hotline và App. Đổi mới trong 30 ngày nếu lỗi từ nhà sản xuất. Bạn có thể mang đến bất kỳ trung tâm bảo hành HeLiCorp nào trên toàn quốc.',
  },
  {
    question: 'Chi phí vận hành hàng tháng là bao nhiêu?',
    answer:
      'Chi phí vận hành rất thấp. Điện năng tiêu thụ chỉ 5W, tương đương khoảng 3.000đ/tháng tiền điện. Chi phí túi rác chuyên dụng khoảng 50.000đ/tháng. Tổng chi phí vận hành khoảng 53.000đ/tháng — rẻ hơn 1 ly cà phê.',
  },
  {
    question: 'Tôi có thể điều khiển máy khi đi vắng không?',
    answer:
      'Hoàn toàn có thể! App HeLiPet cho phép bạn điều khiển mọi chức năng từ xa qua Internet. Bạn có thể xem lịch sử hoạt động, nhận thông báo, điều chỉnh lịch trình làm sạch và theo dõi sức khỏe boss từ bất cứ đâu trên thế giới.',
  },
];

/* --------------------------------
   Gallery placeholder note
   -------------------------------- */

export const GALLERY_PLACEHOLDER_TEXT =
  'Hình ảnh sản phẩm thực tế sẽ được cập nhật' as const;
