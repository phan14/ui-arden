<?php
/** Local-only creation and placement of the approved CF7 forms. */
require_once 'C:/xampp/htdocs/mytest/wp-load.php';
wp_set_current_user( 1 );
if ( ! class_exists( 'WPCF7_ContactForm' ) ) { fwrite( STDERR, "CF7 unavailable\n" ); exit( 1 ); }

$forms = array(
	'contact' => array(
		'title' => 'Arden Contact',
		'page' => 96,
		'file' => dirname( __DIR__ ) . '/import/pages/contact-flatsome.txt',
		'form' => <<<'FORM'
<div class="arden-cf7-form arden-cf7-form--contact">
<label>Họ và tên của bạn: <span aria-hidden="true">*</span> [text* your-name autocomplete:name placeholder "Nguyễn Văn A"]</label>
<label>Số điện thoại / Zalo: <span aria-hidden="true">*</span> [tel* your-phone autocomplete:tel placeholder "0901 234 567"]</label>
<label>Email liên hệ: [email your-email autocomplete:email placeholder "brand@gmail.com"]</label>
<label>Dòng sản phẩm quan tâm: [select product-interest "May áo thun Local Brand" "May áo sơ mi thời trang" "May quần Kaki / Cargo / Jeans" "May áo khoác Varsity / Hoodie" "Tư vấn trọn gói ODM/OEM"]</label>
<label>Ngày dự kiến ghé thăm xưởng (nếu có): [date visit-date]</label>
<label>Nội dung yêu cầu chi tiết (chất liệu, số lượng, lưu ý): [textarea your-message placeholder "Mô tả ý tưởng, định lượng vải mong muốn hoặc câu hỏi bạn cần giải đáp..."]</label>
[submit "GỬI YÊU CẦU TƯ VẤN NGAY"]
</div>
FORM
	),
	'quote' => array(
		'title' => 'Arden Quote',
		'page' => 97,
		'file' => dirname( __DIR__ ) . '/import/pages/quote-flatsome.txt',
		'form' => <<<'FORM'
<div class="arden-cf7-form arden-cf7-form--quote">
<h3>1. THÔNG SỐ SẢN PHẨM CẦN GIA CÔNG</h3>
<label>Loại sản phẩm: [select product-type "Áo thun Oversize / Boxy" "Áo thun Polo bo dệt" "Áo sơ mi Oxford / Cuban" "Quần Short / Cargo Pants" "Áo khoác Varsity / Hoodie" "Dòng sản phẩm khác"]</label>
<label>Số lượng đặt may dự kiến: [select quantity "30 - 50 sản phẩm|30 - 50 sản phẩm (MOQ tối thiểu)" "50 - 100 sản phẩm" "100 - 300 sản phẩm" "300 - 500 sản phẩm" "Trên 500 sản phẩm|Trên 500 sản phẩm (Giá sỉ ưu đãi)"]</label>
<label>Chất liệu vải mong muốn: [select fabric "Cotton 100% 2C (230-250 GSM)|Cotton 100% 2C (230-250 GSM) - Form Boxy" "Cotton 100% 4C (210-230 GSM)|Cotton 100% 4C (210-230 GSM) - Mềm co giãn" "Vải Cá Sấu Cotton / Poly|Vải Cá Sấu Cotton / Poly (Dành cho Polo)" "Vải Oxford / Đũi xước / Lụa|Vải Oxford / Đũi xước / Lụa (Sơ mi)" "Kaki thun / Jeans 12oz|Kaki thun / Jeans 12oz (Quần)" "Nỉ bông 380 GSM / Dù gió|Nỉ bông 380 GSM / Dù gió (Hoodie/Khoác)" "Cần xưởng tư vấn chất liệu phù hợp"]</label>
<label>Tình trạng thiết kế &amp; Rập mẫu: [select pattern-status "yes|Đã có sẵn file thiết kế (AI/PSD/PDF)" "no|Chỉ có hình ảnh tham khảo / ý tưởng" "need_design|Cần xưởng hỗ trợ lên rập & vẽ đồ họa"]</label>
<fieldset><legend>Kỹ thuật In / Thêu mong muốn (chọn nhiều mục):</legend>[checkbox techniques use_label_element default:1 "In lụa Plastisol" "In kỹ thuật số DTG" "Thêu vi tính 3D / Thêu xù" "In phản quang / Decal PU" "In tràn thân AOP" "Áo trơn (Không in thêu)"]</fieldset>
<h3>2. THÔNG TIN NGƯỜI LIÊN HỆ &amp; THƯƠNG HIỆU</h3>
<label>Họ và tên của bạn: <span aria-hidden="true">*</span> [text* your-name autocomplete:name placeholder "Nguyễn Văn A"]</label>
<label>Số điện thoại / Zalo nhận báo giá: <span aria-hidden="true">*</span> [tel* your-phone autocomplete:tel placeholder "0901 234 567"]</label>
<label>Tên thương hiệu / Local Brand (nếu có): [text brand-name placeholder "Ví dụ: Hades, Degrey, Arden..."]</label>
<label>Email tiếp nhận file báo giá: [email your-email autocomplete:email placeholder "brand@gmail.com"]</label>
<label>Ghi chú chi tiết yêu cầu bổ sung: [textarea your-message placeholder "Mô tả cụ thể về vị trí in, kích thước hình in, tiến độ cần giao hàng gấp..."]</label>
[submit "XÁC NHẬN GỬI YÊU CẦU BÁO GIÁ NHANH"]
</div>
FORM
	),
);

foreach ( $forms as $key => $config ) {
	$existing = get_page_by_title( $config['title'], OBJECT, WPCF7_ContactForm::post_type );
	$form = $existing ? WPCF7_ContactForm::get_instance( $existing->ID ) : WPCF7_ContactForm::get_template();
	$form->set_title( $config['title'] );
	$properties = $form->get_properties();
	$properties['form'] = $config['form'];
	$properties['mail']['active'] = false;
	$properties['mail']['recipient'] = 'REQUIRES_PRODUCTION_RECIPIENT';
	$properties['additional_settings'] = "skip_mail: on\n";
	$form->set_properties( $properties );
	$form->save();
	$id = $form->id();
	update_post_meta( $id, '_arden_recipient_status', 'REQUIRES_PRODUCTION_RECIPIENT' );
	$shortcode = '[contact-form-7 id="' . $id . '" title="' . $config['title'] . '"]';
	$content = file_get_contents( $config['file'] );
	$content = preg_replace( '/\[ux_html class="arden-special-element arden-special-element--form"\]<form\b.*?<\/form>\[\/ux_html\]/s', $shortcode, $content, 1, $count );
	if ( 1 !== $count ) { fwrite( STDERR, "Form block not found: {$key}\n" ); exit( 1 ); }
	file_put_contents( $config['file'], $content );
	$result = wp_update_post( wp_slash( array( 'ID' => $config['page'], 'post_content' => $content ) ), true );
	if ( is_wp_error( $result ) ) { fwrite( STDERR, $result->get_error_message() . "\n" ); exit( 1 ); }
	printf( "%s\t%d\tpage:%d\t%s\n", strtoupper( $key ), $id, $config['page'], get_post_status( $config['page'] ) );
}
