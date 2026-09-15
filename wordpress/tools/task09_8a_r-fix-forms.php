<?php
/**
 * Local-only Task 09.8A-R form fidelity repair.
 * Run through the local WordPress bootstrap, never on staging/production.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit( 1 );
}

$form_id = 175;
$form    = get_post( $form_id );

if ( ! $form || 'wpcf7_contact_form' !== $form->post_type ) {
	fwrite( STDERR, "Quote form {$form_id} was not found.\n" );
	exit( 1 );
}

$content = (string) get_post_meta( $form_id, '_form', true );
$replacements = array(
	'"yes|Đã có sẵn file thiết kế (AI/PSD/PDF)"' => '"Đã có sẵn file thiết kế (AI/PSD/PDF)"',
	'"no|Chỉ có hình ảnh tham khảo / ý tưởng"'   => '"Chỉ có hình ảnh tham khảo / ý tưởng"',
	'"need_design|Cần xưởng hỗ trợ lên rập & vẽ đồ họa"' => '"Cần xưởng hỗ trợ lên rập & vẽ đồ họa"',
	'"Đã có sẵn file thiết kế (AI/PSD/PDF)|yes"' => '"Đã có sẵn file thiết kế (AI/PSD/PDF)"',
	'"Chỉ có hình ảnh tham khảo / ý tưởng|no"'   => '"Chỉ có hình ảnh tham khảo / ý tưởng"',
	'"Cần xưởng hỗ trợ lên rập &amp; vẽ đồ họa|need_design"' => '"Cần xưởng hỗ trợ lên rập &amp; vẽ đồ họa"',
);
$updated = strtr( $content, $replacements );

if ( $updated === $content ) {
	fwrite( STDOUT, "Quote labels already corrected or source tokens not present.\n" );
	exit( 0 );
}

$result = update_post_meta( $form_id, '_form', $updated );

if ( false === $result ) {
	fwrite( STDERR, "Could not update the quote form definition.\n" );
	exit( 1 );
}

clean_post_cache( $form_id );
fwrite( STDOUT, "Quote labels corrected on local form {$form_id}.\n" );
