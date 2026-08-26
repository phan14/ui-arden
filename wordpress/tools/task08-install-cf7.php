<?php
/** Local-only Task 08 installer: official WordPress.org Contact Form 7 package. */
require_once 'C:/xampp/htdocs/mytest/wp-load.php';
require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
require_once ABSPATH . 'wp-admin/includes/plugin.php';
wp_set_current_user( 1 );

$plugin = 'contact-form-7/wp-contact-form-7.php';
if ( ! file_exists( WP_PLUGIN_DIR . '/' . $plugin ) ) {
	$api = plugins_api( 'plugin_information', array( 'slug' => 'contact-form-7', 'fields' => array( 'sections' => false ) ) );
	if ( is_wp_error( $api ) || empty( $api->download_link ) || false === strpos( $api->download_link, 'downloads.wordpress.org/plugin/contact-form-7' ) ) {
		fwrite( STDERR, "Official package verification failed.\n" );
		exit( 1 );
	}
	$skin = new Automatic_Upgrader_Skin();
	$result = ( new Plugin_Upgrader( $skin ) )->install( $api->download_link );
	if ( is_wp_error( $result ) || ! $result ) {
		fwrite( STDERR, "CF7 installation failed.\n" );
		exit( 1 );
	}
}
$result = activate_plugin( $plugin );
if ( is_wp_error( $result ) ) {
	fwrite( STDERR, $result->get_error_message() . "\n" );
	exit( 1 );
}
update_option( 'blog_public', '0' );
echo "CF7_ACTIVE\nINDEXING_DISABLED\n";
