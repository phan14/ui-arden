<?php
/** Read-only Task 08.11 baseline collector. */
require 'C:/xampp/htdocs/mytest/wp-load.php';
$ids = array( 81, 82, 83, 84, 85, 86, 87, 95, 96, 97, 98, 99, 100, 101, 111 );
$statuses = array();
foreach ( $ids as $id ) {
	$statuses[ $id ] = get_post_status( $id );
}
$plugins = array();
foreach ( (array) get_option( 'active_plugins', array() ) as $plugin ) {
	$data = get_plugin_data( WP_PLUGIN_DIR . '/' . $plugin, false, false );
	$plugins[] = array( 'file' => $plugin, 'name' => $data['Name'], 'version' => $data['Version'] );
}
echo wp_json_encode(
	array(
		'activeTheme' => get_option( 'stylesheet' ),
		'themeVersion' => wp_get_theme()->get( 'Version' ),
		'blogPublic' => get_option( 'blog_public' ),
		'pageStatuses' => $statuses,
		'activePlugins' => $plugins,
	),
	JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
);
