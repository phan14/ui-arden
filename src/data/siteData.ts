import {
  ServiceItem,
  MetricItem,
  ProcessStep,
  WhyChooseItem,
  ProjectItem,
  ArticleItem,
  CareerItem,
  PolicyItem
} from '../types';

export const siteConfig = {
  name: 'Xưởng May Arden',
  englishName: 'Arden Garment Factory',
  slogan: 'Gia Công Thời Trang Local Brand Theo Yêu Cầu',
  description: 'Arden đồng hành cùng Local Brand từ phát triển mẫu, lựa chọn chất liệu đến sản xuất số lượng lớn với chất lượng ổn định - tiến độ rõ ràng - giá cạnh tranh.',
  phone: '0901 234 567',
  hotlineFormatted: '0901.234.567',
  email: 'info@arden.com.vn',
  website: 'www.arden.com.vn',
  address: '86 Đường S6, P. Tây Thạnh, Q. Tân Phú, TP. Hồ Chí Minh',
  workingHours: 'Thứ 2 - Thứ 7: 8:00 - 17:30 (Chủ nhật: Nghỉ)',
  establishedYear: '2014',
  social: {
    facebook: 'https://facebook.com/xuongmayarden',
    zalo: 'https://zalo.me/0901234567',
    tiktok: 'https://tiktok.com/@ardenfactory',
    instagram: 'https://instagram.com/arden.garment'
  }
};

export const heroMetrics: MetricItem[] = [
  { value: '10+', label: 'Năm kinh nghiệm', sublabel: 'Gia công may mặc B2B' },
  { value: '500.000+', label: 'Sản phẩm đã sản xuất', sublabel: 'Đạt chuẩn kiểm định' },
  { value: '100+', label: 'Khách hàng thân thiết', sublabel: 'Local brand & Doanh nghiệp' },
  { value: '98%', label: 'Đúng tiến độ', sublabel: 'Cam kết bằng hợp đồng' },
  { value: '3 - 7 ngày', label: 'Thời gian làm mẫu', sublabel: 'Nhanh chóng, chuẩn xác' },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'may-ao-thun',
    title: 'May Áo Thun',
    slug: '/dich-vu/may-ao-thun',
    description: 'Chuyên may áo thun oversize, form boxy, slimfit, baby tee, polo... Đáp ứng đa dạng định lượng vải từ 180 GSM đến 350 GSM.',
    features: ['Vải Cotton 100%, Cotton 2C/4C, CVC, TC', 'Bo cổ dệt riêng, xử lý chống bai nhão', 'In lụa, DTG, thêu vi tính độ nét cao'],
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    badge: 'Chủ lực'
  },
  {
    id: 'may-ao-so-mi',
    title: 'May Áo Sơ Mi',
    slug: '/dich-vu#so-mi',
    description: 'May áo sơ mi Oxford, sơ mi lụa, modal, linen, kaki mỏng. Đường may mí 1mm sắc sảo, form dáng chuẩn công sở lẫn streetwear.',
    features: ['Cổ áo keo ép nhiệt không phồng rộp', 'May mí cuộn sườn kỹ thuật cao', 'Nút áo khắc laser thương hiệu'],
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'may-quan',
    title: 'May Quần',
    slug: '/dich-vu#quan',
    description: 'Gia công quần short, quần dài kaki, jeans denim 12oz, quần túi hộp cargo pants, quần dù gió dù nhăn và nỉ da cá.',
    features: ['Xử lý wash mềm, wash vintage theo yêu cầu', 'Dây kéo YKK đồng bộ, chỉ may chịu lực', 'Form dáng fit chuẩn từng size'],
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'may-ao-khoac',
    title: 'May Áo Khoác',
    slug: '/dich-vu#ao-khoac',
    description: 'Sản xuất áo khoác Bomber, Varsity Jacket, Hoodie nỉ bông 380gsm, áo khoác dù 2 lớp chống nước và chần bông mùa đông.',
    features: ['Vải dù kháng nước, lót lưới/lụa cao cấp', 'Bo cổ & tay áo dệt sọc độc quyền', 'Khóa kéo kim loại, nút bấm mạ bóng'],
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gia-cong-local-brand',
    title: 'Gia Công Local Brand',
    slug: '/dich-vu#local-brand',
    description: 'Dịch vụ trọn gói ODM/OEM cho các thương hiệu thời trang: phát triển mẫu, may nhãn dệt/nhãn satin, gắn thẻ bài, đóng túi zip in logo.',
    features: ['Bảo mật 100% mẫu thiết kế (kèm hợp đồng NDA)', 'Tối ưu định mức vải tiết kiệm chi phí', 'Đóng gói chuẩn xuất xưởng sẵn sàng bán lẻ'],
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    badge: 'Trọn gói'
  },
];

