<?php
/** Dynamic content elements for use inside UX Builder. */

defined( 'ABSPATH' ) || exit;

/** Shared card loop for posts and the optional project CPT. */
function arden_content_grid_shortcode( $atts, $content = null, $tag = '' ) {
	$is_projects = 'arden_projects' === $tag;
	$atts        = shortcode_atts(
		array(
			'count'    => $is_projects ? 6 : 3,
			'category' => '',
		),
		$atts,
		$tag
	);

	if ( $is_projects && ! post_type_exists( 'project' ) ) {
		return current_user_can( 'edit_posts' )
			? '<p class="arden-empty">' . esc_html__( 'Không thể hiển thị dự án: post type project chưa được đăng ký.', 'arden-flatsome-child' ) . '</p>'
			: '';
	}

	$post_type = $is_projects ? 'project' : 'post';
	$args      = array(
		'post_type'           => $post_type,
		'post_status'         => 'publish',
		'posts_per_page'      => max( 1, min( 12, absint( $atts['count'] ) ) ),
		'ignore_sticky_posts' => true,
		'no_found_rows'       => true,
	);

	if ( ! $is_projects && $atts['category'] ) {
		$args['category_name'] = sanitize_title( $atts['category'] );
	}

	$query = new WP_Query( $args );
	if ( ! $query->have_posts() ) {
		return current_user_can( 'edit_posts' )
			? '<p class="arden-empty">' . esc_html__( 'Chưa có nội dung để hiển thị.', 'arden-flatsome-child' ) . '</p>'
			: '';
	}

	ob_start();
	?>
	<div class="arden-content-grid arden-content-grid--<?php echo esc_attr( $post_type ); ?>">
		<?php while ( $query->have_posts() ) : $query->the_post(); ?>
			<article <?php post_class( 'arden-card arden-content-card' ); ?>>
				<a class="arden-card__media" href="<?php echo esc_url( get_permalink() ); ?>" aria-hidden="true" tabindex="-1">
					<?php if ( has_post_thumbnail() ) : ?>
						<?php the_post_thumbnail( 'arden-card', array( 'loading' => 'lazy' ) ); ?>
					<?php else : ?>
						<span class="arden-card__placeholder"></span>
					<?php endif; ?>
				</a>
				<div class="arden-card__body">
					<p class="arden-card__meta">
						<?php
						if ( $is_projects ) {
							echo esc_html__( 'Dự án', 'arden-flatsome-child' );
						} else {
							$categories = get_the_category();
							if ( $categories ) {
								echo esc_html( $categories[0]->name ) . '<span aria-hidden="true"> · </span>';
							}
							echo '<time datetime="' . esc_attr( get_the_date( DATE_W3C ) ) . '">' . esc_html( get_the_date() ) . '</time>';
						}
						?>
					</p>
					<h3 class="arden-card__title"><a href="<?php echo esc_url( get_permalink() ); ?>"><?php echo esc_html( get_the_title() ); ?></a></h3>
					<p class="arden-card__excerpt"><?php echo esc_html( wp_trim_words( wp_strip_all_tags( get_the_excerpt() ), 22 ) ); ?></p>
					<a class="arden-button arden-button--outline" href="<?php echo esc_url( get_permalink() ); ?>"><?php esc_html_e( 'Xem chi tiết', 'arden-flatsome-child' ); ?></a>
				</div>
			</article>
		<?php endwhile; ?>
	</div>
	<?php
	wp_reset_postdata();
	return ob_get_clean();
}
add_shortcode( 'arden_recent_posts', 'arden_content_grid_shortcode' );
add_shortcode( 'arden_projects', 'arden_content_grid_shortcode' );

