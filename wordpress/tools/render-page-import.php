<?php
/** Render one local import through the active WordPress/Flatsome shortcode registry. */
require_once 'C:/xampp/htdocs/mytest/wp-load.php';
$name = isset( $argv[1] ) ? basename( $argv[1] ) : '';
$file = dirname( __DIR__ ) . '/import/pages/' . $name;
if ( ! $name || ! is_file( $file ) ) { exit( 2 ); }
echo do_shortcode( file_get_contents( $file ) );
