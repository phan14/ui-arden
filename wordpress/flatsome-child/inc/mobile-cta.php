<?php
/** Optional, no-JavaScript mobile action bar. */

defined( 'ABSPATH' ) || exit;

/** Add safe mobile CTA settings to the WordPress Customizer. */
function arden_customize_mobile_cta( $wp_customize ) {
	$wp_customize->add_section(
		'arden_mobile_cta',
		array(
			'title'       => __( 'Arden Mobile CTA', 'arden-flatsome-child' ),
			'description' => __( 'The bar stays hidden until at least one verified destination is saved.', 'arden-flatsome-child' ),
			'priority'    => 160,
		)
	);

	$wp_customize->add_setting( 'arden_mobile_phone', array( 'default' => '', 'sanitize_callback' => 'sanitize_text_field' ) );
	$wp_customize->add_control( 'arden_mobile_phone', array( 'label' => __( 'Verified phone', 'arden-flatsome-child' ), 'section' => 'arden_mobile_cta', 'type' => 'text' ) );

	$wp_customize->add_setting( 'arden_mobile_quote_url', array( 'default' => '', 'sanitize_callback' => 'esc_url_raw' ) );
	$wp_customize->add_control( 'arden_mobile_quote_url', array( 'label' => __( 'Quote or Zalo URL', 'arden-flatsome-child' ), 'section' => 'arden_mobile_cta', 'type' => 'url' ) );
}
add_action( 'customize_register', 'arden_customize_mobile_cta' );

/** Render the bar only when configured and enabled. */
function arden_render_mobile_cta() {
	if ( is_admin() || ! apply_filters( 'arden_enable_mobile_cta', true ) ) {
		return;
	}

	$phone    = trim( (string) get_theme_mod( 'arden_mobile_phone', '' ) );
	$quote_url = (string) get_theme_mod( 'arden_mobile_quote_url', '' );
	$dialable = preg_replace( '/[^0-9+]/', '', $phone );

	if ( ! $dialable && ! $quote_url ) {
		return;
	}
	?>
	<nav class="arden-mobile-cta" aria-label="<?php esc_attr_e( 'Liên hệ nhanh', 'arden-flatsome-child' ); ?>">
		<?php if ( $dialable ) : ?>
			<a class="arden-mobile-cta__link" href="tel:<?php echo esc_attr( $dialable ); ?>"><?php esc_html_e( 'Gọi ngay', 'arden-flatsome-child' ); ?></a>
		<?php endif; ?>
		<?php if ( $quote_url ) : ?>
			<a class="arden-mobile-cta__link arden-mobile-cta__link--accent" href="<?php echo esc_url( $quote_url ); ?>"><?php esc_html_e( 'Zalo / Báo giá', 'arden-flatsome-child' ); ?></a>
		<?php endif; ?>
	</nav>
	<?php
}
add_action( 'wp_footer', 'arden_render_mobile_cta', 30 );
