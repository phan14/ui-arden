<?php
/** Task 08.8B local-only Draft 99 policy sync. */
require 'C:/xampp/htdocs/mytest/wp-load.php';

$source = file_get_contents( 'D:/000008/DEMP_UI/ui-arden/wordpress/import/pages/policies-flatsome.txt' );
if ( false === $source || false === strpos( $source, 'LEGAL_REVIEW_REQUIRED' ) ) {
	fwrite( STDERR, "Policy source missing or review marker absent.\n" );
	exit( 1 );
}

$result = wp_update_post(
	array(
		'ID'           => 99,
		'post_content' => $source,
		'post_status'  => 'draft',
	),
	true
);
if ( is_wp_error( $result ) ) {
	fwrite( STDERR, $result->get_error_message() . "\n" );
	exit( 1 );
}
update_post_meta( 99, '_arden_legal_review_required', '1' );
echo "Draft 99 synchronized; LEGAL_REVIEW_REQUIRED=1\n";
