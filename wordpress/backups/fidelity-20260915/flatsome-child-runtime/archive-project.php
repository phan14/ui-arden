<?php
defined( 'ABSPATH' ) || exit;
get_header();
arden_page_banner( 'HƠN 500.000+ SẢN PHẨM ĐÃ XUẤT XƯỞNG', 'DỰ ÁN & BỘ SƯU TẬP ĐÃ GIA CÔNG', 'Tham khảo các dòng sản phẩm thời trang thực tế đã sản xuất tại xưởng may Arden cho các đối tác thương hiệu Local Brand và doanh nghiệp.' );
?>
<main class="arden-page">
	<section class="arden-section arden-project-archive"><div class="arden-container">
		<header class="arden-section-title"><p class="arden-eyebrow">DANH MỤC THỰC TẾ</p><h2>BỘ SƯU TẬP MẪU THEO TỪNG CHỦNG LOẠI</h2><p>Chọn từng danh mục sản phẩm bên dưới để xem hình ảnh thực tế, thông số vải và quy mô đặt may từng đơn hàng.</p></header>
		<?php arden_dynamic_card_grid(); the_posts_pagination(); ?>
	</div></section>
</main>
<?php get_footer(); ?>
