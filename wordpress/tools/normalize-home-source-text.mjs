import fs from 'node:fs';
import path from 'node:path';

const replacements = new Map([
  ['MAY ÁO THUN','May Áo Thun'],['MAY ÁO SƠ MI','May Áo Sơ Mi'],['MAY QUẦN','May Quần'],['MAY ÁO KHOÁC','May Áo Khoác'],['GIA CÔNG LOCAL BRAND','Gia Công Local Brand'],
  ['BST ÁO THUN LOCAL BRAND ADC','BST Áo Thun Local Brand ADC'],['BST HOODIE STREETWEAR MÙA ĐÔNG','BST Hoodie Streetwear Mùa Đông'],['QUẦN JEAN NAM FORM ỐNG RỘNG','Quần Jean Nam Form Ống Rộng'],['ÁO SƠ MI OVERSIZE CASUAL','Áo Sơ Mi Oversize Casual'],['JACKET BOMBER PHỐI MÀU','Jacket Bomber Phối Màu'],['ĐỒNG PHỤC DOANH NGHIỆP TECH','Đồng Phục Doanh Nghiệp Tech'],
  ['XƯỞNG MAY ARDEN TP.HCM','Xưởng May Arden TP.HCM'],['CHẤT LƯỢNG ỔN ĐỊNH','Chất lượng ổn định'],['HỖ TRỢ PHÁT TRIỂN MẪU','Hỗ trợ phát triển mẫu'],['TIẾN ĐỘ ĐÚNG HẸN','Tiến độ đúng hẹn'],['GIÁ CẢ CẠNH TRANH','Giá cả cạnh tranh'],['BẢO MẬT THIẾT KẾ','Bảo mật thiết kế'],['ĐỒNG HÀNH LÂU DÀI','Đồng hành lâu dài'],
  ['PHÒNG PHÁT TRIỂN MẪU &amp; RẬP CAD','Phòng Phát Triển Mẫu &amp; Rập CAD'],['PHÂN XƯỞNG TRẢI &amp; CẮT VẢI TỰ ĐỘNG','Phân Xưởng Trải &amp; Cắt Vải Tự Động'],['DÂY CHUYỀN MAY JUKI CHUYÊN DỤNG','Dây Chuyền May Juki Chuyên Dụng'],['KHU VỰC QC, ỦI HƠI &amp; ĐÓNG GÓI THÀNH PHẨM','Khu Vực QC, Ủi Hơi &amp; Đóng Gói Thành Phẩm'],
  ['TIẾP NHẬN YÊU CẦU','Tiếp nhận yêu cầu'],['TƯ VẤN &amp; BÁO GIÁ','Tư vấn &amp; Báo giá'],['LÀM RẬP &amp; MAY MẪU','Làm rập &amp; May mẫu'],['DUYỆT MẪU','Duyệt mẫu'],['SẢN XUẤT HÀNG LOẠT','Sản xuất hàng loạt'],['IN / THÊU','In / Thêu'],['KIỂM TRA QC 3 BƯỚC','Kiểm tra QC 3 bước'],['ĐÓNG GÓI CHUẨN','Đóng gói chuẩn'],['GIAO HÀNG ĐÚNG HẸN','Giao hàng đúng hẹn']
  ,['MINH KHANG','Minh Khang'],['THU HÀ','Thu Hà'],['QUỐC BẢO','Quốc Bảo']
  ,['DIỆN TÍCH NHÀ XƯỞNG HƠN 1.000M² TẠI TP.HCM','Diện tích nhà xưởng hơn 1.000m² tại TP.HCM'],['HƠN 100 MÁY MAY CHUYÊN DỤNG HIỆN ĐẠI','Hơn 100 máy may chuyên dụng hiện đại'],['ĐỘI NGŨ 60+ CÔNG NHÂN MAY LÀNH NGHỀ','Đội ngũ 60+ công nhân may lành nghề'],['KIỂM SOÁT CHẤT LƯỢNG 3 BƯỚC (IQC - IPQC - FQC)','Kiểm soát chất lượng 3 bước (IQC - IPQC - FQC)'],['NĂNG LỰC SẢN XUẤT 50.000+ SẢN PHẨM/THÁNG','Năng lực sản xuất 50.000+ sản phẩm/tháng'],['NHẬN ĐƠN HÀNG TỪ 30 SẢN PHẨM','Nhận đơn hàng từ 30 sản phẩm']
]);
const root = path.resolve('wordpress/import');
const files = [path.join(root,'home-flatsome.txt'), ...fs.readdirSync(path.join(root,'ux-blocks')).filter(x=>x.endsWith('.txt')).map(x=>path.join(root,'ux-blocks',x))];
for (const file of files) {
  let value = fs.readFileSync(file,'utf8');
  for (const [from,to] of replacements) {
    value = value.replaceAll(`<h3>${from}</h3>`,`<h3>${to}</h3>`).replaceAll(` — ${from}</h3>`,` — ${to}</h3>`);
  }
  value = value.replace(/<h3>(\d{2}) — ([^<]+)<\/h3>/g, '<span class="arden-step-number" aria-hidden="true">$1</span><h3>$2</h3>');
  value = value.replace('[featured_box class="arden-trust-item arden-trust-item--package"]<h3>', '[featured_box class="arden-trust-item arden-trust-item--package"][arden_icon name="package"]<h3>')
    .replace('[featured_box class="arden-trust-item arden-trust-item--shield"]<h3>', '[featured_box class="arden-trust-item arden-trust-item--shield"][arden_icon name="shield"]<h3>')
    .replace('[featured_box class="arden-trust-item arden-trust-item--clock"]<h3>', '[featured_box class="arden-trust-item arden-trust-item--clock"][arden_icon name="clock"]<h3>')
    .replace('[featured_box class="arden-trust-item arden-trust-item--layers"]<h3>', '[featured_box class="arden-trust-item arden-trust-item--layers"][arden_icon name="layers"]<h3>');
  fs.writeFileSync(file,value,'utf8');
}
