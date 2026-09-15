<?php
/** Disposable Task 09.8B-R clone configuration loader. */

$source_config = 'C:/xampp/htdocs/mytest/wp-config.php';
$config = file_get_contents( $source_config );
if ( false === $config ) {
	die( 'Source configuration unavailable.' );
}

$db_name_replacements = 0;
$config               = preg_replace(
	'/define\(\s*[\'\"]DB_NAME[\'\"]\s*,\s*[\'\"][^\'\"]+[\'\"]\s*\)\s*;/',
	"define( 'DB_NAME', 'mytest_task09_8b_r_20260828' );",
	$config,
	1,
	$db_name_replacements
);
$absolute_path_replacements = 0;
$config                     = preg_replace(
	'/if\s*\(\s*!\s*defined\(\s*[\'\"]ABSPATH[\'\"]\s*\)\s*\)\s*\{\s*define\([^;]+;\s*\}/s',
	"if ( ! defined( 'ABSPATH' ) ) { define( 'ABSPATH', 'D:/000008/task09_8b_r_wp_install_20260828/' ); }",
	$config,
	1,
	$absolute_path_replacements
);
$opening_tag_replacements = 0;
$config                   = preg_replace( '/^\s*<\?php/', '', $config, 1, $opening_tag_replacements );

if ( 1 !== $db_name_replacements || 1 !== $absolute_path_replacements || 1 !== $opening_tag_replacements ) {
	die( 'Disposable configuration rewrite failed.' );
}

eval( $config ); // phpcs:ignore Squiz.PHP.Eval.Discouraged -- isolated local clone loader.