/** Interactive estimate card matching the React home calculator. */
function arden_pricing_calculator_shortcode() {
	static $instance = 0;
	$instance++;
	$id = 'arden-pricing-calculator-' . $instance;

	ob_start();
	?>
	<div class="arden-calculator" id="<?php echo esc_attr( $id ); ?>" data-arden-calculator>
		<div class="arden-calculator__controls">
			<p class="arden-calculator__label">1. Loại sản phẩm may:</p>
			<div class="arden-calculator__types" role="group" aria-label="Loại sản phẩm">
				<button type="button" class="is-active" data-type="tshirt" data-price="65000">Áo Thun Oversize / Boxy</button>
				<button type="button" data-type="polo" data-price="85000">Áo Polo Bo Dệt</button>
				<button type="button" data-type="shirt" data-price="115000">Áo Sơ Mi Thiết Kế</button>
				<button type="button" data-type="pants" data-price="125000">Quần Kaki / Cargo Pants</button>
				<button type="button" data-type="hoodie" data-price="165000">Áo Khoác / Hoodie</button>
			</div>
			<div class="arden-calculator__quantity-head"><p class="arden-calculator__label">2. Số lượng đặt may:</p><output data-quantity-output>50 sản phẩm</output></div>
			<input type="range" min="30" max="1000" step="10" value="50" data-quantity aria-label="Số lượng đặt may">
			<div class="arden-calculator__scale"><span>30 áo (MOQ)</span><span>100 áo</span><span>300 áo</span><span>500+ áo (Giá sỉ tốt)</span></div>
			<p class="arden-calculator__label">3. Yêu cầu In/Thêu:</p>
			<div class="arden-calculator__print" role="group" aria-label="Yêu cầu in thêu">
				<button type="button" class="is-active" data-print="1">Có In / Thêu Logo</button>
				<button type="button" data-print="0">Áo trơn (Không in thêu)</button>
			</div>
		</div>
		<div class="arden-calculator__result">
			<p class="arden-calculator__result-label">✦ Kết quả dự toán xuất xưởng</p>
			<p class="arden-calculator__muted">Đơn giá ước tính / sản phẩm:</p>
			<p class="arden-calculator__price">~ <strong data-unit-price>74.000</strong> <small>VNĐ/cái</small></p>
			<p class="arden-calculator__total">Tổng giá trị đơn hàng (<span data-total-quantity>50</span> áo): <strong>~ <span data-total-price>3.700.000</span> VNĐ</strong></p>
			<ul><li>Đã bao gồm vải, công may, rập và hoàn thiện</li><li>Đóng gói túi OPP / túi Zip chuẩn xuất xưởng</li><li>Thời gian may mẫu: 3 - 5 ngày</li></ul>
			<a class="arden-button arden-button--accent" href="<?php echo esc_url( home_url( '/bao-gia/' ) ); ?>">GỬI YÊU CẦU BÁO GIÁ CHÍNH THỨC</a>
			<p class="arden-calculator__note">* Dự toán chỉ mang tính tham khảo. Giá thực tế phụ thuộc chất liệu, kỹ thuật và mẫu duyệt.</p>
		</div>
	</div>
	<script>
	(function(){
		var root=document.getElementById(<?php echo wp_json_encode( $id ); ?>); if(!root)return;
		var base=65000, qty=50, printCost=12000;
		var format=function(value){return new Intl.NumberFormat('vi-VN').format(value);};
		var update=function(){var factor=qty>=500?.75:qty>=200?.82:qty>=100?.9:qty>=50?.95:1;var unit=Math.round((base*factor+printCost)/1000)*1000;root.querySelector('[data-quantity-output]').textContent=qty+' sản phẩm';root.querySelector('[data-total-quantity]').textContent=qty;root.querySelector('[data-unit-price]').textContent=format(unit);root.querySelector('[data-total-price]').textContent=format(unit*qty);};
		root.querySelectorAll('[data-type]').forEach(function(button){button.addEventListener('click',function(){root.querySelectorAll('[data-type]').forEach(function(item){item.classList.remove('is-active');});button.classList.add('is-active');base=Number(button.dataset.price);update();});});
		root.querySelectorAll('[data-print]').forEach(function(button){button.addEventListener('click',function(){root.querySelectorAll('[data-print]').forEach(function(item){item.classList.remove('is-active');});button.classList.add('is-active');printCost=button.dataset.print==='1'?12000:0;update();});});
		root.querySelector('[data-quantity]').addEventListener('input',function(event){qty=Number(event.target.value);update();});update();
	})();
	</script>
	<?php
	return ob_get_clean();
}
add_shortcode( 'arden_pricing_calculator', 'arden_pricing_calculator_shortcode' );

