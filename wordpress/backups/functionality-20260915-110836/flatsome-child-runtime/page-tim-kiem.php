<?php
/** Template Name: Arden Search Landing */
defined( 'ABSPATH' ) || exit;
$query_text = isset( $_GET['q'] ) ? sanitize_text_field( wp_unslash( $_GET['q'] ) ) : 'áo thun';
$types = array(
	'page' => array( 'label' => 'DỊCH VỤ MAY GIA CÔNG', 'tab' => 'DỊCH VỤ MAY', 'limit' => 2, 'icon' => 'layers' ),
	'project' => array( 'label' => 'DỰ ÁN & BỘ SƯU TẬP MẪU', 'tab' => 'DỰ ÁN & BST', 'limit' => 3, 'icon' => 'sparkles' ),
	'post' => array( 'label' => 'CẨM NANG & KIẾN THỨC SẢN XUẤT', 'tab' => 'KIẾN THỨC & CẨM NANG', 'limit' => 2, 'icon' => 'book' ),
);
$results = array(); $total = 0;
foreach ( $types as $post_type => $settings ) {
	$results[ $post_type ] = new WP_Query( array( 'post_type' => $post_type, 'post_status' => 'publish', 'posts_per_page' => $settings['limit'], 's' => $query_text, 'no_found_rows' => true, 'ignore_sticky_posts' => true ) );
	$total += $results[ $post_type ]->post_count;
}
get_header();
?>
<main class="arden-page arden-search-landing">
	<?php arden_page_banner( 'TÌM KIẾM THÔNG TIN', 'KẾT QUẢ TÌM KIẾM', 'Tìm kiếm dịch vụ may gia công, sản phẩm mẫu và bài viết hướng dẫn kỹ thuật trên hệ thống Arden.' ); ?>
	<section class="arden-search-tools" aria-label="Thanh tìm kiếm"><div class="arden-container arden-search-container">
		<form action="<?php echo esc_url( get_permalink() ); ?>" method="get" role="search"><label class="screen-reader-text" for="arden-search-query">Từ khóa tìm kiếm</label><div class="arden-search-control"><?php echo do_shortcode( '[arden_icon name="search"]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?><input id="arden-search-query" name="q" type="search" value="<?php echo esc_attr( $query_text ); ?>" placeholder="Nhập từ khóa tìm kiếm (Ví dụ: Áo thun, sơ mi, rập CAD, in lụa, cotton 250 gsm...)"></div></form>
		<div class="arden-search-toolbar"><div class="arden-search-tabs" role="tablist" aria-label="Lọc kết quả"><button type="button" class="is-active" role="tab" aria-selected="true" data-search-type="all">TẤT CẢ KẾT QUẢ</button><?php foreach ( $types as $post_type => $settings ) : ?><button type="button" role="tab" aria-selected="false" data-search-type="<?php echo esc_attr( $post_type ); ?>"><?php echo esc_html( $settings['tab'] ); ?></button><?php endforeach; ?></div><p class="arden-search-count">Tìm thấy <strong><?php echo esc_html( $total ); ?></strong> kết quả cho “<?php echo esc_html( $query_text ); ?>”</p></div>
	</div></section>
	<section class="arden-search-results" aria-label="Danh sách kết quả"><div class="arden-container arden-search-results__inner">
	<?php foreach ( $types as $post_type => $settings ) : $loop = $results[ $post_type ]; if ( ! $loop->have_posts() ) { continue; } ?>
		<div class="arden-search-group" data-result-group="<?php echo esc_attr( $post_type ); ?>"><h2><?php echo do_shortcode( '[arden_icon name="' . esc_attr( $settings['icon'] ) . '"]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?><span><?php echo esc_html( $settings['label'] ); ?> (<?php echo esc_html( $loop->post_count ); ?>)</span></h2><div class="arden-search-group__items arden-search-group__items--<?php echo esc_attr( $post_type ); ?>">
		<?php while ( $loop->have_posts() ) : $loop->the_post(); ?><article class="arden-search-result arden-search-result--<?php echo esc_attr( $post_type ); ?>" data-result-type="<?php echo esc_attr( $post_type ); ?>"><?php if ( 'project' === $post_type && has_post_thumbnail() ) : ?><a class="arden-search-result__media" href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'medium_large' ); ?></a><?php endif; ?><div><p class="arden-search-result__type"><?php echo esc_html( $settings['tab'] ); ?></p><h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3><p><?php echo esc_html( wp_trim_words( get_the_excerpt(), 'post' === $post_type ? 20 : 16 ) ); ?></p></div><a class="arden-search-result__link" href="<?php the_permalink(); ?>"><?php echo esc_html( 'post' === $post_type ? 'ĐỌC BÀI VIẾT' : 'XEM CHI TIẾT' ); ?> <?php echo do_shortcode( '[arden_icon name="arrow-right"]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></a></article><?php endwhile; wp_reset_postdata(); ?>
		</div></div>
	<?php endforeach; ?>
	<?php if ( 0 === $total ) : ?><p class="arden-empty">Không tìm thấy kết quả phù hợp với từ khóa “<?php echo esc_html( $query_text ); ?>”.</p><?php endif; ?>
	</div></section>
	<?php echo do_shortcode( '[block id="arden-cta"]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</main>
<?php get_footer(); ?>
