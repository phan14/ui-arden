<?php
/** Local-only migration of the React Footer placeholder map image. */
require 'C:/xampp/htdocs/mytest/wp-load.php';
require_once ABSPATH . 'wp-admin/includes/media.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/image.php';

$source_url = 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=400&q=80';
$existing   = get_posts(
	array(
		'post_type'      => 'attachment',
		'post_status'    => 'inherit',
		'posts_per_page' => 1,
		'meta_key'       => '_arden_source_url',
		'meta_value'     => $source_url,
	)
);

if ( $existing ) {
	$id = (int) $existing[0]->ID;
} else {
	$response = wp_remote_get( $source_url, array( 'timeout' => 30, 'user-agent' => 'Mozilla/5.0 Arden WordPress migration' ) );
	if ( is_wp_error( $response ) || 200 !== wp_remote_retrieve_response_code( $response ) || 0 !== strpos( (string) wp_remote_retrieve_header( $response, 'content-type' ), 'image/' ) ) {
		fwrite( STDERR, "React map placeholder download failed.\n" );
		exit( 1 );
	}
	$tmp = wp_tempnam( 'arden-footer-map.jpg' );
	file_put_contents( $tmp, wp_remote_retrieve_body( $response ) );
	$id = media_handle_sideload(
		array(
			'name'     => 'arden-footer-map.jpg',
			'tmp_name' => $tmp,
		),
		0,
		'Bản đồ chỉ đường Xưởng May Arden Tân Phú'
	);
	if ( is_wp_error( $id ) ) {
		@unlink( $tmp );
		fwrite( STDERR, $id->get_error_message() . "\n" );
		exit( 1 );
	}
	update_post_meta( $id, '_arden_source_url', $source_url );
	update_post_meta( $id, '_wp_attachment_image_alt', 'Bản đồ chỉ đường Xưởng May Arden Tân Phú' );
}

echo $id . "\n";
