<?php
require 'C:/xampp/htdocs/mytest/wp-load.php';
foreach ( array( 'ux_text', 'featured_box', 'ux_html', 'text_box', 'tab', 'tabgroup', 'row', 'col' ) as $tag ) {
	printf( "%s=%s\n", $tag, shortcode_exists( $tag ) ? 'yes' : 'no' );
}
$table_probe = '[row][col span="12"][ux_html class="arden-native-table"]<div class="arden-table-scroll"><table><tbody><tr><td>TABLE PROBE</td></tr></tbody></table></div>[/ux_html][/col][/row]';
$table_output = do_shortcode( $table_probe );
printf( "NESTED_UX_HTML_TABLE=%s LENGTH=%d\n", strpos( $table_output, 'TABLE PROBE' ) !== false ? 'yes' : 'no', strlen( $table_output ) );
$snippet = '[row][col span="6"][ux_text class="arden-card"]<h3>PROBE HEADING</h3><p>PROBE BODY</p>[/ux_text][/col][/row]';
$output = do_shortcode( $snippet );
printf( "OUTPUT_HAS_HEADING=%s\nOUTPUT_LENGTH=%d\nOUTPUT=%s\n", strpos( $output, 'PROBE HEADING' ) !== false ? 'yes' : 'no', strlen( $output ), substr( $output, 0, 1200 ) );
foreach ( array( 'ux_text' => '[ux_text class="arden-card"]<h3>WRAP UX_TEXT</h3><p>BODY</p>[/ux_text]', 'featured_box' => '[featured_box class="arden-card"]<h3>WRAP FEATURED</h3><p>BODY</p>[/featured_box]', 'text_box' => '[text_box]<h3>WRAP TEXT_BOX</h3><p>BODY</p>[/text_box]', 'ux_html' => '[ux_html class="arden-card"]<h3>WRAP UX_HTML</h3><p>BODY</p>[/ux_html]' ) as $tag => $test ) {
	$test_output = do_shortcode( '[row][col span="6"]' . $test . '[/col][/row]' );
	printf( "WRAP_%s=%s LENGTH=%d\n", strtoupper( $tag ), strpos( $test_output, 'WRAP ' ) !== false ? 'yes' : 'no', strlen( $test_output ) );
}
$content = get_post_field( 'post_content', 83 );
$rendered = apply_filters( 'the_content', $content );
printf( "DRAFT83_SOURCE_TABLE=%d SOURCE_UX_HTML_TABLE=%d RENDER_TABLE=%d\n", substr_count( $content, '<table>' ), substr_count( $content, '[ux_html class=\"arden-native-table\"]' ), substr_count( $rendered, '<table>' ) );
printf( "DRAFT83_SOURCE_HAS_PRINT=%s\nDRAFT83_RENDER_HAS_PRINT=%s\nDRAFT83_RENDER_HAS_PROCESS=%s\nDRAFT83_RENDER_LENGTH=%d\n", strpos( $content, 'In Lụa Plastisol Cao Cấp' ) !== false ? 'yes' : 'no', strpos( $rendered, 'In Lụa Plastisol Cao Cấp' ) !== false ? 'yes' : 'no', strpos( $rendered, 'QUY TRÌNH CHUẨN ISO' ) !== false ? 'yes' : 'no', strlen( $rendered ) );
$marker = strpos( $rendered, 'KỸ THUẬT IN' );
printf( "DRAFT83_PRINT_CONTEXT=%s\n", false === $marker ? 'missing' : substr( $rendered, max( 0, $marker - 800 ), 2400 ) );
foreach ( array( 'In Lụa Plastisol Cao Cấp', 'In Kỹ Thuật Số Trực Tiếp (DTG)', '01 · Tiếp nhận yêu cầu', '09 · Giao hàng đúng hẹn' ) as $needle ) {
	printf( "COUNT_%s=%d\n", md5( $needle ), substr_count( $rendered, $needle ) );
}
