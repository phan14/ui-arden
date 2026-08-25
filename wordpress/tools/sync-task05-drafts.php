<?php
/** Controlled Task 05 draft importer. Usage: php sync-task05-drafts.php A|B|C */

require_once 'C:/xampp/htdocs/mytest/wp-load.php';
wp_set_current_user( 1 );

$batch = isset( $argv[1] ) ? strtoupper( $argv[1] ) : '';
if ( ! in_array( $batch, array( 'A', 'B', 'C' ), true ) ) {
	fwrite( STDERR, "Usage: php sync-task05-drafts.php A|B|C\n" );
	exit( 2 );
}

$root = dirname( __DIR__, 2 );
$maps = array(
	'A' => array(
		array( 'AboutPage', 'Giới thiệu xưởng may Arden', 'gioi-thieu', 'about-flatsome.txt', 0 ),
		array( 'ServicesPage', 'Dịch vụ sản xuất thời trang B2B', 'dich-vu', 'services-flatsome.txt', 0 ),
		array( 'TShirtServicePage', 'May áo thun Local Brand chuyên nghiệp', 'may-ao-thun', 'tshirt-service-flatsome.txt', 'dich-vu' ),
		array( 'ShirtServicePage', 'May áo sơ mi Local Brand & thiết kế', 'may-ao-so-mi', 'shirt-service-flatsome.txt', 'dich-vu' ),
		array( 'JacketServicePage', 'May áo khoác & Hoodie Local Brand', 'may-ao-khoac', 'jacket-service-flatsome.txt', 'dich-vu' ),
		array( 'PantsServicePage', 'May quần thời trang Local Brand', 'may-quan', 'pants-service-flatsome.txt', 'dich-vu' ),
		array( 'ManufacturingPage', 'Năng lực sản xuất xưởng may Arden', 'nang-luc-san-xuat', 'manufacturing-flatsome.txt', 0 ),
	),
	'B' => array(
		array( 'FAQPage', 'Câu hỏi thường gặp', 'faq', 'faq-flatsome.txt', 0 ),
		array( 'ContactPage', 'Liên hệ xưởng may Arden', 'lien-he', 'contact-flatsome.txt', 0 ),
		array( 'QuotePage', 'Nhận báo giá sản xuất', 'bao-gia', 'quote-flatsome.txt', 0 ),
		array( 'CareersPage', 'Cơ hội nghề nghiệp tại Arden', 'tuyen-dung', 'careers-flatsome.txt', 0 ),
		array( 'PoliciesPage', 'Chính sách', 'chinh-sach', 'policies-flatsome.txt', 0 ),
		array( 'FabricGuidePage', 'Bảng vải & kiến thức chất liệu', 'bang-vai', 'fabric-guide-flatsome.txt', 0 ),
		array( 'TechpackGuidePage', 'Hướng dẫn Techpack', 'huong-dan-techpack', 'techpack-guide-flatsome.txt', 0 ),
	),
);

function arden_task05_find_draft( $component, $post_type = 'page' ) {
	$ids = get_posts( array( 'post_type' => $post_type, 'post_status' => 'draft', 'numberposts' => 1, 'fields' => 'ids', 'meta_key' => '_arden_task05_component', 'meta_value' => $component ) );
	return $ids ? (int) $ids[0] : 0;
}

function arden_task05_log( $entry ) {
	$file = dirname( __DIR__ ) . '/audit/task05-sync.json';
	$data = file_exists( $file ) ? json_decode( file_get_contents( $file ), true ) : array();
	$data = is_array( $data ) ? $data : array();
	$data[ $entry['component'] ] = $entry;
	file_put_contents( $file, wp_json_encode( $data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES ) );
}

if ( in_array( $batch, array( 'A', 'B' ), true ) ) {
	$parents = array();
	foreach ( $maps[ $batch ] as $item ) {
		list( $component, $title, $slug, $source_file, $parent_slug ) = $item;
		$content = file_get_contents( $root . '/wordpress/import/pages/' . $source_file );
		$parent  = 0;
		if ( $parent_slug ) {
			$parent = isset( $parents[ $parent_slug ] ) ? $parents[ $parent_slug ] : arden_task05_find_draft( 'ServicesPage' );
		}
		$id = arden_task05_find_draft( $component );
		$post = array( 'post_type' => 'page', 'post_status' => 'draft', 'post_title' => $title, 'post_name' => $slug, 'post_content' => $content, 'post_parent' => $parent );
		if ( $id ) $post['ID'] = $id;
		$id = wp_insert_post( wp_slash( $post ), true );
		if ( is_wp_error( $id ) ) { fwrite( STDERR, $component . ': ' . $id->get_error_message() . "\n" ); exit( 1 ); }
		update_post_meta( $id, '_arden_task05_component', $component );
		update_post_meta( $id, '_arden_task05_source', 'wordpress/import/pages/' . $source_file );
		update_post_meta( $id, '_wp_page_template', 'page-blank.php' );
		if ( ! $parent_slug ) $parents[ $slug ] = $id;
		arden_task05_log( array( 'component' => $component, 'id' => $id, 'slug' => $slug, 'type' => 'page', 'status' => get_post_status( $id ), 'source' => 'wordpress/import/pages/' . $source_file, 'batch' => $batch ) );
		printf( "SYNCED\t%s\t%d\t%s\t%s\n", $component, $id, get_post_status( $id ), get_page_uri( $id ) );
	}
}

