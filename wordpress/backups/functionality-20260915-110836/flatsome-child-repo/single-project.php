<?php
defined( 'ABSPATH' ) || exit;
get_header();
while ( have_posts() ) : the_post();
	$material = (string) get_post_meta( get_the_ID(), '_arden_material', true );
	$minimum  = (string) get_post_meta( get_the_ID(), '_arden_min_order', true );
	$client   = (string) get_post_meta( get_the_ID(), '_arden_client', true );
	$time     = (string) get_post_meta( get_the_ID(), '_arden_time', true );
	arden_page_banner( 'CASE STUDY TIÊU BIỂU', get_the_title() );
	?>
	<main class="arden-page">
		<article class="arden-section arden-case-study"><div class="arden-container">
			<nav class="arden-case-study__breadcrumbs" aria-label="Breadcrumb">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>">Trang chủ</a>
				<?php echo do_shortcode( '[arden_icon name="chevron-right"]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				<a href="<?php echo esc_url( get_post_type_archive_link( 'project' ) ); ?>">Dự án &amp; Bộ sưu tập</a>
				<?php echo do_shortcode( '[arden_icon name="chevron-right"]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				<span aria-current="page"><?php the_title(); ?></span>
			</nav>
			<div class="arden-case-study__grid">
				<div class="arden-case-study__main">
					<?php if ( has_post_thumbnail() ) : ?><figure class="arden-card arden-case-study__image"><?php the_post_thumbnail( 'large' ); ?><figcaption>ÁO THUN</figcaption></figure><?php endif; ?>
					<div class="arden-prose">
						<h2>THÔNG TIN KỸ THUẬT &amp; QUY TRÌNH SẢN XUẤT</h2>
						<p>Dự án gia công dòng sản phẩm <?php the_title(); ?> được thực hiện theo tiêu chuẩn ODM/OEM trọn gói tại xưởng may Arden. Toàn bộ khâu kiểm định vải (IQC), nhảy size rập vi tính, in ấn đồ họa và hoàn thiện đóng gói đều tuân thủ nghiêm ngặt quy trình kiểm soát chất lượng xuất xưởng.</p>
						<div class="arden-card arden-case-study__highlights"><h3>ĐẶC ĐIỂM NỔI BẬT CỦA LÔ SẢN PHẨM</h3><ul><li><?php echo do_shortcode( '[arden_icon name="check"]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?><span>Đường may mí cổ bọc xích chống bai dão độc quyền xưởng Arden.</span></li><li><?php echo do_shortcode( '[arden_icon name="check"]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?><span>Họa tiết in lụa mực Plastisol độ bám dính trên 100 lần giặt máy.</span></li><li><?php echo do_shortcode( '[arden_icon name="check"]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?><span>Đóng túi Zip in logo thương hiệu kèm nhãn dệt satin chống xước cổ.</span></li></ul></div>
					</div>
				</div>
				<aside class="arden-card arden-case-study__sidebar"><p class="arden-eyebrow">CASE STUDY THỰC TẾ</p><h2><?php the_title(); ?></h2><dl><div><dt>Đối tác thương hiệu</dt><dd><?php echo esc_html( $client ?: 'Local Brand Confidential' ); ?></dd></div><div><dt>Chất liệu vải</dt><dd><?php echo esc_html( $material ); ?></dd></div><div><dt>Quy mô đơn hàng</dt><dd><?php echo esc_html( $minimum ); ?></dd></div><div><dt>Thời gian hoàn thành</dt><dd><?php echo esc_html( $time ?: '12 ngày làm việc' ); ?></dd></div><div><dt>Cam kết bảo mật (NDA)</dt><dd><?php echo do_shortcode( '[arden_icon name="shield"]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?><span>Đã ký kết</span></dd></div></dl><a class="arden-button" href="<?php echo esc_url( home_url( '/bao-gia/' ) ); ?>">YÊU CẦU BÁO GIÁ DÒNG MẪU NÀY <?php echo do_shortcode( '[arden_icon name="arrow-right"]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></a><a class="arden-button arden-button--outline" href="<?php echo esc_url( get_post_type_archive_link( 'project' ) ); ?>">XEM CÁC DỰ ÁN KHÁC</a></aside>
			</div>
		</div></article>
		<?php echo do_shortcode( '[arden_case_study_process]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
		<?php echo do_shortcode( '[block id="arden-cta"]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	</main>
	<?php
endwhile;
get_footer();
