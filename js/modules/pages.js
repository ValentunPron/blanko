import {getResourse} from '../services/services'

function pages(http, parent){
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
	error.innerHTML = 'Sorry, an error occurred!';
	getResourse(http)
		.then(data => {
			data.forEach(({href, src, alt, subtitle}) => {
				new pagesItem(href, src, alt, subtitle, parent).addItem();
			}); 
		}).catch(e => {
			console.error(e);
			$(parent).append(error)
		})
}

export default pages;