<?php
/** Local-only Task 08.8C Footer UX Block sync. */
require 'C:/xampp/htdocs/mytest/wp-load.php';
$block = get_page_by_path( 'arden-footer', OBJECT, 'blocks' );
if ( ! $block ) {
	fwrite( STDERR, "Arden Footer UX Block not found.\n" );
	exit( 1 );
}
$content = file_get_contents( 'D:/000008/DEMP_UI/ui-arden/wordpress/import/ux-blocks/arden-footer.txt' );
$result  = wp_update_post( wp_slash( array( 'ID' => $block->ID, 'post_content' => $content ) ), true );
if ( is_wp_error( $result ) ) {
	fwrite( STDERR, $result->get_error_message() . "\n" );
	exit( 1 );
}
echo "FOOTER_SYNCED:" . $block->ID . "\n";
