import renderMenuPage from './menuPage';
const createMenuFavs = () => {
	const showMenu = () => {
		renderMenuPage();
	};
	const menuContainer = document.createElement('div');
	menuContainer.classList.add('menu-container', 'mb-big');
	const menuContainerItems = document.createElement('div');
	menuContainerItems.classList.add('menu-container-items');
	menuContainer.appendChild(menuContainerItems);
	const h2El = document.createElement('h2');
	h2El.classList.add('mb-medium');
	h2El.innerHTML = 'Menu favourites';
	menuContainerItems.appendChild(h2El);
	const row1 = document.createElement('div');
	row1.classList.add('row');
	row1.appendChild(
		createColumn(
			'tsukiji omakase',
			'A platter of our handcrafted sushi selected especially by our chef'
		)
	);
	row1.appendChild(
		createColumn(
			'karaage salad',
			'Our special fried chicken served with fresh salad greens'
		)
	);
	menuContainerItems.appendChild(row1);

	const row2 = document.createElement('div');
	row2.classList.add('row');
	row2.appendChild(
		createColumn(
			'Ikigai oyakodon',
			'The classic chicken and egg bowl served with an Ikigai twist'
		)
	);
	row2.appendChild(
		createColumn(
			'prawn tempura',
			'Golden fried tiger prawns in the lightest crispy batter'
		)
	);
	menuContainerItems.appendChild(row2);
	const row3 = document.createElement('div');
	row3.classList.add('row');
	row3.appendChild(
		createColumn(
			'kurobuta katsu',
			'Breaded cutlets using the finest kurobuta pork from Japan'
		)
	);
	row3.appendChild(
		createColumn(
			'Tonkotsu ramen',
			'Ramen made with pork broth that has been stewed for 16 hours'
		)
	);
	menuContainerItems.appendChild(row3);
	const menuBtnContainer = document.createElement('div');
	menuBtnContainer.classList.add('menu-btn-container', 'mt-medium');
	const menuBtn = document.createElement('button');
	menuBtn.classList.add('menu-btn', 'animated-btn');
	menuBtn.innerHTML = 'view our full menu';
	menuBtn.addEventListener('click', showMenu);
	menuBtnContainer.appendChild(menuBtn);
	menuContainerItems.appendChild(menuBtnContainer);

	const menuContainerImage = document.createElement('div');
	menuContainerImage.classList.add('menu-container-image');
	const menuImg = document.createElement('img');
	menuImg.src = 'https://i.ibb.co/BGM0Cgv/11.png';
	menuImg.alt = 'menu img';
	menuContainerImage.appendChild(menuImg);
	menuContainer.appendChild(menuContainerImage);

	function createColumn(header, paragraph) {
		const column = document.createElement('div');
		column.classList.add('column');
		const menuItem = document.createElement('div');
		column.appendChild(menuItem);
		const h5El = document.createElement('h5');
		h5El.innerHTML = header;
		const pEl = document.createElement('p');
		pEl.innerHTML = paragraph;
		menuItem.appendChild(h5El);
		menuItem.appendChild(pEl);
		return column;
	}
	return menuContainer;
};

export default createMenuFavs;
