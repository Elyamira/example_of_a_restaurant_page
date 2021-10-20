import createNavbar from './navbar';
import orders from './basket';
import createMenuRow from './createRow';
const renderMenuPage = () => {
	const content = document.querySelector('#content');
	content.innerHTML = '';
	content.appendChild(createNavbar(orders.length));
	content.appendChild(createMenuPage());
	return content;
};
function createMenuPage() {
	const menuPage = document.createElement('div');
	menuPage.classList.add('menu-page');
	const menuImgContainer = document.createElement('div');
	menuImgContainer.classList.add('menu-img-container');
	const menuImg = document.createElement('img');
	menuImg.classList.add('menu-img');
	menuImg.src = 'https://i.ibb.co/RHppsy6/menu.png';
	menuImgContainer.appendChild(menuImg);
	const menuPageItems = document.createElement('div');
	menuPage.append(menuImgContainer, menuPageItems);
	menuPageItems.classList.add('menu-page-items');
	const h1El = document.createElement('h1');
	h1El.classList.add('menu-header');
	h1El.innerHTML = 'Ikigai Sushi and Ramen Menu';
	menuPageItems.appendChild(h1El);
	menuPageItems.appendChild(createCategory('Appetizers & Soups'));
	menuPageItems.appendChild(createMenuRow('Tonkotsu Ramen', '$4.50', 'add'));
	menuPageItems.appendChild(createMenuRow('Ikigai Oyakodon', '$5.00', 'add'));
	menuPageItems.appendChild(
		createMenuRow('Miso Soup (with seaweed & tofu)', '$5.00', 'add')
	);

	menuPageItems.appendChild(createCategory('Sushi: Nigiri & Rolls'));
	menuPageItems.appendChild(createMenuRow('Prawn Tempura', '$8.00', 'add'));
	menuPageItems.appendChild(createMenuRow('Tsukiji Omakase', '$6.50', 'add'));
	menuPageItems.appendChild(
		createMenuRow(
			'Philadelphia Roll (smoked salmon + cream cheese) ',
			'$9.50',
			'add'
		)
	);
	menuPageItems.appendChild(
		createMenuRow('California Roll (crab stick + avocado)', '$7.00', 'add')
	);
	menuPageItems.appendChild(createCategory('Special Plates'));
	menuPageItems.appendChild(createMenuRow('Karaage Salad', '$10.00', 'add'));
	menuPageItems.appendChild(createMenuRow('Kurobuta Katsu', '$17.00', 'add'));
	menuPageItems.appendChild(
		createMenuRow(
			'Chirashizushi (rice topped with assorted fish)',
			'$22.50',
			'add'
		)
	);

	menuPageItems.appendChild(createCategory('Hot & Cold Drinks'));

	menuPageItems.appendChild(
		createMenuRow('Green Tea (served hot or cold)', '$3.00', 'add')
	);
	menuPageItems.appendChild(
		createMenuRow('Ikigai Tea (special seasonal iced tea)', '$5.00', 'add')
	);
	menuPageItems.appendChild(createMenuRow('Bottled Water', '$1.50', 'add'));
	menuPageItems.appendChild(createMenuRow('Latte', '$4.50', 'add'));
	return menuPage;
}
function createCategory(header) {
	const h4El = document.createElement('h4');
	h4El.innerHTML = header;
	return h4El;
}
export default renderMenuPage;
