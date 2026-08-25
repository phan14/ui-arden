<?php
/** Restore Task 06C import sources from the untouched local Task 05 drafts. */
require_once 'C:/xampp/htdocs/mytest/wp-load.php';
$root = dirname( __DIR__ ) . '/import/pages/';
$map = array(
	'AboutPage'=>'about-flatsome.txt','ServicesPage'=>'services-flatsome.txt','ShirtServicePage'=>'shirt-service-flatsome.txt',
	'JacketServicePage'=>'jacket-service-flatsome.txt','PantsServicePage'=>'pants-service-flatsome.txt','ManufacturingPage'=>'manufacturing-flatsome.txt',
	'ContactPage'=>'contact-flatsome.txt','QuotePage'=>'quote-flatsome.txt','CareersPage'=>'careers-flatsome.txt',
	'PoliciesPage'=>'policies-flatsome.txt','FabricGuidePage'=>'fabric-guide-flatsome.txt','TechpackGuidePage'=>'techpack-guide-flatsome.txt',
);
foreach ( $map as $component => $file ) {
	$ids = get_posts( array( 'post_type'=>'page', 'post_status'=>'draft', 'numberposts'=>1, 'fields'=>'ids', 'meta_key'=>'_arden_task05_component', 'meta_value'=>$component ) );
	if ( ! $ids ) { fwrite( STDERR, "Missing {$component}\n" ); exit( 1 ); }
	file_put_contents( $root . $file, get_post_field( 'post_content', (int) $ids[0], 'raw' ) );
	printf( "RESTORED\t%s\t%d\n", $file, (int) $ids[0] );
}
