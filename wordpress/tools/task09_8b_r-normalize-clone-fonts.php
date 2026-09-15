<?php
/** Normalize cloned Kirki font cache paths for the disposable WordPress root. */

$bootstrap = 'D:/000008/task09_8b_r_wp_install_20260828/wp-load.php';
require_once $bootstrap;

$font_files = get_option( 'kirki_downloaded_font_files', array() );
if ( ! is_array( $font_files ) ) {
	fwrite( STDERR, "Unexpected Kirki font cache format.\n" );
	exit( 1 );
}

$source_roots = array(
	'C:\\xampp\\htdocs\\mytest/wp-content',
	str_replace( '\\', '/', WP_CONTENT_DIR ),
);
$clone_root  = WP_CONTENT_DIR;
$updated     = 0;

foreach ( $font_files as $remote => $local ) {
	$normalized = str_replace( $source_roots, $clone_root, (string) $local );
	if ( $normalized !== $local ) {
		$font_files[ $remote ] = $normalized;
		$updated++;
	}
}

update_option( 'kirki_downloaded_font_files', $font_files, false );
fwrite( STDOUT, 'NORMALIZED_FONT_PATHS=' . $updated . "\n" );
