<?php
/** Router for the disposable PHP built-in WordPress smoke-test server. */

$document_root = 'D:/000008/task09_8b_r_wp_install_20260828';
$path = rawurldecode( (string) parse_url( $_SERVER['REQUEST_URI'], PHP_URL_PATH ) );
$candidate = $document_root . $path;

if ( '/' !== $path && is_file( $candidate ) ) {
	return false;
}

require $document_root . '/index.php';