if ( 'C' === $batch ) {
	$news_page_id = arden_task05_find_draft( 'NewsPage', 'page' );
	$news_page = array( 'post_type' => 'page', 'post_status' => 'draft', 'post_title' => 'Tin tức & kiến thức may mặc', 'post_name' => 'tin-tuc', 'post_content' => '' );
	if ( $news_page_id ) $news_page['ID'] = $news_page_id;
	$news_page_id = wp_insert_post( wp_slash( $news_page ), true );
	if ( is_wp_error( $news_page_id ) ) { fwrite( STDERR, $news_page_id->get_error_message() . "\n" ); exit( 1 ); }
	update_post_meta( $news_page_id, '_arden_task05_component', 'NewsPage' );
	update_post_meta( $news_page_id, '_wp_page_template', 'page-tin-tuc.php' );
	arden_task05_log( array( 'component' => 'NewsPage', 'id' => $news_page_id, 'slug' => 'tin-tuc', 'type' => 'page', 'status' => 'draft', 'source' => 'page-tin-tuc.php', 'batch' => 'C' ) );
	printf( "SYNCED\tNewsPage\t%d\tdraft\ttin-tuc\n", $news_page_id );
	$legacy_news_seed = arden_task05_find_draft( 'NewsPage', 'post' );
	if ( $legacy_news_seed ) update_post_meta( $legacy_news_seed, '_arden_task05_component', 'NewsSeedPost' );
	$seed = array(
		array( 'NewsSeedPost', 'post', 'Task 05 — Bài viết kiểm thử giao diện', 'task05-bai-viet-kiem-thu', 'Bản ghi nháp dùng để kiểm tra template News, Category và Single Post. Không phải nội dung sản xuất.' ),
		array( 'CaseStudyPage', 'project', 'Task 05 — Dự án kiểm thử giao diện', 'task05-du-an-kiem-thu', 'Bản ghi nháp dùng để kiểm tra template Projects và Case Study. Không chứa tuyên bố sản xuất thực tế.' ),
	);
	foreach ( $seed as $item ) {
		list( $component, $type, $title, $slug, $excerpt ) = $item;
		$id = arden_task05_find_draft( $component, $type );
		$post = array( 'post_type' => $type, 'post_status' => 'draft', 'post_title' => $title, 'post_name' => $slug, 'post_excerpt' => $excerpt, 'post_content' => '<h2>DỮ LIỆU KIỂM THỬ TASK 05</h2><p>' . esc_html( $excerpt ) . '</p>' );
		if ( $id ) $post['ID'] = $id;
		$id = wp_insert_post( wp_slash( $post ), true );
		if ( is_wp_error( $id ) ) { fwrite( STDERR, $component . ': ' . $id->get_error_message() . "\n" ); exit( 1 ); }
		update_post_meta( $id, '_arden_task05_component', $component );
		arden_task05_log( array( 'component' => $component, 'id' => $id, 'slug' => $slug, 'type' => $type, 'status' => get_post_status( $id ), 'source' => 'Task 05 validation seed', 'batch' => 'C' ) );
		printf( "SYNCED\t%s\t%d\t%s\t%s\n", $component, $id, get_post_status( $id ), $slug );
	}
	$term = term_exists( 'task-05-validation', 'category' );
	if ( ! $term ) $term = wp_insert_term( 'Task 05 Validation', 'category', array( 'slug' => 'task-05-validation', 'description' => 'Taxonomy record used only for Task 05 draft validation.' ) );
	if ( ! is_wp_error( $term ) ) {
		$post_id = arden_task05_find_draft( 'NewsSeedPost', 'post' );
		wp_set_post_categories( $post_id, array( (int) ( is_array( $term ) ? $term['term_id'] : $term ) ) );
		arden_task05_log( array( 'component' => 'CategoryPage', 'id' => (int) ( is_array( $term ) ? $term['term_id'] : $term ), 'slug' => 'task-05-validation', 'type' => 'category', 'status' => 'taxonomy', 'source' => 'Task 05 validation seed', 'batch' => 'C' ) );
	}
	update_option( 'category_base', 'chuyen-muc' );
	$GLOBALS['wp_rewrite']->init();
	flush_rewrite_rules( false );
}
