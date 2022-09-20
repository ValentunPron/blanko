import burger from './modules/burger';
import slider from './modules/slider'

$(document).ready( () => {
	// slider
	burger('.header__burger', '.header__menu');
	slider()
});