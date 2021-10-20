import renderMenuPage from './menuPage';
import renderContactPage from './contactPage';
import createApp from './app';
import renderAboutPage from './aboutPage';
import checkoutPage from './checkoutPage';
import orders from './basket';
const createNavbar = () => {
	const navEl = document.createElement('nav');
	const uLEl = document.createElement('ul');
	navEl.classList.add('nav');
	uLEl.classList.add('navbar');
	const createLiElements = ['Home', 'Menu', 'About', 'Contact'];
	createLiElements.map((element) => {
		const liElement = document.createElement('li');
		liElement.innerHTML = element;
		uLEl.appendChild(liElement);

		if (element === 'Contact') {
			liElement.addEventListener('click', () => {
				renderContactPage();
			});
		}
		if (element === 'Home') {
			liElement.addEventListener('click', () => {
				document.querySelector('#content').innerHTML = '';
				createApp();
			});
		}
		if (element === 'Menu') {
			liElement.addEventListener('click', () => {
				document.querySelector('#content').innerHTML = '';
				renderMenuPage();
			});
		}
		if (element === 'About') {
			liElement.addEventListener('click', () => {
				renderAboutPage();
			});
		}
	});
	navEl.appendChild(uLEl);
	const basketContainer = document.createElement('div');
	const basketImg = document.createElement('img');
	basketContainer.appendChild(basketImg);
	basketContainer.classList.add('basket-container');

	basketImg.src = 'https://ibb.co/pvwSp0j';
	const circle = document.createElement('div');
	circle.classList.add('basket-circle');
	circle.setAttribute('id', 'circle');
	basketImg.addEventListener('click', () => {
		checkoutPage();
	});
	circle.innerHTML = orders.length;

	basketContainer.appendChild(circle);
	navEl.append(basketContainer);
	return navEl;
};
export default createNavbar;