export const factoryCapabilities = [
  {
    number: '01',
    title: 'Diện tích nhà xưởng hơn 1.000m² tại TP.HCM',
    desc: 'Bố trí khoa học theo dây chuyền từ kho vải, bàn cắt tự động, chuyền may đến khu vực QC và đóng gói.'
  },
  {
    number: '02',
    title: 'Hơn 100 máy may chuyên dụng hiện đại',
    desc: 'Trang bị máy may 1 kim điện tử Juki, máy vắt sổ 4-5 chỉ Siruba, máy cào bọ, máy kansai kansai viền cổ hiện đại.'
  },
  {
    number: '03',
    title: 'Đội ngũ 60+ công nhân may lành nghề',
    desc: 'Thợ may giàu kinh nghiệm trên 5 năm tay nghề, được đào tạo chuyên sâu về kỹ thuật may hàng thiết kế cao cấp.'
  },
  {
    number: '04',
    title: 'Kiểm soát chất lượng 3 bước (IQC - IPQC - FQC)',
    desc: 'Kiểm vải đầu vào, kiểm tra bán thành phẩm trên chuyền và kiểm tra 100% thành phẩm trước khi xuất xưởng.'
  },
  {
    number: '05',
    title: 'Năng lực sản xuất 50.000+ sản phẩm/tháng',
    desc: 'Đáp ứng linh hoạt các đơn hàng từ số lượng nhỏ đến đơn hàng lớn giao định kỳ hàng tháng cho các chuỗi thời trang.'
  },
  {
    number: '06',
    title: 'Nhận đơn hàng từ 30 sản phẩm',
    desc: 'Hỗ trợ tối đa cho các Local Brand khởi nghiệp thử nghiệm thị trường với số lượng may mẫu và đợt hàng đầu nhỏ gọn.'
  }
];

export const productionProcess: ProcessStep[] = [
  { step: '01', title: 'Tiếp nhận yêu cầu', description: 'Lắng nghe ý tưởng, tiếp nhận mẫu vẽ hoặc mẫu thật, số lượng và tiến độ.' },
  { step: '02', title: 'Tư vấn & Báo giá', description: 'Tư vấn chất liệu vải phù hợp, tính toán định mức và gửi bảng báo giá tối ưu.' },
  { step: '03', title: 'Làm rập & May mẫu', description: 'Ra rập vi tính, may mẫu thử nghiệm (3 - 7 ngày) gửi khách duyệt form dáng.' },
  { step: '04', title: 'Duyệt mẫu', description: 'Khách hàng duyệt mẫu thực tế, điều chỉnh chi tiết nếu cần và ký duyệt sản xuất.' },
  { step: '05', title: 'Sản xuất hàng loạt', description: 'Trải vải cắt tự động, tiến hành may ráp chuyền theo tiêu chuẩn kỹ thuật.' },
  { step: '06', title: 'In / Thêu', description: 'Gia công in lụa, in DTG, thêu vi tính độ nét cao theo đúng vị trí thiết kế.' },
  { step: '07', title: 'Kiểm tra QC 3 bước', description: 'Kiểm tra thông số kích thước, đường kim mũi chỉ, cắt chỉ thừa, ủi phẳng.' },
  { step: '08', title: 'Đóng gói chuẩn', description: 'Gắn thẻ bài, nhãn mác, bọc túi zip/nilon, đóng thùng carton chống ẩm.' },
  { step: '09', title: 'Giao hàng đúng hẹn', description: 'Giao hàng tận nơi tại TP.HCM hoặc vận chuyển toàn quốc kèm biên bản giao nhận.' },
];

export const whyChooseArden: WhyChooseItem[] = [
  {
    title: 'Chất lượng ổn định',
    description: 'Từng đường kim mũi chỉ được kiểm soát chặt chẽ, form dáng chuẩn mẫu duyệt, không xù lông co rút sau giặt.'
  },
  {
    title: 'Hỗ trợ phát triển mẫu',
    description: 'Đội ngũ kỹ thuật rập hỗ trợ lên rập theo sketch ý tưởng, tư vấn chất liệu vải xu hướng mới nhất.'
  },
  {
    title: 'Tiến độ đúng hẹn',
    description: 'Cam kết tiến độ bàn giao rõ ràng trong hợp đồng, hỗ trợ đẩy nhanh đơn gấp theo lịch ra mắt BST.'
  },
  {
    title: 'Giá cả cạnh tranh',
    description: 'Báo giá trực tiếp tận gốc từ xưởng sản xuất, không qua trung gian, tối ưu hóa định mức nguyên phụ liệu.'
  },
  {
    title: 'Bảo mật thiết kế',
    description: 'Ký cam kết bảo mật mẫu độc quyền cho từng thương hiệu, không chia sẻ file rập hay mẫu ra bên ngoài.'
  },
  {
    title: 'Đồng hành lâu dài',
    description: 'Lưu trữ file rập và định mức trọn đời, hỗ trợ restock sản phẩm nhanh chóng từ 3 - 5 ngày.'
  }
];

