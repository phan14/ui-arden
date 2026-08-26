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
