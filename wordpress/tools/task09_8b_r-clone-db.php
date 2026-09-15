<?php
/** Create a disposable local database clone without exposing credentials. */

require_once 'C:/xampp/htdocs/mytest/wp-load.php';

global $wpdb;
$clone_database = 'mytest_task09_8b_r_20260828';
$clone_url      = 'http://127.0.0.1:8098';

if ( $clone_database === DB_NAME || ! preg_match( '/^mytest_task09_8b_r_[0-9]{8}$/', $clone_database ) ) {
	fwrite( STDERR, "Unsafe clone database name.\n" );
	exit( 2 );
}

$exists = $wpdb->get_var( $wpdb->prepare( 'SELECT SCHEMA_NAME FROM information_schema.SCHEMATA WHERE SCHEMA_NAME = %s', $clone_database ) );
if ( $exists ) {
	if ( false === $wpdb->query( "DROP DATABASE `{$clone_database}`" ) ) {
		fwrite( STDERR, "Could not reset the disposable database.\n" );
		exit( 1 );
	}
}

$charset = preg_replace( '/[^a-zA-Z0-9_]/', '', DB_CHARSET ?: 'utf8mb4' );
if ( false === $wpdb->query( "CREATE DATABASE `{$clone_database}` CHARACTER SET {$charset}" ) ) {
	fwrite( STDERR, "Could not create disposable database.\n" );
	exit( 1 );
}

$tables = $wpdb->get_col( 'SHOW TABLES' );
foreach ( $tables as $table ) {
	if ( ! preg_match( '/^[a-zA-Z0-9_]+$/', $table ) ) {
		continue;
	}
	$wpdb->query( "CREATE TABLE `{$clone_database}`.`{$table}` LIKE `" . DB_NAME . "`.`{$table}`" );
	$wpdb->query( "INSERT INTO `{$clone_database}`.`{$table}` SELECT * FROM `" . DB_NAME . "`.`{$table}`" );
}

$options_table = $wpdb->prefix . 'options';
$updated = $wpdb->query( $wpdb->prepare( "UPDATE `{$clone_database}`.`{$options_table}` SET option_value = %s WHERE option_name IN ('home','siteurl')", $clone_url ) );
if ( 2 !== $updated ) {
	fwrite( STDERR, "Could not isolate clone URLs.\n" );
	exit( 1 );
}

fwrite( STDOUT, 'CLONED_TABLES=' . count( $tables ) . "\n" );
