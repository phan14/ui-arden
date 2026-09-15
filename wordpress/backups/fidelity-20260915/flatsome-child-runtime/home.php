<?php
defined( 'ABSPATH' ) || exit;
get_header();
arden_page_banner( 'CẨM NANG MAY MẶC', 'GÓC KINH NGHIỆM CHO NHÀ SÁNG LẬP LOCAL BRAND', 'Chia sẻ kiến thức chuyên sâu về chất liệu vải, định mức và quản trị chi phí sản xuất.' );
?>
<main class="arden-page"><section class="arden-section arden-blog"><div class="arden-container">
	<?php arden_dynamic_card_grid(); the_posts_pagination(); ?>
</div></section></main>
<?php get_footer(); ?>
