<?php
defined( 'ABSPATH' ) || exit;
get_header();
arden_page_banner( 'CHUYÊN MỤC SẢN PHẨM GIA CÔNG', 'DANH MỤC: ' . single_cat_title( '', false ), category_description() ? wp_strip_all_tags( category_description() ) : 'Tổng hợp các mẫu thiết kế, chất liệu vải và nội dung thực tế trong chuyên mục này tại xưởng may Arden.' );
?>
<main class="arden-page"><section class="arden-section"><div class="arden-container">
	<?php arden_dynamic_card_grid(); the_posts_pagination(); ?>
</div></section></main>
<?php get_footer(); ?>
