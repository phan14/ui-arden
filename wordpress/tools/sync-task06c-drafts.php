<?php
/** Controlled Task 06C sync. Updates only the 12 remaining static/service drafts. */
require_once 'C:/xampp/htdocs/mytest/wp-load.php';
wp_set_current_user( 1 );
$root = dirname( __DIR__ ) . '/import/pages/';
$map = array(
	'AboutPage'=>'about-flatsome.txt','ServicesPage'=>'services-flatsome.txt','ShirtServicePage'=>'shirt-service-flatsome.txt',
	'JacketServicePage'=>'jacket-service-flatsome.txt','PantsServicePage'=>'pants-service-flatsome.txt','ManufacturingPage'=>'manufacturing-flatsome.txt',
	'ContactPage'=>'contact-flatsome.txt','QuotePage'=>'quote-flatsome.txt','CareersPage'=>'careers-flatsome.txt',
	'PoliciesPage'=>'policies-flatsome.txt','FabricGuidePage'=>'fabric-guide-flatsome.txt','TechpackGuidePage'=>'techpack-guide-flatsome.txt',
);
foreach ( $map as $component => $file ) {
	$ids = get_posts( array( 'post_type'=>'page', 'post_status'=>'draft', 'numberposts'=>1, 'fields'=>'ids', 'meta_key'=>'_arden_task05_component', 'meta_value'=>$component ) );
	if ( ! $ids ) { fwrite( STDERR, "Missing draft: {$component}\n" ); exit( 1 ); }
	$id = (int) $ids[0];
	$result = wp_update_post( wp_slash( array( 'ID'=>$id, 'post_content'=>file_get_contents( $root . $file ) ) ), true );
	if ( is_wp_error( $result ) ) { fwrite( STDERR, $result->get_error_message() . "\n" ); exit( 1 ); }
	update_post_meta( $id, '_arden_task06c_native', '1' );
	printf( "SYNCED\t%s\t%d\t%s\n", $component, $id, get_post_status( $id ) );
}
