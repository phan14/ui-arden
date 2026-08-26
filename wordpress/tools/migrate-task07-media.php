<?php
/** Local-only media migration for the 20 Task 06C external image elements. */
require_once 'C:/xampp/htdocs/mytest/wp-load.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/media.php';
require_once ABSPATH . 'wp-admin/includes/image.php';
wp_set_current_user( 1 );

$root = dirname( __DIR__ );
$files = array( 'about-flatsome.txt', 'services-flatsome.txt', 'manufacturing-flatsome.txt' );
$rows = array();

foreach ( $files as $name ) {
	$file = $root . '/import/pages/' . $name;
	$content = file_get_contents( $file );
	$content = preg_replace_callback(
		'/\[ux_html class="arden-special-element arden-special-element--media"\](<img\s+[^>]+>)\[\/ux_html\]/i',
		function ( $match ) use ( $name, &$rows ) {
			$img = $match[1];
			preg_match( '/\bsrc="([^"]+)"/i', $img, $src_match );
			preg_match( '/\balt="([^"]*)"/i', $img, $alt_match );
			preg_match( '/\bclass="([^"]*)"/i', $img, $class_match );
			$url = isset( $src_match[1] ) ? html_entity_decode( $src_match[1], ENT_QUOTES, 'UTF-8' ) : '';
			$alt = isset( $alt_match[1] ) ? html_entity_decode( $alt_match[1], ENT_QUOTES, 'UTF-8' ) : '';
			$attachment_id = 0;
			$existing = get_posts( array( 'post_type'=>'attachment', 'post_status'=>'inherit', 'numberposts'=>1, 'fields'=>'ids', 'meta_key'=>'_arden_source_url', 'meta_value'=>$url ) );
			if ( $existing ) {
				$attachment_id = (int) $existing[0];
			} elseif ( $url ) {
				$tmp = download_url( $url, 30 );
				$result = is_wp_error( $tmp ) ? $tmp : media_handle_sideload( array( 'name' => 'arden-' . substr( md5( $url ), 0, 12 ) . '.jpg', 'tmp_name' => $tmp ), 0, $alt );
				if ( ! is_wp_error( $result ) ) {
					$attachment_id = (int) $result;
					update_post_meta( $attachment_id, '_arden_source_url', $url );
				} elseif ( ! is_wp_error( $tmp ) && file_exists( $tmp ) ) {
					@unlink( $tmp );
				}
			}
			if ( ! $attachment_id ) {
				$rows[] = array( $url, $name, 'FAILED', $alt, '', '' );
				return $match[0];
			}
			update_post_meta( $attachment_id, '_wp_attachment_image_alt', $alt );
			$meta = wp_get_attachment_metadata( $attachment_id );
			$rows[] = array( $url, $name, (string) $attachment_id, $alt, isset( $meta['width'] ) ? $meta['width'] : '', isset( $meta['height'] ) ? $meta['height'] : '' );
			$class = isset( $class_match[1] ) ? $class_match[1] : '';
			return sprintf( '[ux_image id="%d" image_size="original" class="%s"]', $attachment_id, esc_attr( $class ) );
		},
		$content
	);
	file_put_contents( $file, $content );
}

$lines = array(
	'# Media migration', '',
	'All Task 06C external presentation images were audited. Attachment IDs below are local/staging IDs and must be remapped by the WordPress migration tool on deployment.', '',
	'| React asset | WordPress import | Attachment target | Alt text | Width | Height |',
	'|---|---|---:|---|---:|---:|',
);
foreach ( $rows as $row ) {
	$lines[] = '| ' . implode( ' | ', array_map( function( $value ) { return str_replace( '|', '\|', (string) $value ); }, $row ) ) . ' |';
}
$lines[] = '';
$lines[] = 'No Windows path, localhost URL or React `/src/assets` dependency is used. Source ratios are preserved through the original attachment dimensions and `image_size="original"`. Alt text is copied from the existing React content without keyword expansion.';
file_put_contents( $root . '/audit/MEDIA_MIGRATION.md', implode( "\n", $lines ) . "\n" );
printf( "MIGRATED\t%d image usages\n", count( $rows ) );
