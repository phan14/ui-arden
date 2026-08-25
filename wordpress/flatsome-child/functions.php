<?php
/**
 * Arden Flatsome Child bootstrap.
 *
 * @package Arden_Flatsome_Child
 */

defined( 'ABSPATH' ) || exit;

define( 'ARDEN_THEME_VERSION', '1.3.0' );

require_once get_stylesheet_directory() . '/inc/template-tags.php';
require_once get_stylesheet_directory() . '/inc/post-types.php';
require_once get_stylesheet_directory() . '/inc/shortcodes.php';
require_once get_stylesheet_directory() . '/inc/mobile-cta.php';

/** Enqueue Arden's design layer after Flatsome's compiled frontend CSS. */
function arden_child_enqueue_assets() {
	/* Flatsome 3.17.x already handles the active child style.css separately. */
	wp_enqueue_style( 'arden-fonts', 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap', array(), null );
	wp_enqueue_style( 'arden-components', get_stylesheet_directory_uri() . '/assets/css/arden.css', array( 'flatsome-main', 'arden-fonts' ), ARDEN_THEME_VERSION );
	wp_enqueue_style( 'arden-native-pilot', get_stylesheet_directory_uri() . '/assets/css/pilot-native.css', array( 'arden-components' ), ARDEN_THEME_VERSION );
	wp_enqueue_script( 'arden-native-interactions', get_stylesheet_directory_uri() . '/assets/js/native-interactions.js', array(), ARDEN_THEME_VERSION, true );

	/* Exact utility layer for Task 04 imports generated from the React DOM. */
	if ( is_singular( 'page' ) ) {
		$content = (string) get_post_field( 'post_content', get_queried_object_id() );
		if ( false !== strpos( $content, 'arden-react-page' ) ) {
			wp_enqueue_style( 'arden-react-pages', get_stylesheet_directory_uri() . '/assets/css/react-pages.css', array( 'arden-components' ), ARDEN_THEME_VERSION );
		}
	}
}
add_action( 'wp_enqueue_scripts', 'arden_child_enqueue_assets', 30 );

/** Theme capabilities used by native WordPress and Flatsome elements. */
function arden_child_setup() {
	load_child_theme_textdomain( 'arden-flatsome-child', get_stylesheet_directory() . '/languages' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );
	add_image_size( 'arden-card', 800, 500, true );
	add_image_size( 'arden-factory', 960, 720, true );
}
add_action( 'after_setup_theme', 'arden_child_setup', 20 );

/** Scope shared Header Builder styles without replacing Flatsome templates. */
function arden_child_body_classes( $classes ) {
	$classes[] = 'arden-site';
	$classes[] = 'arden-page';
	return $classes;
}
add_filter( 'body_class', 'arden_child_body_classes' );

/** Preserve source punctuation in Task 05 DOM-derived draft imports. */
function arden_task05_disable_wptexturize( $run_texturize ) {
	if ( is_singular( 'page' ) ) {
		$content = (string) get_post_field( 'post_content', get_queried_object_id() );
		if ( false !== strpos( $content, 'arden-react-page' ) ) {
			return false;
		}
	}
	return $run_texturize;
}
add_filter( 'run_wptexturize', 'arden_task05_disable_wptexturize' );

/** Allow authenticated Task 05 checks to exercise archives with draft seed records. */
function arden_task05_validation_query( $query ) {
	if ( ! defined( 'WP_DEBUG' ) || ! WP_DEBUG || is_admin() || ! $query->is_main_query() || empty( $_GET['arden_validate_drafts'] ) || ! current_user_can( 'edit_posts' ) ) {
		return;
	}
	$query->set( 'post_status', array( 'publish', 'draft' ) );
}
add_action( 'pre_get_posts', 'arden_task05_validation_query' );
