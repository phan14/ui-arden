<?php
/** Local-only migration for Home image tokens and testimonial avatars. */
require_once 'C:/xampp/htdocs/mytest/wp-load.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/media.php';
require_once ABSPATH . 'wp-admin/includes/image.php';

$root = dirname( __DIR__ );
$items = array(
	'ARDEN_IMAGE_HERO' => array( 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=85', 'SẢN XUẤT THỜI TRANG THEO YÊU CẦU' ),
	'ARDEN_IMAGE_SERVICE_TSHIRT' => array( 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', 'May Áo Thun' ),
	'ARDEN_IMAGE_SERVICE_SHIRT' => array( 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80', 'May Áo Sơ Mi' ),
	'ARDEN_IMAGE_SERVICE_PANTS' => array( 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80', 'May Quần' ),
	'ARDEN_IMAGE_SERVICE_JACKET' => array( 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80', 'May Áo Khoác' ),
	'ARDEN_IMAGE_SERVICE_LOCALBRAND' => array( 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80', 'Gia Công Local Brand' ),
	'ARDEN_IMAGE_PRODUCT_01' => array( 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80', 'BST Áo Thun Local Brand ADC' ),
	'ARDEN_IMAGE_PRODUCT_02' => array( 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80', 'BST Hoodie Streetwear Mùa Đông' ),
	'ARDEN_IMAGE_PRODUCT_03' => array( 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80', 'Quần Jean Nam Form Ống Rộng' ),
	'ARDEN_IMAGE_PRODUCT_04' => array( 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80', 'Áo Sơ Mi Oversize Casual' ),
	'ARDEN_IMAGE_PRODUCT_05' => array( 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80', 'Jacket Bomber Phối Màu' ),
	'ARDEN_IMAGE_PRODUCT_06' => array( 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80', 'Đồng Phục Doanh Nghiệp Tech' ),
	'ARDEN_IMAGE_CAPABILITIES' => array( 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80', 'Nhà xưởng may Arden' ),
);

function arden_task07_attachment( $url, $alt ) {
	$found = get_posts( array( 'post_type' => 'attachment', 'post_status' => 'inherit', 'numberposts' => 1, 'fields' => 'ids', 'meta_key' => '_arden_source_url', 'meta_value' => $url ) );
	if ( $found ) return (int) $found[0];
	$tmp = download_url( $url, 30 );
	if ( is_wp_error( $tmp ) ) return 0;
	$id = media_handle_sideload( array( 'name' => 'arden-' . substr( md5( $url ), 0, 12 ) . '.jpg', 'tmp_name' => $tmp ), 0, $alt );
	if ( is_wp_error( $id ) ) { if ( file_exists( $tmp ) ) unlink( $tmp ); return 0; }
	update_post_meta( $id, '_arden_source_url', $url );
	update_post_meta( $id, '_wp_attachment_image_alt', $alt );
	return (int) $id;
}

$home_file = $root . '/import/home-flatsome.txt';
$home = file_get_contents( $home_file );
foreach ( $items as $token => $item ) {
	$id = arden_task07_attachment( $item[0], $item[1] );
	if ( ! $id ) { fwrite( STDERR, "FAILED\t$token\n" ); exit( 1 ); }
	$home = str_replace( 'id="' . $token . '"', 'id="' . $id . '"', $home );
}
$home = str_replace( '[arden_home_projects]', '[arden_projects count="6"]', $home );
$home = str_replace( '[arden_home_articles]', '[arden_recent_posts count="3"]', $home );
file_put_contents( $home_file, $home );

$testimonials_file = $root . '/import/ux-blocks/arden-testimonials.txt';
$testimonials = file_get_contents( $testimonials_file );
$testimonials = preg_replace_callback( '/<img src="(https:\/\/images\.unsplash\.com\/[^"]+)" alt="([^"]*)">/', function ( $m ) {
	$url = html_entity_decode( $m[1], ENT_QUOTES, 'UTF-8' );
	$id = arden_task07_attachment( $url, $m[2] );
	if ( ! $id ) return $m[0];
	$meta = wp_get_attachment_metadata( $id );
	return sprintf( '<img src="%s" alt="%s" width="%d" height="%d" loading="lazy">', esc_url( wp_get_attachment_url( $id ) ), esc_attr( $m[2] ), (int) ( $meta['width'] ?? 0 ), (int) ( $meta['height'] ?? 0 ) );
}, $testimonials );
file_put_contents( $testimonials_file, $testimonials );
echo "Remaining media migrated.\n";
