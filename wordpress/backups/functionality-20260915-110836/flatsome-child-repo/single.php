<?php
defined( 'ABSPATH' ) || exit;
get_header();
while ( have_posts() ) : the_post();
	arden_page_banner( get_the_category_list( ', ' ) ? wp_strip_all_tags( get_the_category_list( ', ' ) ) : 'CẨM NANG MAY MẶC', get_the_title(), get_the_excerpt() );
	?>
	<main class="arden-page"><article class="arden-section"><div class="arden-container arden-content-narrow arden-prose">
		<?php if ( has_post_thumbnail() ) : ?><figure class="arden-card"><?php the_post_thumbnail( 'large' ); ?></figure><?php endif; ?>
		<?php the_content(); ?>
	</div></article></main>
	<?php
endwhile;
get_footer();