/** Source-faithful Home cards; these are intentionally independent of site content records. */
function arden_home_source_cards_shortcode( $atts, $content = null, $tag = '' ) {
	$is_blog = 'arden_home_articles' === $tag;
	$items = $is_blog ? array(
		array( 'title' => 'Cách chọn xưởng may uy tín cho Local Brand mới bắt đầu', 'meta' => 'Kinh nghiệm đặt may · 20/09/2024 · 6 phút đọc', 'description' => 'Kinh nghiệm chọn xưởng may chất lượng, đúng tiến độ và tối ưu định mức giá thành cho các nhà sáng lập thương hiệu trẻ.', 'image' => 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80', 'url' => '/tin-tuc/cach-chon-xuong-may-uy-tin-cho-local-brand' ),
		array( 'title' => 'GSM là gì? Cách chọn định lượng vải phù hợp từng loại sản phẩm', 'meta' => 'Kiến thức vải · 15/09/2024 · 4 phút đọc', 'description' => 'Hướng dẫn chi tiết về chỉ số GSM và các lưu ý vàng khi chọn vải áo thun 220 GSM, 250 GSM hay hoodie 380 GSM.', 'image' => 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', 'url' => '/tin-tuc/gsm-la-gi-cach-chon-dinh-luong-vai' ),
		array( 'title' => 'Quy trình làm mẫu tại xưởng may chuyên nghiệp chuẩn 9 bước', 'meta' => 'Quy trình sản xuất · 12/09/2024 · 5 phút đọc', 'description' => 'Các bước chuẩn bị rập vi tính, may mẫu đối chứng và duyệt thông số trước khi đưa vào sản xuất hàng loạt.', 'image' => 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', 'url' => '/tin-tuc/quy-trinh-lam-mau-tai-xuong-may-chuyen-nghiep' ),
	) : array(
		array( 'title' => 'BST Áo Thun Local Brand ADC', 'meta' => 'Áo Thun', 'description' => 'Vải: Cotton 2 chiều 250 GSM · MOQ: Số lượng: 300+ sp', 'image' => 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80' ),
		array( 'title' => 'BST Hoodie Streetwear Mùa Đông', 'meta' => 'Áo Khoác & Hoodie', 'description' => 'Vải: French Terry 380 GSM · MOQ: Số lượng: 300+ sp', 'image' => 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80' ),
		array( 'title' => 'Quần Jean Nam Form Ống Rộng', 'meta' => 'Quần', 'description' => 'Vải: Denim 12oz - Wash Vintage · MOQ: Số lượng: 300+ sp', 'image' => 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80' ),
		array( 'title' => 'Áo Sơ Mi Oversize Casual', 'meta' => 'Áo Sơ Mi', 'description' => 'Vải: Cotton 2 chiều dệt nổi · MOQ: Số lượng: 400+ sp', 'image' => 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80' ),
		array( 'title' => 'Jacket Bomber Phối Màu', 'meta' => 'Áo Khoác', 'description' => 'Vải: Nylon - Lót viền bo dệt · MOQ: Số lượng: 200+ sp', 'image' => 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80' ),
		array( 'title' => 'Đồng Phục Doanh Nghiệp Tech', 'meta' => 'Đồng Phục', 'description' => 'Vải: Poly 2 chiều - Co giãn · MOQ: Số lượng: 1.000+ sp', 'image' => 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80' ),
	);
	ob_start(); ?>
	<div class="arden-content-grid <?php echo $is_blog ? 'arden-blog-grid' : 'arden-portfolio-grid'; ?>">
	<?php foreach ( $items as $item ) : $url = $item['url'] ?? '/du-an/bst-ao-thun-local-brand'; ?>
		<article class="arden-card arden-content-card"><a class="arden-card__media" href="<?php echo esc_url( home_url( $url ) ); ?>"><img src="<?php echo esc_url( $item['image'] ); ?>" alt="<?php echo esc_attr( $item['title'] ); ?>" loading="lazy"></a><div class="arden-card__body"><p class="arden-card__meta"><?php echo esc_html( $item['meta'] ); ?></p><h3 class="arden-card__title"><?php echo esc_html( $item['title'] ); ?></h3><p class="arden-card__excerpt"><?php echo esc_html( $item['description'] ); ?></p><a class="arden-button arden-button--outline" href="<?php echo esc_url( home_url( $url ) ); ?>"><?php echo esc_html( $is_blog ? 'ĐỌC BÀI VIẾT' : 'XEM THÔNG SỐ & MẪU' ); ?></a></div></article>
	<?php endforeach; ?>
	</div><?php return ob_get_clean();
}
add_shortcode( 'arden_home_projects', 'arden_home_source_cards_shortcode' );
add_shortcode( 'arden_home_articles', 'arden_home_source_cards_shortcode' );

/** Render reference-image fallbacks for unresolved UX Builder image tokens. */
function arden_reference_image_fallback( $return, $tag, $atts ) {
	if ( 'ux_image' !== $tag || empty( $atts['id'] ) || 0 !== strpos( (string) $atts['id'], 'ARDEN_IMAGE_' ) ) {
		return $return;
	}
	$images = array(
		'ARDEN_IMAGE_HERO'               => array( 'photo-1521572267360-ee0c2909d518', 'SẢN XUẤT THỜI TRANG THEO YÊU CẦU' ),
		'ARDEN_IMAGE_SERVICE_TSHIRT'    => array( 'photo-1521572267360-ee0c2909d518', 'May Áo Thun' ),
		'ARDEN_IMAGE_SERVICE_SHIRT'     => array( 'photo-1596755094514-f87e34085b2c', 'May Áo Sơ Mi' ),
		'ARDEN_IMAGE_SERVICE_PANTS'     => array( 'photo-1624378439575-d8705ad7ae80', 'May Quần' ),
		'ARDEN_IMAGE_SERVICE_JACKET'    => array( 'photo-1551028719-00167b16eac5', 'May Áo Khoác' ),
		'ARDEN_IMAGE_SERVICE_LOCALBRAND'=> array( 'photo-1558769132-cb1aea458c5e', 'Gia Công Local Brand' ),
		'ARDEN_IMAGE_PRODUCT_01'        => array( 'photo-1503342217505-b0a15ec3261c', 'BST Áo Thun Local Brand ADC' ),
		'ARDEN_IMAGE_PRODUCT_02'        => array( 'photo-1556905055-8f358a7a47b2', 'BST Hoodie Streetwear Mùa Đông' ),
		'ARDEN_IMAGE_PRODUCT_03'        => array( 'photo-1541099649105-f69ad21f3246', 'Quần Jean Nam Form Ống Rộng' ),
		'ARDEN_IMAGE_PRODUCT_04'        => array( 'photo-1602810318383-e386cc2a3ccf', 'Áo Sơ Mi Oversize Casual' ),
		'ARDEN_IMAGE_PRODUCT_05'        => array( 'photo-1495105787522-5334e3ffa0ef', 'Jacket Bomber Phối Màu' ),
		'ARDEN_IMAGE_PRODUCT_06'        => array( 'photo-1556905055-8f358a7a47b2', 'Đồng Phục Doanh Nghiệp Tech' ),
		'ARDEN_IMAGE_CAPABILITIES'      => array( 'photo-1558769132-cb1aea458c5e', 'Nhà xưởng may Arden' ),
		'ARDEN_IMAGE_FACTORY_01'        => array( 'photo-1558769132-cb1aea458c5e', 'Phòng Phát Triển Mẫu và Rập CAD' ),
		'ARDEN_IMAGE_FACTORY_02'        => array( 'photo-1581092160607-ee22621dd758', 'Phân Xưởng Trải và Cắt Vải Tự Động' ),
		'ARDEN_IMAGE_FACTORY_03'        => array( 'photo-1544441893-675973e31985', 'Dây Chuyền May Juki Chuyên Dụng' ),
		'ARDEN_IMAGE_FACTORY_04'        => array( 'photo-1586528116311-ad8dd3c8310d', 'Khu Vực QC, Ủi Hơi và Đóng Gói Thành Phẩm' ),
	);
	if ( empty( $images[ $atts['id'] ] ) ) {
		return $return;
	}
	$image = $images[ $atts['id'] ];
	$url   = 'https://images.unsplash.com/' . $image[0] . '?auto=format&fit=crop&w=800&q=80';
	return '<div class="img arden-reference-image" data-image-token="' . esc_attr( $atts['id'] ) . '"><div class="img-inner"><img src="' . esc_url( $url ) . '" alt="' . esc_attr( $image[1] ) . '" loading="lazy"></div></div>';
}
add_filter( 'pre_do_shortcode_tag', 'arden_reference_image_fallback', 10, 3 );

/** Small inline decorative icons used by source-faithful UX Blocks. */
function arden_inline_icon_shortcode( $atts ) {
	$atts = shortcode_atts( array( 'name' => 'check' ), $atts, 'arden_icon' );
	$paths = array(
		'package' => '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/><path d="m8 9 2 2 4-4"/>',
		'shield'  => '<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3Z"/><path d="m9 12 2 2 4-4"/>',
		'clock'   => '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
		'layers'  => '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
		'check'   => '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
	);
	$name = isset( $paths[ $atts['name'] ] ) ? $atts['name'] : 'check';
	return '<span class="arden-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' . $paths[ $name ] . '</svg></span>';
}
add_shortcode( 'arden_icon', 'arden_inline_icon_shortcode' );

/** Expose both dynamic grids as native editable elements in UX Builder. */
function arden_register_ux_builder_elements() {
	if ( ! function_exists( 'add_ux_builder_shortcode' ) ) {
		return;
	}

	$count_option = array(
		'type'       => 'slider',
		'heading'    => __( 'Số lượng', 'arden-flatsome-child' ),
		'default'    => 3,
		'min'        => 1,
		'max'        => 12,
		'step'       => 1,
		'on_change'  => array( 'recompile' => true ),
	);

	add_ux_builder_shortcode(
		'arden_recent_posts',
		array(
			'name'     => __( 'Arden Recent Posts', 'arden-flatsome-child' ),
			'category' => __( 'Content', 'arden-flatsome-child' ),
			'wrap'     => false,
			'options'  => array(
				'count'    => $count_option,
				'category' => array(
					'type'      => 'textfield',
					'heading'   => __( 'Category slug', 'arden-flatsome-child' ),
					'default'   => '',
					'on_change' => array( 'recompile' => true ),
				),
			),
		)
	);

	$count_option['default'] = 6;
	add_ux_builder_shortcode(
		'arden_projects',
		array(
			'name'     => __( 'Arden Projects', 'arden-flatsome-child' ),
			'category' => __( 'Content', 'arden-flatsome-child' ),
			'wrap'     => false,
			'options'  => array( 'count' => $count_option ),
		)
	);
}
add_action( 'ux_builder_setup', 'arden_register_ux_builder_elements' );
