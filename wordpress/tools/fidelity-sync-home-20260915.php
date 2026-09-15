<?php
/** Restore source-mapped local Home/UX content, preserving IDs and publication state. */
if ( PHP_SAPI !== 'cli' ) { exit( 1 ); }
require 'C:/xampp/htdocs/mytest/wp-load.php';
$root = dirname( __DIR__ );
$files = array(
    48 => '/import/home-flatsome.txt',
    26 => '/import/ux-blocks/arden-trust-bar.txt',
    28 => '/import/ux-blocks/arden-factory.txt',
    30 => '/import/ux-blocks/arden-process.txt',
    33 => '/import/ux-blocks/arden-moq.txt',
    35 => '/import/ux-blocks/arden-testimonials.txt',
    37 => '/import/ux-blocks/arden-faq.txt',
    39 => '/import/ux-blocks/arden-cta.txt',
);
if ( (int) get_option( 'page_on_front' ) !== 48 || home_url() !== 'http://localhost/mytest' ) { exit( 'Unexpected local site.' ); }
$backup = $root . '/backups/fidelity-20260915/home-posts.json';
if ( file_exists( $backup ) ) { exit( 'Backup already exists; inspect before repeating.' ); }
$posts = array();
foreach ( $files as $id => $file ) {
    if ( ! get_post( $id ) || ! is_readable( $root . $file ) ) { exit( 'Missing target or source.' ); }
    $posts[] = get_post( $id, ARRAY_A );
}
if ( false === file_put_contents( $backup, wp_json_encode( $posts, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE ) ) ) { exit( 'Backup failed.' ); }
wp_set_current_user( 1 );
foreach ( $files as $id => $file ) {
    $result = wp_update_post( wp_slash( array( 'ID' => $id, 'post_content' => file_get_contents( $root . $file ) ) ), true );
    if ( is_wp_error( $result ) ) { fwrite( STDERR, $result->get_error_message() ); exit( 1 ); }
    echo "Synced {$id}, status " . get_post_status( $id ) . "\n";
}
