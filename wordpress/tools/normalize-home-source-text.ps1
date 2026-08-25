$replacements = [ordered]@{
  'MAY ÁO THUN' = 'May Áo Thun'
  'MAY ÁO SƠ MI' = 'May Áo Sơ Mi'
  'MAY QUẦN' = 'May Quần'
  'MAY ÁO KHOÁC' = 'May Áo Khoác'
  'GIA CÔNG LOCAL BRAND' = 'Gia Công Local Brand'
  'BST ÁO THUN LOCAL BRAND ADC' = 'BST Áo Thun Local Brand ADC'
  'BST HOODIE STREETWEAR MÙA ĐÔNG' = 'BST Hoodie Streetwear Mùa Đông'
  'QUẦN JEAN NAM FORM ỐNG RỘNG' = 'Quần Jean Nam Form Ống Rộng'
  'ÁO SƠ MI OVERSIZE CASUAL' = 'Áo Sơ Mi Oversize Casual'
  'JACKET BOMBER PHỐI MÀU' = 'Jacket Bomber Phối Màu'
  'ĐỒNG PHỤC DOANH NGHIỆP TECH' = 'Đồng Phục Doanh Nghiệp Tech'
  'XƯỞNG MAY ARDEN TP.HCM' = 'Xưởng May Arden TP.HCM'
  'CHẤT LƯỢNG ỔN ĐỊNH' = 'Chất lượng ổn định'
  'HỖ TRỢ PHÁT TRIỂN MẪU' = 'Hỗ trợ phát triển mẫu'
  'TIẾN ĐỘ ĐÚNG HẸN' = 'Tiến độ đúng hẹn'
  'GIÁ CẢ CẠNH TRANH' = 'Giá cả cạnh tranh'
  'BẢO MẬT THIẾT KẾ' = 'Bảo mật thiết kế'
  'ĐỒNG HÀNH LÂU DÀI' = 'Đồng hành lâu dài'
  'PHÒNG PHÁT TRIỂN MẪU &amp; RẬP CAD' = 'Phòng Phát Triển Mẫu &amp; Rập CAD'
  'PHÂN XƯỞNG TRẢI &amp; CẮT VẢI TỰ ĐỘNG' = 'Phân Xưởng Trải &amp; Cắt Vải Tự Động'
  'DÂY CHUYỀN MAY JUKI CHUYÊN DỤNG' = 'Dây Chuyền May Juki Chuyên Dụng'
  'KHU VỰC QC, ỦI HƠI &amp; ĐÓNG GÓI THÀNH PHẨM' = 'Khu Vực QC, Ủi Hơi &amp; Đóng Gói Thành Phẩm'
  'TIẾP NHẬN YÊU CẦU' = 'Tiếp nhận yêu cầu'
  'TƯ VẤN &amp; BÁO GIÁ' = 'Tư vấn &amp; Báo giá'
  'LÀM RẬP &amp; MAY MẪU' = 'Làm rập &amp; May mẫu'
  'DUYỆT MẪU' = 'Duyệt mẫu'
  'SẢN XUẤT HÀNG LOẠT' = 'Sản xuất hàng loạt'
  'IN / THÊU' = 'In / Thêu'
  'KIỂM TRA QC 3 BƯỚC' = 'Kiểm tra QC 3 bước'
  'ĐÓNG GÓI CHUẨN' = 'Đóng gói chuẩn'
  'GIAO HÀNG ĐÚNG HẸN' = 'Giao hàng đúng hẹn'
}

$files = @((Join-Path $PSScriptRoot '..\import\home-flatsome.txt')) + (Get-ChildItem (Join-Path $PSScriptRoot '..\import\ux-blocks\*.txt')).FullName
foreach ($file in $files) {
  $content = Get-Content -Raw -Encoding utf8 $file
  foreach ($pair in $replacements.GetEnumerator()) {
    $content = $content.Replace("<h3>$($pair.Key)</h3>", "<h3>$($pair.Value)</h3>")
    $content = $content.Replace(" — $($pair.Key)</h3>", " — $($pair.Value)</h3>")
  }
  Set-Content -LiteralPath $file -Value $content -Encoding utf8 -NoNewline
}
