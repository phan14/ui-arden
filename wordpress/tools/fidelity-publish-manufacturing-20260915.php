<?php
/** User-authorized local publication of the Manufacturing page only. */
if ( PHP_SAPI !== 'cli' ) { exit( 1 ); }
require 'C:/xampp/htdocs/mytest/wp-load.php';
if ( home_url() !== 'http://localhost/mytest' || get_post_field( 'post_name', 87 ) !== 'nang-luc-san-xuat' ) { exit( 'Unexpected target.' ); }
$backup = dirname( __DIR__ ) . '/backups/fidelity-20260915/manufacturing-post.json';
if ( file_exists( $backup ) ) { exit( 'Backup already exists; inspect before repeating.' ); }
if ( false === file_put_contents( $backup, wp_json_encode( get_post( 87, ARRAY_A ), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE ) ) ) { exit( 'Backup failed.' ); }
$result = wp_update_post( array( 'ID' => 87, 'post_status' => 'publish' ), true );
if ( is_wp_error( $result ) ) { fwrite( STDERR, $result->get_error_message() ); exit( 1 ); }
echo 'Manufacturing: ' . get_post_status( 87 ) . "\n";
