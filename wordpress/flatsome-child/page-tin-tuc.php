<?php
/** Template Name: Arden News Archive */
defined( 'ABSPATH' ) || exit;
get_header();
arden_page_banner( 'GÓC CHIA SẺ KINH NGHIỆM LOCAL BRAND', 'TIN TỨC & KIẾN THỨC MAY MẶC', 'Cập nhật kiến thức chuyên sâu về chất liệu vải, kỹ thuật may mặc công nghiệp và kinh nghiệm tối ưu chi phí cho các nhà sáng lập thương hiệu thời trang.' );
$arden_news_query = new WP_Query( array( 'post_type' => 'post', 'post_status' => ( current_user_can( 'edit_posts' ) && ! empty( $_GET['arden_validate_drafts'] ) ) ? array( 'publish', 'draft' ) : 'publish', 'paged' => max( 1, get_query_var( 'paged' ) ) ) );
?>
<main class="arden-page"><section class="arden-section arden-blog"><div class="arden-container">
	<?php arden_dynamic_card_grid( $arden_news_query ); ?>
</div></section></main>
<?php wp_reset_postdata(); get_footer(); ?>
