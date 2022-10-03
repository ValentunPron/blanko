
function scroll() {
	$('.menu__link').each((index, element) => {
		console.log(element.id);
		$(`#${element.id}`).click((e) => {
			console.log(e.target)

			$('html, body').animate({
				scrollTop: $(`.${element.id}`).offset().top
			}, 1000);
			if ($('.header__burger, .header__menu').hasClass('active')) {
				$('.header__burger, .header__menu').toggleClass('active');
				$('body').toggleClass('lock')
			}
		})
	}) 
}

export default scroll;