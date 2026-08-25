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