export const clientBrands = [
  { name: 'AARDEN', label: 'Arden Studio' },
  { name: 'DAVIES', label: 'Davies Brand' },
  { name: 'DIRTYCOINS', label: 'Dirty Coins' },
  { name: 'GRIMMDC', label: 'Grimm DC' },
  { name: 'CLOWNZ', label: 'ClownZ Streetwear' },
  { name: 'BAD HABITS', label: 'Bad Habits' },
  { name: 'DEGREY', label: 'Degrey Vietnam' },
];

export const featuredProjects: ProjectItem[] = [
  {
    id: 'bst-ao-thun-local-brand-adc',
    title: 'BST Áo Thun Local Brand ADC',
    slug: '/du-an/bst-ao-thun-local-brand',
    category: 'tshirt',
    categoryLabel: 'Áo Thun',
    material: 'Cotton 2 chiều 250 GSM',
    minOrder: 'Số lượng: 300+ sp',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    client: 'Local Brand ADC',
    time: '15 ngày',
    specs: [
      { label: 'Sản phẩm', value: 'Áo thun oversize bo dệt' },
      { label: 'Chất liệu', value: '100% Cotton 2 chiều chải kỹ' },
      { label: 'Kỹ thuật', value: 'In lụa Plastisol + Thêu nổi 3D' },
      { label: 'Số lượng', value: '1.000+ sản phẩm' }
    ]
  },
  {
    id: 'bst-hoodie-streetwear',
    title: 'BST Hoodie Streetwear Mùa Đông',
    slug: '/du-an#hoodie-streetwear',
    category: 'jacket',
    categoryLabel: 'Áo Khoác & Hoodie',
    material: 'French Terry 380 GSM',
    minOrder: 'Số lượng: 300+ sp',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'quan-jean-nam-form-ong-rong',
    title: 'Quần Jean Nam Form Ống Rộng',
    slug: '/du-an#jean-wide-leg',
    category: 'pants',
    categoryLabel: 'Quần',
    material: 'Denim 12oz - Wash Vintage',
    minOrder: 'Số lượng: 300+ sp',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ao-so-mi-oversize-linen',
    title: 'Áo Sơ Mi Oversize Casual',
    slug: '/du-an#so-mi-linen',
    category: 'shirt',
    categoryLabel: 'Áo Sơ Mi',
    material: 'Cotton 2 chiều dệt nổi',
    minOrder: 'Số lượng: 400+ sp',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jacket-bomber-2-lop',
    title: 'Jacket Bomber Phối Màu',
    slug: '/du-an#jacket-bomber',
    category: 'jacket',
    categoryLabel: 'Áo Khoác',
    material: 'Nylon - Lót viền bo dệt',
    minOrder: 'Số lượng: 200+ sp',
    image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dong-phuc-cong-ty-cao-cap',
    title: 'Đồng Phục Doanh Nghiệp Tech',
    slug: '/du-an#dong-phuc-tech',
    category: 'uniform',
    categoryLabel: 'Đồng Phục',
    material: 'Poly 2 chiều - Co giãn',
    minOrder: 'Số lượng: 1.000+ sp',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80'
  }
];

