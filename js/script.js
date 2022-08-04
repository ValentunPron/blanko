import pages from './modules/pages';
import burger from './modules/burger';
import slider from './modules/slider'

$(document).ready( () => {
	// slider
	pages();
	burger('.header__burger', '.header__menu');
	slider()
});