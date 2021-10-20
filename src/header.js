const createHeader = () => {
	const header = document.createElement('header');
	header.classList.add('header-container');
	const headerContainer = document.createElement('div');
	headerContainer.classList.add('header-container-text');
	headerContainer.classList.add('mb-medium');

	const h1El = document.createElement('h1');
	h1El.innerHTML = 'Ikigai Sushi and Ramen';
	h1El.classList.add('restaurant-name');
	headerContainer.appendChild(h1El);
	const headerAddress = document.createElement('div');

	headerAddress.classList.add('header-address');
	const addressParagraph = document.createElement('p');
	addressParagraph.innerHTML =
		'743 Freedom Lane Modesto, California, USA 12345';
	headerAddress.appendChild(addressParagraph);
	headerContainer.appendChild(headerAddress);

	const headerMainImage = document.createElement('img');
	headerMainImage.classList.add('header-main-image');
	headerMainImage.src = 'https://ibb.co/58dBV53';
	header.appendChild(headerContainer);
	header.appendChild(headerMainImage);
	return header;
};
export default createHeader;
