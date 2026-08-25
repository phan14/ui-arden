<?php
defined( 'ABSPATH' ) || exit;
get_header();
arden_page_banner( 'TÌM KIẾM NỘI DUNG', sprintf( 'KẾT QUẢ TÌM KIẾM: %s', get_search_query() ), 'Kết quả từ bài viết, dự án và nội dung đang được quản lý trong WordPress.' );
?>
<main class="arden-page"><section class="arden-section"><div class="arden-container">
	<?php get_search_form(); arden_dynamic_card_grid(); the_posts_pagination(); ?>
</div></section></main>
<?php get_footer(); ?>
