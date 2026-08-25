<?php
/** Read-only authenticated HTTP and content-state check for Task 06B. */
require_once 'C:/xampp/htdocs/mytest/wp-load.php';
$expiry = time() + HOUR_IN_SECONDS;
$cookie = LOGGED_IN_COOKIE . '=' . wp_generate_auth_cookie( 1, $expiry, 'logged_in' );
$targets = array( 'Home' => home_url( '/' ), 'TShirt' => home_url( '/?page_id=83&preview=true' ), 'FAQ' => home_url( '/?page_id=95&preview=true' ) );
foreach ( $targets as $name => $url ) {
	$response = wp_remote_get( $url, array( 'headers' => array( 'Cookie' => $cookie ), 'timeout' => 20, 'redirection' => 3 ) );
	$code = is_wp_error( $response ) ? 0 : (int) wp_remote_retrieve_response_code( $response );
	$body = is_wp_error( $response ) ? '' : wp_remote_retrieve_body( $response );
	$raw = preg_match( '/\[(section|row|col|ux_html|accordion|tabgroup)\b/i', wp_strip_all_tags( $body ) );
	printf( "%s\tHTTP:%d\traw:%s\n", $name, $code, $raw ? 'yes' : 'no' );
	if ( 200 !== $code || $raw ) { exit( 1 ); }
}
foreach ( array( 48, 83, 95 ) as $id ) {
	printf( "POST:%d\t%s\tUXHTML:%d\n", $id, get_post_status( $id ), substr_count( (string) get_post_field( 'post_content', $id ), '[ux_html' ) );
}
