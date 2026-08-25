<?php
/** Read-only validation of generated page imports against the local WordPress shortcode registry. */

require_once 'C:/xampp/htdocs/mytest/wp-load.php';

$directory = dirname( __DIR__ ) . '/import/pages';
$failed    = array();

foreach ( glob( $directory . '/*.txt' ) as $file ) {
	$source = file_get_contents( $file );
	$output = do_shortcode( $source );
	$text   = wp_strip_all_tags( $output );
	$ok     = false !== strpos( $output, 'arden-react-page' )
		&& ! preg_match( '/\[(?:\/)?(?:section|row|row_inner|col|col_inner|ux_html|ux_text|button|featured_box|accordion|accordion-item|tabgroup|tab|search)\b/i', $text );
	printf( "%s\t%s\t%d bytes\n", $ok ? 'PASS' : 'FAIL', basename( $file ), strlen( $output ) );
	if ( ! $ok ) {
		$failed[] = basename( $file );
	}
}

exit( $failed ? 1 : 0 );
