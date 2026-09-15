<?php
/** Local-only public-content repair for Task 09.8A-R. */

require_once 'C:/xampp/htdocs/mytest/wp-load.php';
wp_set_current_user( 1 );

$root = dirname( __DIR__, 2 );
$data = json_decode( file_get_contents( $root . '/wordpress/audit/task09_8a_r-react-data.json' ), true );
if ( ! is_array( $data ) || 6 !== count( $data['projects'] ) || 5 !== count( $data['articles'] ) ) {
	throw new RuntimeException( 'React data inventory is incomplete.' );
}

foreach ( array( 81, 82, 83, 84, 85, 86, 95, 96, 97, 98, 99, 100, 101, 111 ) as $page_id ) {
	if ( 'page' !== get_post_type( $page_id ) ) {
		throw new RuntimeException( 'Expected page missing: ' . $page_id );
	}
	wp_update_post( array( 'ID' => $page_id, 'post_status' => 'publish' ) );
}

$search_page = get_page_by_path( 'tim-kiem', OBJECT, 'page' );
$search_id   = wp_insert_post(
	array(
		'ID'           => $search_page ? $search_page->ID : 0,
		'post_type'    => 'page',
		'post_status'  => 'publish',
		'post_title'   => 'Tìm kiếm nội dung Arden',
		'post_name'    => 'tim-kiem',
		'post_content' => '',
	),
	true
);
if ( is_wp_error( $search_id ) ) {
	throw new RuntimeException( $search_id->get_error_message() );
}
update_post_meta( $search_id, '_wp_page_template', 'page-tim-kiem.php' );
update_post_meta( $search_id, '_arden_task09_source', 'React SearchPage' );

function arden_task09_markdown( $content ) {
	$content = preg_replace( '/^###\s+(.+)$/m', '<h2>$1</h2>', $content );
	$content = preg_replace( '/^\s*[-*]\s+(.+)$/m', '<li>$1</li>', $content );
	$content = preg_replace( '/\*\*(.+?)\*\*/s', '<strong>$1</strong>', $content );
	return wpautop( $content );
}

$project_images = array( 155, 156, 157, 158, 159, 141 );
foreach ( array_values( $data['projects'] ) as $index => $project ) {
	$slug = 0 === $index ? 'bst-ao-thun-local-brand' : sanitize_title( $project['id'] );
	$old  = get_page_by_path( $slug, OBJECT, 'project' );
	$body = '<h2>THÔNG SỐ DỰ ÁN</h2><p>' . esc_html( $project['material'] ?? '' ) . '</p>';
	if ( ! empty( $project['specs'] ) ) {
		$body .= '<ul>';
		foreach ( $project['specs'] as $spec ) {
			$body .= '<li><strong>' . esc_html( $spec['label'] ) . ':</strong> ' . esc_html( $spec['value'] ) . '</li>';
		}
		$body .= '</ul>';
	}
	$id = wp_insert_post(
		array(
			'ID'           => $old ? $old->ID : 0,
			'post_type'    => 'project',
			'post_status'  => 'publish',
			'post_name'    => $slug,
			'post_title'   => $project['title'],
			'post_excerpt' => trim( ( $project['categoryLabel'] ?? 'Dự án' ) . ' · ' . ( $project['material'] ?? '' ) . ' · ' . ( $project['minOrder'] ?? '' ) ),
			'post_content' => $body,
		),
		true
	);
	if ( is_wp_error( $id ) ) {
		throw new RuntimeException( $id->get_error_message() );
	}
	set_post_thumbnail( $id, $project_images[ $index ] );
	update_post_meta( $id, '_arden_task09_source', 'React featuredProjects:' . $project['id'] );
	update_post_meta( $id, '_arden_material', $project['material'] ?? '' );
	update_post_meta( $id, '_arden_min_order', $project['minOrder'] ?? '' );
	update_post_meta( $id, '_arden_client', $project['client'] ?? '' );
	update_post_meta( $id, '_arden_time', $project['time'] ?? '' );
}

$article_images = array( 140, 142, 143, 144, 145 );
foreach ( array_values( $data['articles'] ) as $index => $article ) {
	$old        = get_page_by_path( $article['slug'], OBJECT, 'post' );
	$date_parts = array_reverse( explode( '/', $article['date'] ) );
	$post_date  = implode( '-', $date_parts ) . ' 09:00:00';
	$term       = term_exists( $article['category'], 'category' );
	if ( ! $term ) {
		$term = wp_insert_term( $article['category'], 'category' );
	}
	$id = wp_insert_post(
		array(
			'ID'           => $old ? $old->ID : 0,
			'post_type'    => 'post',
			'post_status'  => 'publish',
			'post_name'    => $article['slug'],
			'post_title'   => $article['title'],
			'post_excerpt' => $article['excerpt'],
			'post_content' => arden_task09_markdown( $article['content'] ),
			'post_date'    => $post_date,
		),
		true
	);
	if ( is_wp_error( $id ) ) {
		throw new RuntimeException( $id->get_error_message() );
	}
	if ( ! is_wp_error( $term ) ) {
		wp_set_post_categories( $id, array( (int) ( is_array( $term ) ? $term['term_id'] : $term ) ) );
	}
	set_post_thumbnail( $id, $article_images[ $index ] );
	update_post_meta( $id, '_arden_task09_source', 'React articlesData:' . $article['slug'] );
}

foreach ( get_posts( array( 'post_type' => 'post', 'post_status' => 'publish', 'numberposts' => -1 ) ) as $post ) {
	if ( in_array( $post->post_name, array( 'hello-world', 'chao-moi-nguoi', 'task05-bai-viet-kiem-thu' ), true ) ) {
		wp_update_post( array( 'ID' => $post->ID, 'post_status' => 'draft' ) );
	}
}

update_option( 'permalink_structure', '/tin-tuc/%postname%/' );
update_option( 'page_for_posts', 0 );
flush_rewrite_rules( false );

echo wp_json_encode(
	array(
		'published_pages' => 14,
		'search_page'     => $search_id,
		'projects'        => count( $data['projects'] ),
		'articles'        => count( $data['articles'] ),
	),
	JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
);
