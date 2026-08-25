<?php
/** Dynamic content elements for use inside UX Builder. */

defined( 'ABSPATH' ) || exit;

/** Shared card loop for posts and the optional project CPT. */
function arden_content_grid_shortcode( $atts, $content = null, $tag = '' ) {
	$is_projects = 'arden_projects' === $tag;
	$atts        = shortcode_atts(
		array(
			'count'    => $is_projects ? 6 : 3,
			'category' => '',
		),
		$atts,
		$tag
	);

	if ( $is_projects && ! post_type_exists( 'project' ) ) {
		return current_user_can( 'edit_posts' )
			? '<p class="arden-empty">' . esc_html__( 'Không thể hiển thị dự án: post type project chưa được đăng ký.', 'arden-flatsome-child' ) . '</p>'
			: '';
	}

	$post_type = $is_projects ? 'project' : 'post';
	$args      = array(
		'post_type'           => $post_type,
		'post_status'         => 'publish',
		'posts_per_page'      => max( 1, min( 12, absint( $atts['count'] ) ) ),
		'ignore_sticky_posts' => true,
		'no_found_rows'       => true,
	);

	if ( ! $is_projects && $atts['category'] ) {
		$args['category_name'] = sanitize_title( $atts['category'] );
	}

	$query = new WP_Query( $args );
	if ( ! $query->have_posts() ) {
		return current_user_can( 'edit_posts' )
			? '<p class="arden-empty">' . esc_html__( 'Chưa có nội dung để hiển thị.', 'arden-flatsome-child' ) . '</p>'
			: '';
	}

	ob_start();
	?>
	<div class="arden-content-grid arden-content-grid--<?php echo esc_attr( $post_type ); ?>">
		<?php while ( $query->have_posts() ) : $query->the_post(); ?>
			<article <?php post_class( 'arden-card arden-content-card' ); ?>>
				<a class="arden-card__media" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
					<?php if ( has_post_thumbnail() ) : ?>
						<?php the_post_thumbnail( 'arden-card', array( 'loading' => 'lazy' ) ); ?>
					<?php else : ?>
						<span class="arden-card__placeholder"></span>
					<?php endif; ?>
				</a>
				<div class="arden-card__body">
					<p class="arden-card__meta"><?php echo esc_html( get_the_date() ); ?></p>
					<h3 class="arden-card__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
					<p class="arden-card__excerpt"><?php echo esc_html( wp_trim_words( get_the_excerpt(), 22 ) ); ?></p>
					<a class="arden-button arden-button--outline" href="<?php the_permalink(); ?>"><?php esc_html_e( 'Xem chi tiết', 'arden-flatsome-child' ); ?></a>
				</div>
			</article>
		<?php endwhile; ?>
	</div>
	<?php
	wp_reset_postdata();
	return ob_get_clean();
}
add_shortcode( 'arden_recent_posts', 'arden_content_grid_shortcode' );
add_shortcode( 'arden_projects', 'arden_content_grid_shortcode' );