export const articlesData: ArticleItem[] = [
  {
    id: '1',
    title: 'Cách chọn xưởng may uy tín cho Local Brand mới bắt đầu',
    slug: 'cach-chon-xuong-may-uy-tin-cho-local-brand',
    excerpt: 'Kinh nghiệm chọn xưởng may chất lượng, đúng tiến độ và tối ưu định mức giá thành cho các nhà sáng lập thương hiệu trẻ.',
    category: 'Kinh nghiệm đặt may',
    date: '20/09/2024',
    readTime: '6 phút đọc',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    featured: true,
    content: `Khi mới bắt đầu xây dựng một thương hiệu thời trang Local Brand, việc tìm kiếm xưởng may gia công phù hợp đóng vai trò sống còn. Một xưởng may uy tín không chỉ là đối tác cung cấp dịch vụ cắt may mà còn là người bạn đồng hành cố vấn về kỹ thuật, chất liệu vải và tối ưu chi phí.

### 1. Xem xét số lượng đặt hàng tối thiểu (MOQ)
Đối với các bộ sưu tập đầu tiên, bạn nên ưu tiên các xưởng may có chính sách MOQ linh hoạt (từ 30 - 50 áo/mẫu). Điều này giúp giảm thiểu rủi ro tồn kho tài chính và cho phép bạn thử nghiệm nhanh phản hồi từ khách hàng.

### 2. Kiểm tra năng lực may mẫu và độ chuẩn của rập
Trước khi ký hợp đồng sản xuất hàng loạt, hãy luôn yêu cầu may mẫu thử nghiệm (Sample). Hãy chú ý kỹ:
- Độ phẳng và êm của đường may nách, vai và gấu áo.
- Độ chắc chắn của bo cổ (đặc biệt bo dệt 1:1 hoặc may bọc xích).
- Độ chính xác của bảng thông số size thực tế so với bản vẽ Techpack.

### 3. Minh bạch về hợp đồng và cam kết tiến độ
Hợp đồng gia công cần quy định rõ thời hạn bàn giao thành phẩm, dung sai kích thước cho phép (thường ±1.5cm) và chính sách bồi thường/sửa chữa nếu phát sinh lỗi kỹ thuật từ phía xưởng.`
  },
  {
    id: '2',
    title: 'GSM là gì? Cách chọn định lượng vải phù hợp từng loại sản phẩm',
    slug: 'gsm-la-gi-cach-chon-dinh-luong-vai',
    excerpt: 'Hướng dẫn chi tiết về chỉ số GSM và các lưu ý vàng khi chọn vải áo thun 220 GSM, 250 GSM hay hoodie 380 GSM.',
    category: 'Kiến thức vải',
    date: '15/09/2024',
    readTime: '4 phút đọc',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    content: `GSM là viết tắt của "Grams per Square Meter" (Gram trên mỗi mét vuông), là đơn vị đo lường trọng lượng của vải. Chỉ số GSM càng cao thì vải càng dày và nặng tay.

### Các phân khúc GSM phổ biến hiện nay:
- **180 - 200 GSM**: Vải mỏng nhẹ, thoáng mát, thích hợp cho áo thun mặc lót (undershirt) hoặc áo thun thể thao mùa hè.
- **220 - 250 GSM (Chuẩn Local Brand)**: Định lượng lý tưởng nhất cho áo thun form Oversize và Boxy. Vải dày dặn, đứng form chuẩn streetwear nhưng vẫn giữ được độ thoáng khí tự nhiên của Cotton 100%.
- **280 - 320 GSM (Heavyweight)**: Vải siêu dày, giữ form cực tốt, thường được dùng cho các dòng sản phẩm cao cấp, phiên bản giới hạn (Limited Edition).
- **350 - 420 GSM**: Dành riêng cho nỉ chân cua, nỉ bông may áo Hoodie, Sweater và Quần Sweatpants giữ ấm.`
  },
  {
    id: '3',
    title: 'Quy trình làm mẫu tại xưởng may chuyên nghiệp chuẩn 9 bước',
    slug: 'quy-trinh-lam-mau-tai-xuong-may-chuyen-nghiep',
    excerpt: 'Các bước chuẩn bị rập vi tính, may mẫu đối chứng và duyệt thông số trước khi đưa vào sản xuất hàng loạt.',
    category: 'Quy trình sản xuất',
    date: '12/09/2024',
    readTime: '5 phút đọc',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    content: `Giai đoạn may mẫu (Sampling) là bước quan trọng nhất quyết định 90% thành công của một đơn hàng may mặc.

### 9 bước may mẫu tại Arden:
1. **Tiếp nhận Techpack**: Khảo sát bản vẽ kỹ thuật, thông số size và mẫu in thêu.
2. **Ra rập vi tính (CAD/CAM)**: Thiết kế rập chuẩn xác từng milimet và nhảy size.
3. **Tuyển chọn vải và phụ liệu**: Lấy mẫu vải đúng thành phần và định lượng yêu cầu.
4. **Cắt vải mẫu**: Cắt bán thành phẩm cẩn thận theo đường rập.
5. **In/Thêu thử nghiệm**: Thử độ bám mực và kích thước hình in trên vải thật.
6. **May ráp hoàn chỉnh**: Thợ may mẫu chuyên môn cao thực hiện chi tiết từng đường kim.
7. **Ủi hơi và FQC**: Kiểm tra dung sai thông số và thẩm mỹ tổng thể.
8. **Gửi khách hàng test form**: Khách hàng mặc thử thực tế và đánh giá.
9. **Ký niêm phong mẫu duyệt**: Đóng dấu mẫu chuẩn làm căn cứ sản xuất hàng loạt.`
  },
  {
    id: '4',
    title: 'Cách tính giá may gia công chuẩn xác cho đơn hàng thời trang',
    slug: 'cach-tinh-gia-may-gia-cong-chuan-xac',
    excerpt: 'Các yếu tố ảnh hưởng trực tiếp đến giá thành sản phẩm: định mức vải, công may, kỹ thuật in thêu và phụ liệu.',
    category: 'Kinh nghiệm đặt may',
    date: '08/09/2024',
    readTime: '7 phút đọc',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    content: `Để tính toán giá vốn sản phẩm (COGS) chính xác, bạn cần nắm rõ cấu trúc giá thành một sản phẩm may mặc xuất xưởng:

### Công thức tính giá thành:
**Giá xuất xưởng = Chi phí vải chính + Tiền công cắt may + Chi phí in/thêu + Phụ liệu (tag mác, túi zip) + Chi phí đóng gói FQC**

- **Số lượng đặt hàng**: Số lượng càng lớn thì chi phí mở khuôn in, rập vi tính và công may rải chuyền càng được tối ưu, giúp giá thành giảm từ 15% - 35%.
- **Kỹ thuật in/thêu**: In lụa 1 màu sẽ rẻ hơn in đa màu hoặc in DTG tràn thân. Thêu 3D nổi sẽ có chi phí cao hơn thêu phẳng thông thường.`
  },
  {
    id: '5',
    title: 'Những lỗi thường gặp khi đặt may áo thun và cách phòng tránh',
    slug: 'nhung-loi-thuong-gap-khi-dat-may-ao-thun',
    excerpt: 'Tránh các lỗi co rút sau giặt, bung chỉ cổ áo, lệch màu in ấn bằng quy trình kiểm tra chất lượng chặt chẽ.',
    category: 'Kiến thức vải',
    date: '01/09/2024',
    readTime: '5 phút đọc',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    content: `Trong ngành may mặc, nếu không kiểm soát tốt kỹ thuật, sản phẩm rất dễ gặp phải các lỗi làm ảnh hưởng đến uy tín thương hiệu:

### 1. Bo cổ bị bai dão sau vài lần giặt
- **Nguyên nhân**: Dùng bo may thông thường không có sợi spandex hoặc không dệt theo tỷ lệ 1:1.
- **Cách khắc phục**: Arden luôn sử dụng bo dệt sợi dẻo chuyên dụng và may bọc viền mí xích tăng cường chịu lực.

### 2. Vải bị co rút hoặc vặn sườn áo (Torque)
- **Nguyên nhân**: Cắt vải ngay khi vừa xả cuộn mà không để vải "nghỉ" 24 tiếng.
- **Cách khắc phục**: Xả cuộn vải và trải nghỉ tối thiểu 24 - 48 giờ trước khi cắt tự động.

### 3. Hình in bị nứt hoặc dính khi ủi
- **Nguyên nhân**: Mực in kém chất lượng hoặc thời gian sấy ép nhiệt chưa đủ độ chín.
- **Cách khắc phục**: Dùng mực in Plastisol cao cấp và sấy nhiệt qua băng chuyền tự động chuẩn 160°C.`
  }
];

