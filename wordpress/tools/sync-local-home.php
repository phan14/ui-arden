<?php
/** Local-only importer for visual verification. Run from CLI, never deploy. */

require 'C:/xampp/htdocs/mytest/wp-load.php';

$root = dirname( __DIR__ ) . '/import';
$front_id = (int) get_option( 'page_on_front' );
if ( ! $front_id ) {
	fwrite( STDERR, "No static front page configured.\n" );
	exit( 1 );
}

$result = wp_update_post(
	array(
		'ID'           => $front_id,
		'post_content' => file_get_contents( $root . '/home-flatsome.txt' ),
	),
	true
);
if ( is_wp_error( $result ) ) {
	fwrite( STDERR, $result->get_error_message() . "\n" );
	exit( 1 );
}

$blocks = array(
	'arden-trust-bar'   => 'arden-trust-bar.txt',
	'arden-factory'     => 'arden-factory.txt',
	'arden-process'     => 'arden-process.txt',
	'arden-moq-policy'  => 'arden-moq.txt',
	'arden-testimonials'=> 'arden-testimonials.txt',
	'arden-faq'         => 'arden-faq.txt',
	'arden-cta'         => 'arden-cta.txt',
);
foreach ( $blocks as $slug => $filename ) {
	$post = get_page_by_path( $slug, OBJECT, 'blocks' );
	if ( ! $post ) {
		fwrite( STDERR, "Missing UX Block: {$slug}\n" );
		continue;
	}
	wp_update_post( array( 'ID' => $post->ID, 'post_content' => file_get_contents( $root . '/ux-blocks/' . $filename ) ) );
}

echo "Synced Home {$front_id} and available UX Blocks.\n";
