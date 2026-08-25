<?php
/** Local-only Task 06B pilot sync. Updates exactly Home, TShirtServicePage and FAQPage. */

require_once 'C:/xampp/htdocs/mytest/wp-load.php';
wp_set_current_user( 1 );

$root = dirname( __DIR__ );
$targets = array(
	'TShirtServicePage' => $root . '/import/pages/tshirt-service-flatsome.txt',
	'FAQPage'           => $root . '/import/pages/faq-flatsome.txt',
);

$front_id = (int) get_option( 'page_on_front' );
if ( $front_id ) {
	wp_update_post( wp_slash( array( 'ID' => $front_id, 'post_content' => file_get_contents( $root . '/import/home-flatsome.txt' ) ) ) );
	printf( "SYNCED\tHome\t%d\t%s\n", $front_id, get_post_status( $front_id ) );
}

foreach ( $targets as $component => $file ) {
	$ids = get_posts( array( 'post_type' => 'page', 'post_status' => 'draft', 'numberposts' => 1, 'fields' => 'ids', 'meta_key' => '_arden_task05_component', 'meta_value' => $component ) );
	if ( ! $ids ) {
		fwrite( STDERR, "Missing draft: {$component}\n" );
		continue;
	}
	wp_update_post( wp_slash( array( 'ID' => (int) $ids[0], 'post_content' => file_get_contents( $file ) ) ) );
	update_post_meta( (int) $ids[0], '_arden_task06b_native_pilot', '1' );
	printf( "SYNCED\t%s\t%d\t%s\n", $component, (int) $ids[0], get_post_status( (int) $ids[0] ) );
}

$footer = get_page_by_path( 'arden-footer', OBJECT, 'blocks' );
if ( $footer ) {
	wp_update_post( wp_slash( array( 'ID' => $footer->ID, 'post_content' => file_get_contents( $root . '/import/ux-blocks/arden-footer.txt' ) ) ) );
	printf( "SYNCED\tFooterBlock\t%d\t%s\n", $footer->ID, get_post_status( $footer->ID ) );
}

/* Global Flatsome Header baseline for the local pilot. */
$menu_name = 'Arden Primary';
$menu      = wp_get_nav_menu_object( $menu_name );
$menu_id   = $menu ? (int) $menu->term_id : (int) wp_create_nav_menu( $menu_name );
if ( $menu_id && ! wp_get_nav_menu_items( $menu_id ) ) {
	$links = array(
		'Trang chủ' => '/', 'Dịch vụ' => '/dich-vu', 'Năng lực sản xuất' => '/nang-luc-san-xuat',
		'Dự án' => '/du-an', 'Tin tức' => '/tin-tuc', 'Hỏi đáp' => '/faq', 'Liên hệ' => '/lien-he',
	);
	foreach ( $links as $label => $url ) {
		wp_update_nav_menu_item( $menu_id, 0, array( 'menu-item-title' => $label, 'menu-item-url' => home_url( $url ), 'menu-item-status' => 'publish', 'menu-item-type' => 'custom' ) );
	}
}
$locations = get_theme_mod( 'nav_menu_locations', array() );
$locations['primary'] = $menu_id;
set_theme_mod( 'nav_menu_locations', $locations );
set_theme_mod( 'header_elements_left', array() );
set_theme_mod( 'header_elements_right', array( 'nav', 'search', 'button-1' ) );
set_theme_mod( 'header_mobile_elements_left', array( 'menu-icon' ) );
set_theme_mod( 'header_mobile_elements_right', array( 'search' ) );
set_theme_mod( 'header_button_1', 'BÁO GIÁ NHANH (30P)' );
set_theme_mod( 'header_button_1_link', '/bao-gia' );
set_theme_mod( 'header_button_1_radius', '12px' );
set_theme_mod( 'header_button_1_color', 'primary' );
set_theme_mod( 'header_height', '68' );
set_theme_mod( 'header_height_sticky', '64' );
set_theme_mod( 'header_sticky', true );
set_theme_mod( 'site_logo', get_stylesheet_directory_uri() . '/assets/images/arden-logo.svg' );
set_theme_mod( 'site_logo_width', '132' );
set_theme_mod( 'topbar_elements_left', array( 'html' ) );
set_theme_mod( 'topbar_elements_right', array( 'html-2' ) );
set_theme_mod( 'html_topbar_left', 'Xưởng may gia công Local Brand chuyên nghiệp tại TP.HCM' );
set_theme_mod( 'html_topbar_right', '<a href="tel:0901234567">Hotline xưởng: 0901 234 567</a> · <a href="https://zalo.me/0901234567">Zalo tư vấn 24/7</a>' );
printf( "SYNCED\tHeaderBaseline\tmenu:%d\n", $menu_id );
