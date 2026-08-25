<?php
/**
 * Arden Flatsome Child bootstrap.
 *
 * @package Arden_Flatsome_Child
 */

defined( 'ABSPATH' ) || exit;

define( 'ARDEN_CHILD_VERSION', '1.0.0' );

require_once get_stylesheet_directory() . '/inc/template-tags.php';
require_once get_stylesheet_directory() . '/inc/post-types.php';
require_once get_stylesheet_directory() . '/inc/shortcodes.php';

/** Enqueue the parent stylesheet and Arden's isolated design layer. */
function arden_child_enqueue_assets() {
	wp_enqueue_style( 'flatsome-parent', get_template_directory_uri() . '/style.css', array(), wp_get_theme( 'flatsome' )->get( 'Version' ) );
	wp_enqueue_style( 'arden-child', get_stylesheet_uri(), array( 'flatsome-parent' ), ARDEN_CHILD_VERSION );
	wp_enqueue_style( 'arden-components', get_stylesheet_directory_uri() . '/assets/css/arden.css', array( 'arden-child' ), ARDEN_CHILD_VERSION );
}
add_action( 'wp_enqueue_scripts', 'arden_child_enqueue_assets', 20 );

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
