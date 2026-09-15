<?php
/**
 * Task 09.8B-R installability regression check.
 *
 * Exercises WordPress Core unzip_file(), the extraction seam used by theme upload.
 * Usage: php validate-task09_8b_r-zip.php <zip> <temporary-extraction-dir>
 */

if ( PHP_SAPI !== 'cli' || $argc !== 3 ) {
	fwrite( STDERR, "Usage: php validate-task09_8b_r-zip.php <zip> <temporary-extraction-dir>\n" );
	exit( 2 );
}

$zip_path = realpath( $argv[1] );
$temp_arg = str_replace( '\\', '/', $argv[2] );
$temp_dir = rtrim( $temp_arg, '/' );

if ( false === $zip_path || ! is_file( $zip_path ) ) {
	fwrite( STDERR, "ZIP not found.\n" );
	exit( 2 );
}

if ( ! preg_match( '#/task09_8b_r_zip_test_[a-z0-9_-]+$#i', $temp_dir ) ) {
	fwrite( STDERR, "Refusing unsafe temporary target.\n" );
	exit( 2 );
}

require_once 'C:/xampp/htdocs/mytest/wp-load.php';
require_once ABSPATH . 'wp-admin/includes/file.php';

WP_Filesystem();

if ( is_dir( $temp_dir ) ) {
	global $wp_filesystem;
	$wp_filesystem->delete( $temp_dir, true );
}

wp_mkdir_p( $temp_dir );
$result = unzip_file( $zip_path, trailingslashit( $temp_dir ) );

if ( is_wp_error( $result ) ) {
	fwrite( STDERR, 'WORDPRESS_UNZIP_FAIL: ' . $result->get_error_message() . "\n" );
	exit( 1 );
}

clearstatcache( true );

$theme_root = $temp_dir . '/flatsome-child';
$required = array(
	$theme_root . '/style.css',
	$theme_root . '/functions.php',
	$theme_root . '/assets/css/arden.css',
	$theme_root . '/assets/js/native-interactions.js',
);

foreach ( $required as $file ) {
	if ( ! is_file( $file ) || 0 === filesize( $file ) ) {
		fwrite( STDERR, 'REQUIRED_FILE_FAIL: ' . basename( $file ) . "\n" );
		exit( 1 );
	}
}

if ( ! is_dir( $theme_root . '/assets' ) ) {
	fwrite( STDERR, "ASSETS_DIRECTORY_FAIL\n" );
	exit( 1 );
}

fwrite( STDOUT, "WORDPRESS_UNZIP_PASS\n" );
