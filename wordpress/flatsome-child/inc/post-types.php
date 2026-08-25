<?php
/** Project content type used by the Home portfolio grid. */

defined( 'ABSPATH' ) || exit;

/** Register projects without forcing archive/single templates in Phase 2. */
function arden_register_project_post_type() {
	$labels = array(
		'name'               => __( 'Dự án', 'arden-flatsome-child' ),
		'singular_name'      => __( 'Dự án', 'arden-flatsome-child' ),
		'add_new_item'       => __( 'Thêm dự án', 'arden-flatsome-child' ),
		'edit_item'          => __( 'Sửa dự án', 'arden-flatsome-child' ),
		'new_item'           => __( 'Dự án mới', 'arden-flatsome-child' ),
		'view_item'          => __( 'Xem dự án', 'arden-flatsome-child' ),
		'search_items'       => __( 'Tìm dự án', 'arden-flatsome-child' ),
		'not_found'          => __( 'Chưa có dự án.', 'arden-flatsome-child' ),
		'not_found_in_trash' => __( 'Không có dự án trong thùng rác.', 'arden-flatsome-child' ),
		'menu_name'          => __( 'Dự án', 'arden-flatsome-child' ),
	);

	register_post_type(
		'project',
		array(
			'labels'       => $labels,
			'public'       => true,
			'show_in_rest' => true,
			'has_archive'  => true,
			'rewrite'      => array( 'slug' => 'du-an', 'with_front' => false ),
			'menu_icon'    => 'dashicons-portfolio',
			'supports'     => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions' ),
			'taxonomies'   => array( 'post_tag' ),
		),
	);
}
add_action( 'init', 'arden_register_project_post_type' );

/** Flush rewrite rules only when the child theme is activated. */
function arden_project_rewrite_flush() {
	arden_register_project_post_type();
	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'arden_project_rewrite_flush' );