export const careersData: CareerItem[] = [
  {
    id: 'tho-may',
    title: 'Thợ May Mẫu',
    type: 'Toàn thời gian',
    salary: '9 - 15 triệu',
    experience: 'Trên 2 năm kinh nghiệm may mẫu',
    quantity: 3,
    description: 'Thực hiện may mẫu hoàn chỉnh theo rập thiết kế từ bộ phận kỹ thuật; kiểm tra tính khả thi và đề xuất chỉnh sửa đường may.',
    requirements: [
      'Có từ 2 năm kinh nghiệm may mẫu hàng thời trang, áo thun, sơ mi, áo khoác',
      'Đọc hiểu tài liệu kỹ thuật may và bảng thông số size',
      'Sử dụng thành thạo các loại máy may công nghiệp (1 kim, vắt sổ, kansai)'
    ],
    benefits: [
      'Môi trường làm việc máy lạnh, thoáng mát, thiết bị hiện đại',
      'Lương thưởng tháng 13, thưởng hiệu suất đơn hàng',
      'Đầy đủ chế độ BHXH, BHYT, BHTN theo quy định nhà nước'
    ]
  },
  {
    id: 'qc-kiem-hang',
    title: 'QC (Kiểm Hàng)',
    type: 'Toàn thời gian',
    salary: '7 - 12 triệu',
    experience: 'Trên 1 năm vị trí QC xưởng may',
    quantity: 4,
    description: 'Thực hiện kiểm tra chất lượng nguyên phụ liệu đầu vào (IQC), kiểm tra chuyền (IPQC) và kiểm tra thành phẩm 100% trước đóng gói (FQC).',
    requirements: [
      'Cẩn thận, tỉ mỉ, có mắt thẩm mỹ và trách nhiệm cao',
      'Có kiến thức về quy chuẩn đường may, thông số kỹ thuật hàng may mặc',
      'Biết lập biên bản kiểm tra và báo cáo sai sót cho quản lý'
    ],
    benefits: [
      'Được đào tạo nâng cao kỹ năng quản lý chất lượng',
      'Phụ cấp cơm trưa, chuyên cần',
      'Du lịch công ty hàng năm, team building'
    ]
  },
  {
    id: 'ky-thuat-may',
    title: 'Kỹ Thuật May & Ra Rập',
    type: 'Toàn thời gian',
    salary: '12 - 18 triệu',
    experience: 'Trên 3 năm ra rập vi tính Gerber / Optitex',
    quantity: 2,
    description: 'Thiết kế rập vi tính theo hình ảnh/mẫu phát thảo, nhảy size, giác sơ đồ tối ưu định mức vải cho chuyền cắt.',
    requirements: [
      'Thành thạo phần mềm Gerber AccuMark hoặc Optitex',
      'Nắm vững phom dáng oversize, streetwear, công sở',
      'Tư duy tối ưu định mức vải và chi phí sản xuất'
    ],
    benefits: [
      'Thu nhập cạnh tranh theo năng lực và kinh nghiệm',
      'Cơ hội thăng tiến lên Trưởng phòng Kỹ thuật Xưởng',
      'Xét tăng lương định kỳ 6 tháng/lần'
    ]
  },
  {
    id: 'nhan-vien-thiet-ke',
    title: 'Nhân Viên Thiết Kế Rập & Mockup',
    type: 'Toàn thời gian',
    salary: '10 - 15 triệu',
    experience: 'Trên 1 năm thiết kế thời trang',
    quantity: 2,
    description: 'Lên mockup 2D/3D cho khách hàng duyệt, thiết kế file in/thêu vi tính và phối màu theo yêu cầu đặt hàng.',
    requirements: [
      'Sử dụng thành thạo Adobe Illustrator, Photoshop, CLO 3D (nếu có)',
      'Am hiểu xu hướng thời trang giới trẻ và Local Brand',
      'Kỹ năng giao tiếp và làm việc nhóm tốt'
    ],
    benefits: [
      'Môi trường trẻ trung, năng động, khuyến khích sáng tạo',
      'Hỗ trợ máy tính cấu hình cao phục vụ công việc',
      'Thưởng dự án và hoa hồng đơn hàng'
    ]
  }
];

