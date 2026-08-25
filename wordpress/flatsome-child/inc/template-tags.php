<?php
/** Template helpers which defer SEO output to Rank Math when available. */

defined( 'ABSPATH' ) || exit;

/**
 * Print Rank Math breadcrumbs, falling back to a small accessible trail.
 * Do not call this on the front page.
 */
function arden_breadcrumbs() {
	if ( function_exists( 'rank_math_the_breadcrumbs' ) ) {
		rank_math_the_breadcrumbs();
		return;
	}

	if ( is_front_page() ) {
		return;
	}

	echo '<nav class="arden-breadcrumbs" aria-label="' . esc_attr__( 'Breadcrumb', 'arden-flatsome-child' ) . '">';
	echo '<a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Trang chủ', 'arden-flatsome-child' ) . '</a>';
	echo '<span aria-hidden="true">/</span><span aria-current="page">' . esc_html( wp_get_document_title() ) . '</span>';
	echo '</nav>';
}
