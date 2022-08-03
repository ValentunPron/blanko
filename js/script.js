$(document).ready( () => {
	// pages 
	class pagesItem {
		constructor(href, src, alt, subtitle, parentSelector) {
			this.href = href;
			this.src = src;
			this.alt = alt;
			this.subtitle = subtitle;
			this.parent = document.querySelector(parentSelector);
		}

		addItem() {
			const element = document.createElement('li');
			element.classList.add('pages__item');
			element.innerHTML = `
			<a href="${this.href}" class="pages__link">
				<div class="pages__bg">
					<img src="${this.src}" alt="${this.alt}" class="pages__image" width="334" height="334">
				</div>
				<h4 class="pages__subtitle">${this.subtitle}</h4>
			</a>`;
			this.parent.append(element)
		}
	}
	const error = document.createElement('h3');
	error.classList.add('pages__title', 'error-title');
	error.innerHTML = 'К сожалению, возникла ошибка!'
	const getResourse = async(url) => {
		const res = await fetch(url);
	
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status ${res.status}`);
		}
		return await res.json();
	};
	getResourse('http://localhost:3000/landingPages')
		.then(data => {
			data.forEach(({href, src, alt, subtitle}) => {
				new pagesItem(href, src, alt, subtitle, '.landing__list').addItem();
			}); 
		}).catch(e => {
			console.error(e);
			$('.landing__list').append(error)
		})
	getResourse('http://localhost:3000/otherPages')
		.then(data => {
			data.forEach(({href, src, alt, subtitle}) => {
				new pagesItem(href, src, alt, subtitle, '.other__list').addItem();
			}); 
		}).catch(e => {
			console.error(e);
			$('.other__list').append(error)
		})
	// burger

	$('.header__burger').click((event) => {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	})

	// slider

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
});