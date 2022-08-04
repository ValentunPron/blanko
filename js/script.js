import pages from './modules/pages';
import burger from './modules/burger';
import slider from './modules/slider'

$(document).ready( () => {
	// slider
	pages('http://localhost:3000/landingPages', '.landing__list');
	pages('http://localhost:3000/otherPages', '.other__list');
	burger('.header__burger', '.header__menu');
	slider()
});