
function scroll() {
	$('.landing-button').click(() => {
		$('html, body').animate({
			scrollTop: ($('.pages__landing').offset().top) - 100
		}, 400);
		if ($('.header__burger, .header__menu').hasClass('active')) {
			$('.header__burger, .header__menu').toggleClass('active');
			$('body').toggleClass('lock')
		}
	});
	$('.pages-button').click(() => {
		$('html, body').animate({
			scrollTop: ($('.pages__other').offset().top) - 100
		}, 400);
		if ($('.header__burger, .header__menu').hasClass('active')) {
			$('.header__burger, .header__menu').toggleClass('active');
			$('body').toggleClass('lock')
		}
	});
	$('.template-button').click(() => {
		$('html, body').animate({
			scrollTop: ($('.template').offset().top)  - 50
		}, 400);
		if ($('.header__burger, .header__menu').hasClass('active')) {
			$('.header__burger, .header__menu').toggleClass('active');
			$('body').toggleClass('lock')
		}
	});
	$('.sign-up-button').click(() => {
		$('html, body').animate({
			scrollTop: ($('.forms').offset().top) - 50 
		}, 400);
		if ($('.header__burger, .header__menu').hasClass('active')) {
			$('.header__burger, .header__menu').toggleClass('active');
			$('body').toggleClass('lock')
		}
	});
	$('.logo__link').click(() => {
		$('html, body').animate({
			scrollTop: 0 
		}, 400);
	});
}

export default scroll;