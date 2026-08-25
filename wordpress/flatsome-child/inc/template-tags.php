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

/** Render the shared inner-page banner without duplicating SEO metadata. */
function arden_page_banner( $badge, $title, $description = '' ) {
	echo '<section class="arden-page-hero"><div class="arden-container arden-page-hero__content">';
	arden_breadcrumbs();
	echo '<p class="arden-eyebrow">' . esc_html( $badge ) . '</p>';
	echo '<h1 class="arden-heading">' . esc_html( $title ) . '</h1>';
	if ( $description ) {
		echo '<p>' . esc_html( $description ) . '</p>';
	}
	echo '</div></section>';
}

/** Render a query loop using the React archive-card content model. */
function arden_dynamic_card_grid( $query = null ) {
	$query = $query instanceof WP_Query ? $query : $GLOBALS['wp_query'];
	if ( ! $query->have_posts() ) {
		echo '<p class="arden-empty">' . esc_html__( 'Không tìm thấy nội dung phù hợp.', 'arden-flatsome-child' ) . '</p>';
		return;
	}
	echo '<div class="arden-content-grid">';
	while ( $query->have_posts() ) {
		$query->the_post();
		echo '<article class="arden-card arden-content-card">';
		echo '<a class="arden-card__media" href="' . esc_url( get_permalink() ) . '">';
		if ( has_post_thumbnail() ) {
			the_post_thumbnail( 'arden-card', array( 'loading' => 'lazy' ) );
		} else {
			echo '<span class="arden-card__placeholder" aria-hidden="true"></span>';
		}
		echo '</a><div class="arden-card__body">';
		echo '<p class="arden-card__meta">' . esc_html( get_the_date() ) . '</p>';
		echo '<h2 class="arden-card__title"><a href="' . esc_url( get_permalink() ) . '">' . esc_html( get_the_title() ) . '</a></h2>';
		echo '<p class="arden-card__excerpt">' . esc_html( get_the_excerpt() ) . '</p>';
		echo '<a class="arden-button arden-button--outline" href="' . esc_url( get_permalink() ) . '">' . esc_html__( 'XEM CHI TIẾT', 'arden-flatsome-child' ) . '</a>';
		echo '</div></article>';
	}
	echo '</div>';
}