export const policiesData: PolicyItem[] = [
  {
    id: 'chinh-sach-chung',
    title: 'Chính Sách Chung',
    slug: 'chinh-sach-chung',
    lastUpdated: '01/01/2025',
    content: [
      {
        sectionTitle: '1. Mục đích',
        items: [
          'Chính sách này quy định các điều khoản và quy trình sử dụng dịch vụ may gia công tại xưởng may Arden.',
          'Áp dụng cho tất cả các khách hàng cá nhân, Local Brand, doanh nghiệp ký kết hợp đồng sản xuất cùng Arden.'
        ]
      },
      {
        sectionTitle: '2. Cam kết chất lượng',
        items: [
          'Arden cam kết cung cấp sản phẩm đúng chất lượng, đúng tiến độ theo thỏa thuận trong hợp đồng đặt hàng.',
          'Mọi sản phẩm trước khi xuất xưởng đều trải qua quy trình kiểm định chất lượng 3 bước FQC nghiêm ngặt.'
        ]
      },
      {
        sectionTitle: '3. Bảo mật thông tin & Thiết kế (NDA)',
        items: [
          'Chúng tôi cam kết bảo mật tuyệt đối thông tin, hình ảnh thiết kế và file rập độc quyền của khách hàng.',
          'Không sao chép, không chia sẻ hay sử dụng mẫu thiết kế của khách hàng cho bất kỳ bên thứ ba nào.'
        ]
      },
      {
        sectionTitle: '4. Giải quyết tranh chấp',
        items: [
          'Mọi tranh chấp sẽ được ưu tiên giải quyết trên tinh thần hợp tác, thương lượng và vì lợi ích chung của đôi bên.',
          'Trường hợp không đạt được thỏa thuận sẽ đưa ra cơ quan có thẩm quyền tại TP.HCM giải quyết.'
        ]
      }
    ]
  },
  {
    id: 'chinh-sach-bao-mat',
    title: 'Chính Sách Bảo Mật',
    slug: 'chinh-sach-bao-mat',
    lastUpdated: '01/01/2025',
    content: [
      {
        sectionTitle: '1. Thu thập thông tin khách hàng',
        items: [
          'Arden chỉ thu thập các thông tin cần thiết phục vụ cho việc liên hệ, báo giá, lập hợp đồng và giao hàng (Họ tên, SĐT, Email, Tên thương hiệu, Địa chỉ).',
          'Khách hàng hoàn toàn chủ động cung cấp thông tin thông qua form báo giá, liên hệ hoặc tin nhắn tư vấn.'
        ]
      },
      {
        sectionTitle: '2. Sử dụng thông tin',
        items: [
          'Thông tin khách hàng chỉ được dùng nội bộ tại xưởng may Arden để xử lý đơn hàng và chăm sóc hậu mãi.',
          'Tuyệt đối không mua bán, trao đổi thông tin khách hàng cho bên thứ ba vì mục đích thương mại.'
        ]
      }
    ]
  },
  {
    id: 'chinh-sach-thanh-toan',
    title: 'Chính Sách Thanh Toán',
    slug: 'chinh-sach-thanh-toan',
    lastUpdated: '01/01/2025',
    content: [
      {
        sectionTitle: '1. Đặt cọc may mẫu',
        items: [
          'Chi phí may mẫu dao động từ 300.000đ - 700.000đ/mẫu tùy theo độ phức tạp.',
          'Khoản phí may mẫu này sẽ được hoàn lại hoặc khấu trừ trực tiếp 100% vào đơn hàng sản xuất hàng loạt từ 50 sản phẩm trở lên.'
        ]
      },
      {
        sectionTitle: '2. Tiến độ thanh toán đơn hàng sản xuất',
        items: [
          'Đợt 1: Thanh toán 50% giá trị hợp đồng ngay sau khi duyệt mẫu và ký kết hợp đồng để xưởng nhập nguyên phụ liệu.',
          'Đợt 2: Thanh toán 50% còn lại sau khi xưởng hoàn tất sản xuất, nghiệm thu QC và chuẩn bị bàn giao hàng hóa.'
        ]
      }
    ]
  },
  {
    id: 'chinh-sach-doi-tra',
    title: 'Chính Sách Đổi Trả & Bảo Hành',
    slug: 'chinh-sach-doi-tra',
    lastUpdated: '01/01/2025',
    content: [
      {
        sectionTitle: '1. Điều kiện đổi trả hàng lỗi do xưởng',
        items: [
          'Sản phẩm bị lỗi đường may, sai thông số size vượt dung sai cho phép (±1.5cm).',
          'Sản phẩm bị lỗi in/thêu (bong tróc, lem màu, sai màu so với mẫu duyệt).',
          'Vải bị thủng, xước sợi hoặc lỗi dệt từ phía nguyên liệu do xưởng cung cấp.'
        ]
      },
      {
        sectionTitle: '2. Thời gian tiếp nhận và xử lý',
        items: [
          'Khách hàng kiểm tra và gửi phản hồi trong vòng 07 ngày kể từ ngày nhận hàng.',
          'Arden sẽ tiến hành sửa chữa miễn phí hoặc may bù sản phẩm mới trong thời gian từ 3 - 5 ngày làm việc.'
        ]
      }
    ]
  },
  {
    id: 'chinh-sach-van-chuyen',
    title: 'Chính Sách Vận Chuyển',
    slug: 'chinh-sach-van-chuyen',
    lastUpdated: '01/01/2025',
    content: [
      {
        sectionTitle: '1. Giao hàng nội thành TP.HCM',
        items: [
          'Miễn phí giao hàng cho các đơn hàng sản xuất từ 300 sản phẩm trở lên trong khu vực TP.HCM.',
          'Giao bằng xe tải hoặc dịch vụ vận chuyển chuyên nghiệp, đảm bảo hàng hóa nguyên vẹn, không dính nước.'
        ]
      },
      {
        sectionTitle: '2. Giao hàng toàn quốc',
        items: [
          'Hỗ trợ gửi chành xe uy tín, dịch vụ Viettel Post / GHTK / GHN đến tất cả các tỉnh thành trên toàn quốc.',
          'Cung cấp mã vận đơn đầy đủ để khách hàng chủ động theo dõi hành trình đơn hàng.'
        ]
      }
    ]
  }
];

