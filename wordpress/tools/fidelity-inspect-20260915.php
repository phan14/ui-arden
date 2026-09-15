<?php
/** Read-only inventory of the local site's editable content. */
if ( PHP_SAPI !== 'cli' ) { exit( 1 ); }
require 'C:/xampp/htdocs/mytest/wp-load.php';
$out = dirname( __DIR__ ) . '/audit/fidelity-20260915/content';
wp_mkdir_p( $out );
$rows = array();
foreach ( get_posts( array( 'post_type' => array( 'page', 'blocks' ), 'post_status' => 'any', 'numberposts' => -1 ) ) as $post ) {
    file_put_contents( $out . '/' . $post->ID . '.txt', $post->post_content );
    $rows[] = array( 'id' => $post->ID, 'type' => $post->post_type, 'slug' => $post->post_name, 'status' => $post->post_status, 'component' => get_post_meta( $post->ID, '_arden_task05_component', true ) );
}
file_put_contents( $out . '/inventory.json', wp_json_encode( $rows, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE ) );
echo wp_json_encode( $rows, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE );
