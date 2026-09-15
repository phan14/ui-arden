<?php
/** Install and activate the package inside the disposable WordPress clone. */

if ( PHP_SAPI !== 'cli' || $argc !== 3 ) {
	fwrite( STDERR, "Usage: php task09_8b_r-local-install.php <clone-wp-load.php> <package.zip>\n" );
	exit( 2 );
}

$bootstrap = realpath( $argv[1] );
$package   = realpath( $argv[2] );
if ( 'D:\\000008\\task09_8b_r_wp_install_20260828\\wp-load.php' !== $bootstrap ) {
	fwrite( STDERR, "Refusing a non-disposable WordPress target.\n" );
	exit( 2 );
}
require_once $bootstrap;

if ( false === $package || 'arden-child-2.0.1-task09_8b_r-staging.zip' !== basename( $package ) ) {
	fwrite( STDERR, "Package not found or unexpected.\n" );
	exit( 2 );
}

require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
require_once ABSPATH . 'wp-admin/includes/theme.php';

$existing_theme = WP_CONTENT_DIR . '/themes/flatsome-child';
if ( is_dir( $existing_theme ) ) {
	if ( wp_normalize_path( $existing_theme ) !== 'D:/000008/task09_8b_r_wp_install_20260828/wp-content/themes/flatsome-child' ) {
		fwrite( STDERR, "Unsafe existing theme target.\n" );
		exit( 2 );
	}
	switch_theme( 'flatsome' );
	WP_Filesystem();
	global $wp_filesystem;
	if ( ! $wp_filesystem->delete( $existing_theme, true ) ) {
		fwrite( STDERR, "Could not reset disposable child theme.\n" );
		exit( 1 );
	}
}

$skin     = new WP_Ajax_Upgrader_Skin();
$upgrader = new Theme_Upgrader( $skin );
$result   = $upgrader->install( $package );

if ( is_wp_error( $result ) || ! $result ) {
	$message = is_wp_error( $result ) ? $result->get_error_message() : implode( ' | ', $skin->get_errors()->get_error_messages() );
	fwrite( STDERR, 'THEME_UPLOAD_FAIL: ' . $message . "\n" );
	exit( 1 );
}

$theme = wp_get_theme( 'flatsome-child' );
if ( ! $theme->exists() || 'flatsome' !== $theme->get_template() ) {
	fwrite( STDERR, "THEME_METADATA_FAIL\n" );
	exit( 1 );
}

$parent = wp_get_theme( 'flatsome' );
if ( ! $parent->exists() ) {
	fwrite( STDERR, "PARENT_THEME_FAIL\n" );
	exit( 1 );
}

switch_theme( 'flatsome-child' );
if ( 'flatsome-child' !== get_stylesheet() ) {
	fwrite( STDERR, "LOCAL_ACTIVATION_FAIL\n" );
	exit( 1 );
}

fwrite( STDOUT, 'WORDPRESS_LOCAL_UPLOAD_PASS' . "\n" );
fwrite( STDOUT, 'THEME_NAME=' . $theme->get( 'Name' ) . "\n" );
fwrite( STDOUT, 'THEME_VERSION=' . $theme->get( 'Version' ) . "\n" );
fwrite( STDOUT, 'PARENT_TEMPLATE=' . $theme->get_template() . "\n" );
fwrite( STDOUT, "LOCAL_ACTIVATION_PASS\n" );