export const faqData = [
  {
    question: 'Số lượng tối thiểu (MOQ) xưởng nhận may là bao nhiêu?',
    answer: 'Arden nhận may linh hoạt từ 30 sản phẩm/mẫu (có thể chia 2-3 size). Điều này giúp các thương hiệu Local Brand mới khởi nghiệp dễ dàng ra mắt và thử nghiệm phản hồi thị trường mà không phải chịu áp lực tồn kho lớn.',
    category: 'Đặt hàng'
  },
  {
    question: 'Thời gian may mẫu và sản xuất hàng loạt mất bao lâu?',
    answer: 'Thời gian may mẫu chuẩn từ 3 - 7 ngày làm việc. Thời gian sản xuất hàng loạt từ 10 - 20 ngày tùy thuộc vào số lượng đơn hàng và độ phức tạp của kỹ thuật may, in/thêu.',
    category: 'Tiến độ'
  },
  {
    question: 'Xưởng có ký cam kết bảo mật mẫu thiết kế và file rập (NDA) không?',
    answer: 'Có 100%. Arden luôn ký thỏa thuận bảo mật thiết kế độc quyền (NDA) với mọi khách hàng. Toàn bộ file rập vi tính, mẫu thiết kế và ý tưởng BST của bạn sẽ được bảo mật tuyệt đối, không chia sẻ hay may lại cho bất kỳ bên nào khác.',
    category: 'Bảo mật'
  },
  {
    question: 'Chi phí may mẫu tính như thế nào? Có được hoàn lại không?',
    answer: 'Phí may mẫu dao động từ 300.000đ - 600.000đ/mẫu (bao gồm công ra rập vi tính và may thành phẩm hoàn chỉnh). Khoản phí này sẽ được HOÀN TRẢ hoặc KHẤU TRỪ 100% vào đơn hàng sản xuất hàng loạt từ 50 sản phẩm trở lên.',
    category: 'Chi phí'
  },
  {
    question: 'Arden có hỗ trợ dịch vụ trọn gói gồm in/thêu, mác áo, túi zip không?',
    answer: 'Có, Arden cung cấp dịch vụ sản xuất trọn gói ODM/OEM bao gồm: Cung ứng vải theo yêu cầu, in lụa/DTG/thêu vi tính, dệt nhãn mác thương hiệu, gắn thẻ bài hangtag, ủi hơi và đóng túi zip in logo hoàn chỉnh sẵn sàng giao đến tay người tiêu dùng.',
    category: 'Dịch vụ'
  },
  {
    question: 'Chính sách bảo hành và đổi trả hàng lỗi xử lý thế nào?',
    answer: 'Arden cam kết bảo hành 1 đổi 1 hoặc sửa chữa miễn phí trong vòng 7 ngày nếu sản phẩm gặp lỗi từ phía xưởng (lỗi đường chỉ, sai thông số size vượt dung sai cho phép, lỗi in/thêu bong tróc hay vải rách lỗi).',
    category: 'Bảo hành'
  }
];

