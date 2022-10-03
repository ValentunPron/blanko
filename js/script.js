import burger from './modules/burger';
import slider from './modules/slider';
import scroll from './modules/scroll';

$(document).ready( () => {
	scroll();
	burger('.header__burger', '.header__menu');
	slider();
});