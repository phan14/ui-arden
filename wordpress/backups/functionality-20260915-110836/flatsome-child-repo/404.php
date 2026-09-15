<?php
defined( 'ABSPATH' ) || exit;
get_header();
?>
<main class="arden-page"><section class="arden-section arden-section--alt"><div class="arden-container arden-content-narrow" style="text-align:center">
	<div class="arden-404-code">404</div>
	<p class="arden-eyebrow">KHÔNG TÌM THẤY TRANG YÊU CẦU</p>
	<h1 class="arden-heading">TRANG BẠN TÌM KIẾM KHÔNG TỒN TẠI HOẶC ĐÃ ĐỔI ĐỊA CHỈ</h1>
	<p>Đường dẫn có thể đã thay đổi. Vui lòng kiểm tra lại URL hoặc chọn một trong các liên kết nhanh dưới đây:</p>
	<a class="arden-button" href="<?php echo esc_url( home_url( '/' ) ); ?>">VỀ TRANG CHỦ ARDEN</a>
	<a class="arden-button arden-button--outline" href="<?php echo esc_url( home_url( '/bao-gia/' ) ); ?>">NHẬN BÁO GIÁ NHANH</a>
	<nav class="arden-404-links"><a href="<?php echo esc_url( home_url( '/dich-vu/' ) ); ?>">Dịch vụ may</a><a href="<?php echo esc_url( home_url( '/du-an/' ) ); ?>">Dự án mẫu</a><a href="<?php echo esc_url( home_url( '/lien-he/' ) ); ?>">Liên hệ xưởng</a></nav>
</div></section></main>
<?php get_footer(); ?>