export const testimonialsData = [
  {
    id: '1',
    brandName: 'ADC Streetwear',
    founderName: 'Minh Khang',
    role: 'Founder & Creative Director',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Đã hợp tác với Arden hơn 2 năm cho 8 bộ sưu tập áo thun và hoodie. Chất lượng bo cổ dệt và đường may mí rất kỹ, tiến độ luôn chuẩn xác trước ngày launching.',
    productType: 'Áo thun Oversize & Hoodie',
    quantity: '5.000+ sản phẩm/năm',
    rating: 5
  },
  {
    id: '2',
    brandName: 'Urban Mode Studio',
    founderName: 'Thu Hà',
    role: 'Co-Founder & Operations',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    content: 'Điểm mình thích nhất ở Arden là hỗ trợ nhiệt tình từ lúc test rập vi tính đến khi chọn vải. Dù đơn đầu chỉ may 50 chiếc thử nghiệm xưởng vẫn chăm chút cực kỳ kỹ lưỡng.',
    productType: 'Sơ mi Oxford & Quần Cargo',
    quantity: '1.200 sản phẩm',
    rating: 5
  },
  {
    id: '3',
    brandName: 'The Raw Denim Co.',
    founderName: 'Quốc Bảo',
    role: 'Product Lead',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Đường may chịu lực trên quần jean và wash màu chuẩn mẫu duyệt đến 99%. Đội ngũ QC kiểm hàng rất kỹ, tỷ lệ lỗi dưới 0.2%, thực sự an tâm khi giao đơn lớn.',
    productType: 'Quần Jeans Denim & Short',
    quantity: '3.000+ sản phẩm',
    rating: 5
  }
];

export const priceEstimates = [
  {
    category: 'Áo Thun Oversize / Boxy',
    moq: 'Từ 30 sản phẩm',
    fabric: 'Cotton 100% 2C (220-250 GSM)',
    priceRange: '65.000đ - 110.000đ',
    leadTime: '10 - 15 ngày',
    details: 'Bao gồm công cắt may, in lụa 1-2 màu, ủi hơi và đóng gói túi nilon.'
  },
  {
    category: 'Áo Sơ Mi Thiết Kế',
    moq: 'Từ 30 sản phẩm',
    fabric: 'Oxford / Linen / Lụa cát',
    priceRange: '110.000đ - 170.000đ',
    leadTime: '12 - 18 ngày',
    details: 'May mí cuộn sắc sảo, cổ ép keo không phồng rộp, đóng nút khắc laser.'
  },
  {
    category: 'Quần Kaki / Cargo Pants',
    moq: 'Từ 50 sản phẩm',
    fabric: 'Kaki thun / Vải dù nhăn / Denim',
    priceRange: '130.000đ - 220.000đ',
    leadTime: '15 - 20 ngày',
    details: 'May gia cố bọ chịu lực, dây kéo YKK đồng bộ, xử lý wash mềm.'
  },
  {
    category: 'Áo Khoác Bomber / Hoodie',
    moq: 'Từ 30 sản phẩm',
    fabric: 'Nỉ bông 380 GSM / Dù 2 lớp',
    priceRange: '160.000đ - 290.000đ',
    leadTime: '15 - 22 ngày',
    details: 'Lót lưới/lụa cao cấp, khóa kéo đồng mạ bóng, bo dệt sọc độc quyền.'
  }
];

export const sizeChartTshirt = [
  { size: 'S', length: 68, chest: 52, shoulder: 48, sleeve: 21, weight: '45 - 55 kg' },
  { size: 'M', length: 71, chest: 55, shoulder: 51, sleeve: 22, weight: '55 - 68 kg' },
  { size: 'L', length: 74, chest: 58, shoulder: 54, sleeve: 23, weight: '68 - 78 kg' },
  { size: 'XL', length: 77, chest: 61, shoulder: 57, sleeve: 24, weight: '78 - 90 kg' },
  { size: 'XXL', length: 80, chest: 64, shoulder: 60, sleeve: 25, weight: '90 - 105 kg' },
];

