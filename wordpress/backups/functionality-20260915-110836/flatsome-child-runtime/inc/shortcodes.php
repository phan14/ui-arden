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
							echo arden_inline_icon_shortcode( array( 'name' => 'scissors', 'size' => '14' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
							echo arden_inline_icon_shortcode( array( 'name' => 'package', 'size' => '14' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
							echo esc_html__( 'Dự án', 'arden-flatsome-child' );
						} else {
							echo arden_inline_icon_shortcode( array( 'name' => 'calendar', 'size' => '14' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
							echo arden_inline_icon_shortcode( array( 'name' => 'clock', 'size' => '14' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
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
					<a class="arden-button arden-button--outline" href="<?php echo esc_url( get_permalink() ); ?>"><?php if ( $is_projects ) { echo arden_inline_icon_shortcode( array( 'name' => 'eye', 'size' => '14' ) ); } // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?><?php esc_html_e( 'Xem chi tiết', 'arden-flatsome-child' ); ?><?php if ( ! $is_projects ) { echo arden_inline_icon_shortcode( array( 'name' => 'chevron-right', 'size' => '14' ) ); } // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></a>
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
			<p class="arden-calculator__result-label"><?php echo arden_inline_icon_shortcode( array( 'name' => 'sparkles', 'size' => '16' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> Kết quả dự toán xuất xưởng</p>
			<p class="arden-calculator__muted">Đơn giá ước tính / sản phẩm:</p>
			<p class="arden-calculator__price">~ <strong data-unit-price>74.000</strong> <small>VNĐ/cái</small></p>
			<p class="arden-calculator__total">Tổng giá trị đơn hàng (<span data-total-quantity>50</span> áo): <strong>~ <span data-total-price>3.700.000</span> VNĐ</strong></p>
			<ul><li><?php echo arden_inline_icon_shortcode( array( 'name' => 'circle-check', 'size' => '16', 'variant' => 'check' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>Đã bao gồm vải, công may, rập và hoàn thiện</li><li><?php echo arden_inline_icon_shortcode( array( 'name' => 'circle-check', 'size' => '16', 'variant' => 'check' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>Đóng gói túi OPP / túi Zip chuẩn xuất xưởng</li><li><?php echo arden_inline_icon_shortcode( array( 'name' => 'circle-check', 'size' => '16', 'variant' => 'check' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>Thời gian may mẫu: 3 - 5 ngày</li></ul>
			<a class="arden-button arden-button--accent" href="<?php echo esc_url( home_url( '/bao-gia/' ) ); ?>">GỬI YÊU CẦU BÁO GIÁ CHÍNH THỨC<?php echo arden_inline_icon_shortcode( array( 'name' => 'arrow-right', 'size' => '16' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></a>
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

/** Exact Lucide SVG registry shared by shortcodes and DOM-safe UX enhancement. */
function arden_icon_paths() {
	return array(
		'package' => '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/>',
		'shield'  => '<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3Z"/><path d="m9 12 2 2 4-4"/>',
		'clock'   => '<path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/>',
		'layers'  => '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
		'search' => '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
		'arrow-right' => '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
		'chevron-right' => '<path d="m9 18 6-6-6-6"/>',
		'book' => '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
		'sparkles' => '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',
		'calendar' => '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
		'scissors' => '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
		'clipboard-list' => '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14H4V6a2 2 0 0 1 2-2h2M8 11h.01M12 11h4M8 16h.01M12 16h4"/>',
		'calculator' => '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
		'truck' => '<path d="M10 17h4V5H2v12h3M14 9h4l4 4v4h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/>',
		'check'   => '<path d="M20 6 9 17l-5-5"/>',
		'circle-check' => '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
		'package-check' => '<path d="m16 16 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/>',
		'shield-check' => '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
		'award' => '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
		'factory' => '<path d="M12 16h.01M16 16h.01M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zM8 16h.01"/>',
		'cpu' => '<path d="M12 20v2M12 2v2M17 20v2M17 2v2M2 12h2M2 17h2M2 7h2M20 12h2M20 17h2M20 7h2M7 20v2M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>',
		'file-check' => '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/>',
		'badge-check' => '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
		'phone-call' => '<path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>',
		'info' => '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
		'star' => '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
		'eye' => '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
		'zap' => '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
		'dollar-sign' => '<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
		'heart-handshake' => '<path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"/>',
		'circle-question-mark' => '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
		'chevron-down' => '<path d="m6 9 6 6 6-6"/>',
		'house' => '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
	);
}

/** Small inline decorative icons used by source-faithful UX Blocks. */
function arden_inline_icon_shortcode( $atts ) {
	$atts  = shortcode_atts( array( 'name' => 'check', 'size' => '', 'variant' => '' ), $atts, 'arden_icon' );
	$paths = arden_icon_paths();
	$name = isset( $paths[ $atts['name'] ] ) ? $atts['name'] : 'check';
	$size = in_array( (string) $atts['size'], array( '12', '14', '16', '20' ), true ) ? (string) $atts['size'] : '';
	$variant = in_array( (string) $atts['variant'], array( 'card', 'star', 'check', 'overlay' ), true ) ? (string) $atts['variant'] : '';
	$class = 'arden-icon arden-semantic-icon' . ( $variant ? ' arden-semantic-icon--' . $variant : '' ) . ( $size ? ' arden-icon-size-' . $size : '' );
	return '<span class="' . esc_attr( $class ) . '" data-arden-icon="' . esc_attr( $name ) . '" data-arden-icon-source="shortcode" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' . $paths[ $name ] . '</svg></span>';
}
add_shortcode( 'arden_icon', 'arden_inline_icon_shortcode' );

/** Case-study process cards rendered without Flatsome's icon-font dependency. */
function arden_case_study_process_shortcode() {
	$steps = array(
		array( 'clipboard-list', 'Tiếp nhận yêu cầu', 'Lắng nghe ý tưởng, tiếp nhận mẫu vẽ hoặc mẫu thật, số lượng và tiến độ.' ),
		array( 'calculator', 'Tư vấn & Báo giá', 'Tư vấn chất liệu vải phù hợp, tính toán định mức và gửi bảng báo giá tối ưu.' ),
		array( 'scissors', 'Làm rập & May mẫu', 'Ra rập vi tính, may mẫu thử nghiệm (3 - 7 ngày) gửi khách duyệt form dáng.' ),
		array( 'check', 'Duyệt mẫu', 'Khách hàng duyệt mẫu thực tế, điều chỉnh chi tiết nếu cần và ký duyệt sản xuất.' ),
		array( 'layers', 'Sản xuất hàng loạt', 'Trải vải cắt tự động, tiến hành may ráp chuyền theo tiêu chuẩn kỹ thuật.' ),
		array( 'sparkles', 'In / Thêu', 'Gia công in lụa, in DTG, thêu vi tính độ nét cao theo đúng vị trí thiết kế.' ),
		array( 'shield', 'Kiểm tra QC 3 bước', 'Kiểm tra thông số kích thước, đường kim mũi chỉ, cắt chỉ thừa, ủi phẳng.' ),
		array( 'package', 'Đóng gói chuẩn', 'Gắn thẻ bài, nhãn mác, bọc túi zip/nilon, đóng thùng carton chống ẩm.' ),
		array( 'truck', 'Giao hàng đúng hẹn', 'Giao hàng tận nơi tại TP.HCM hoặc vận chuyển toàn quốc kèm biên bản giao nhận.' ),
	);

	ob_start();
	?>
	<section class="arden-section arden-process arden-case-process">
		<div class="arden-container">
			<header class="arden-section-title">
				<p class="arden-eyebrow"><?php echo do_shortcode( '[arden_icon name="sparkles"]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> QUY TRÌNH THỰC HIỆN</p>
				<h2>TIẾN ĐỘ &amp; TIÊU CHUẨN XUẤT XƯỞNG</h2>
				<p>Hệ thống 6 công đoạn kiểm tra chất lượng FQC 100% được áp dụng trên từng lô hàng xuất xưởng.</p>
			</header>
			<div class="arden-case-process__grid">
				<?php foreach ( $steps as $index => $step ) : ?>
					<article class="arden-case-process__card">
						<span class="arden-case-process__icon"><?php echo do_shortcode( '[arden_icon name="' . esc_attr( $step[0] ) . '"]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
						<span class="arden-case-process__number" aria-hidden="true"><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
						<h3><?php echo esc_html( $step[1] ); ?></h3>
						<p><?php echo esc_html( $step[2] ); ?></p>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
	<?php
	return ob_get_clean();
}
add_shortcode( 'arden_case_study_process', 'arden_case_study_process_shortcode' );

/** Source-faithful T-shirt size table; a shortcode avoids Flatsome's save filter stripping table markup. */
function arden_tshirt_size_chart_shortcode() {
	return '<div class="arden-native-table"><div class="arden-table-scroll"><table><thead><tr><th>Size Áo</th><th>Dài áo (cm)</th><th>Rộng ngực (cm)</th><th>Rộng vai (cm)</th><th>Dài tay (cm)</th><th>Cân nặng phù hợp</th></tr></thead><tbody><tr><td>S</td><td>68</td><td>52</td><td>48</td><td>21</td><td>45 - 55 kg</td></tr><tr><td>M</td><td>71</td><td>55</td><td>51</td><td>22</td><td>55 - 68 kg</td></tr><tr><td>L</td><td>74</td><td>58</td><td>54</td><td>23</td><td>68 - 78 kg</td></tr><tr><td>XL</td><td>77</td><td>61</td><td>57</td><td>24</td><td>78 - 90 kg</td></tr><tr><td>XXL</td><td>80</td><td>64</td><td>60</td><td>25</td><td>90 - 105 kg</td></tr></tbody></table></div></div>';
}
add_shortcode( 'arden_tshirt_size_chart', 'arden_tshirt_size_chart_shortcode' );

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

	add_ux_builder_shortcode(
		'arden_tshirt_size_chart',
		array(
			'name'     => __( 'Arden T-shirt Size Chart', 'arden-flatsome-child' ),
			'category' => __( 'Content', 'arden-flatsome-child' ),
			'wrap'     => false,
			'options'  => array(),
		)
	);
}
add_action( 'ux_builder_setup', 'arden_register_ux_builder_elements' );
