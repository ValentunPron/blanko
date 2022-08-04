function burger(parent, parentSelector){
	$(parent).click((event) => {
		$(`${parent}, ${parentSelector}`).toggleClass('active');
		$('body').toggleClass('lock')
	})
}

export default burger;