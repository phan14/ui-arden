<?php
/** Read-only Task 08.9 Header Builder inspection. */
require 'C:/xampp/htdocs/mytest/wp-load.php';

$keys = array(
	'topbar_show',
	'topbar_elements_left',
	'topbar_elements_right',
	'html_topbar_left',
	'html_topbar_right',
	'topbar_left',
	'topbar_right',
	'header_elements_left',
	'header_elements_right',
	'header_mobile_elements_left',
	'header_mobile_elements_right',
	'header_height',
	'topbar_height',
);

$values = array();
foreach ( $keys as $key ) {
	$values[ $key ] = get_theme_mod( $key, null );
}

echo wp_json_encode(
	array(
		'sheet'      => get_option( 'stylesheet' ),
		'theme'      => wp_get_theme()->get( 'Version' ),
		'blog_public'=> get_option( 'blog_public' ),
		'draft_count'=> count(
			array_filter(
				array( 81, 82, 83, 84, 85, 86, 87, 95, 96, 97, 98, 99, 100, 101, 111 ),
				static function ( $id ) { return 'draft' === get_post_status( $id ); }
			)
		),
		'mods'       => $values,
		'menu_slots' => get_theme_mod( 'nav_menu_locations', array() ),
	),
	JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
);
