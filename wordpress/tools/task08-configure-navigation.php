<?php
/** Local-only menu, hierarchy and rewrite configuration. */
require_once 'C:/xampp/htdocs/mytest/wp-load.php';
wp_set_current_user( 1 );

foreach ( array( 83, 84, 85, 86 ) as $page_id ) {
	wp_update_post( array( 'ID' => $page_id, 'post_parent' => 82 ) );
}

$menu_id = 4;
$existing_ids = array( 118, 119, 120, 121, 122, 123, 124, 177 );
$top = array(
	array( 'Trang chủ', '/', 0 ),
	array( 'Giới thiệu', '/gioi-thieu', 0 ),
	array( 'Dịch vụ', '/dich-vu', 0 ),
	array( 'Dự án mẫu', '/du-an', 0 ),
	array( 'Báo giá', '/bao-gia', 0 ),
	array( 'Hỏi đáp', '/faq', 0 ),
	array( 'Tin tức', '/tin-tuc', 0 ),
	array( 'Liên hệ', '/lien-he', 0 ),
);
$top_ids = array();
foreach ( $top as $index => $item ) {
	$args = array( 'menu-item-title' => $item[0], 'menu-item-url' => home_url( $item[1] ), 'menu-item-status' => 'publish', 'menu-item-type' => 'custom', 'menu-item-parent-id' => 0 );
	$id = wp_update_nav_menu_item( $menu_id, $existing_ids[ $index ] ?? 0, $args );
	if ( is_wp_error( $id ) ) { fwrite( STDERR, $id->get_error_message() . "\n" ); exit( 1 ); }
	$top_ids[] = (int) $id;
}
$service_parent = $top_ids[2];
$children = array(
	array( 'Tất cả dịch vụ gia công', '/dich-vu' ),
	array( 'May Áo Thun Local Brand', '/dich-vu/may-ao-thun' ),
	array( 'May Áo Sơ Mi Thiết Kế', '/dich-vu/may-ao-so-mi' ),
	array( 'May Quần Kaki & Jean', '/dich-vu/may-quan' ),
	array( 'May Áo Khoác & Hoodie', '/dich-vu/may-ao-khoac' ),
	array( 'Bảng Vải & Định Lượng GSM', '/bang-vai' ),
	array( 'Hướng Dẫn File Techpack', '/huong-dan-techpack' ),
	array( 'Năng Lực Nhà Xưởng', '/nang-luc-san-xuat' ),
);
foreach ( $children as $index => $item ) {
	$id = wp_update_nav_menu_item( $menu_id, 178 + $index, array( 'menu-item-title' => $item[0], 'menu-item-url' => home_url( $item[1] ), 'menu-item-status' => 'publish', 'menu-item-type' => 'custom', 'menu-item-parent-id' => $service_parent ) );
	if ( is_wp_error( $id ) ) { fwrite( STDERR, $id->get_error_message() . "\n" ); exit( 1 ); }
}
set_theme_mod( 'nav_menu_locations', array_merge( get_theme_mod( 'nav_menu_locations', array() ), array( 'primary' => $menu_id ) ) );
set_theme_mod( 'html_topbar_right', '<span>REQUIRES_PRODUCTION_PHONE</span>' );
set_theme_mod( 'follow_twitter', '' );
set_theme_mod( 'follow_facebook', '' );
set_theme_mod( 'follow_instagram', '' );
set_theme_mod( 'follow_email', '' );
flush_rewrite_rules( false );
echo "MENU_CONFIGURED\nSERVICE_HIERARCHY_CONFIGURED\nREWRITES_FLUSHED\n";
