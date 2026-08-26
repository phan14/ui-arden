<?php
/** Task 08.8B local-only Flatsome Header Builder fidelity configuration. */
require 'C:/xampp/htdocs/mytest/wp-load.php';
wp_set_current_user( 1 );

$menu_id = 4;
$ordered_items = array(
	array( 118, 'Trang chủ', '/' ),
	array( 119, 'Giới thiệu', '/gioi-thieu' ),
	array( 120, 'Dịch vụ', '/dich-vu' ),
	array( 121, 'Dự án mẫu', '/du-an' ),
	array( 122, 'Báo giá', '/bao-gia' ),
	array( 123, 'Hỏi đáp', '/faq' ),
	array( 124, 'Tin tức', '/tin-tuc' ),
	array( 177, 'Liên hệ', '/lien-he' ),
);
foreach ( $ordered_items as $index => $item ) {
	wp_update_nav_menu_item(
		$menu_id,
		$item[0],
		array(
			'menu-item-title'    => $item[1],
			'menu-item-url'      => home_url( $item[2] ),
			'menu-item-type'     => 'custom',
			'menu-item-parent-id'=> 0,
			'menu-item-position' => $index + 1,
			'menu-item-status'   => 'publish',
		)
	);
}

set_theme_mod( 'topbar_show', true );
set_theme_mod( 'topbar_elements_left', array( 'html' ) );
set_theme_mod( 'topbar_elements_right', array( 'html-2' ) );
set_theme_mod( 'html_topbar_left', 'Thứ 2 - Thứ 7: 8:00 - 17:30 (Chủ nhật: Nghỉ) · 86 Đường S6, P. Tây Thạnh, Q. Tân Phú, TP. Hồ Chí Minh' );
set_theme_mod( 'html_topbar_right', '<a href="tel:0901234567">Hotline xưởng: 0901 234 567</a> · <a href="https://zalo.me/0901234567">Zalo tư vấn 24/7</a>' );

echo "HEADER_BUILDER_FIDELITY_CONFIGURED\n";
