function slider() {
	$('.slider__body').slick({
		dots: true,
		appendDots:$('.slider__dots'),
		infinite: true,
		autoplay: true,
		autoplaySpeed: 15000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		speed: 500,
		fade: true,
		cssEase: 'linear',
	});

	var activeClass = 'slick-active',
	ariaAttribute = 'aria-hidden';
	$( '.slider__body' )
	.on( 'init', function() {
		$( '.slick-dots li:first-of-type' ).addClass( activeClass ).attr( ariaAttribute, false );
	} )
	.on( 'afterChange', function( event, slick, currentSlide ) {
		var $dots = $( '.slick-dots' );
		$( 'li', $dots ).removeClass( activeClass ).attr( ariaAttribute, true );
		$dots.each( function() {
			$( 'li', $( this ) ).eq( currentSlide ).addClass( activeClass ).attr( ariaAttribute, false );
		} );
	} );
	$( '.slider__body' ).slick();
}

export default slider;