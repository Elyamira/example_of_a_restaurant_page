const createAboutAdditionalInfo = () => {
	const aboutAdditionalInfo = document.createElement('div');
	aboutAdditionalInfo.classList.add('about-additional-info', 'mb-big');
	const h2El = document.createElement('h2');
	h2El.classList.add('mb-medium');
	h2El.innerHTML = 'The finest Asian flavours';
	const aboutAdditionalInfoItems = document.createElement('div');
	aboutAdditionalInfo.append(h2El, aboutAdditionalInfoItems);
	aboutAdditionalInfoItems.classList.add('about-additional-info-items');
	aboutAdditionalInfoItems.appendChild(
		createItem('https://i.ibb.co/NZLffbq/8.png', 'Crafted by our master chefs')
	);
	aboutAdditionalInfoItems.appendChild(
		createItem('https://i.ibb.co/341GNq1/9.png', 'using the finest ingredients')
	);
	aboutAdditionalInfoItems.appendChild(
		createItem(
			'https://i.ibb.co/2tnKbkg/10.png',
			'Served with care and passion'
		)
	);
	return aboutAdditionalInfo;

	function createItem(source, paragraph) {
		const aboutAdditionalInfoItem = document.createElement('div');
		aboutAdditionalInfoItem.classList.add(
			'about-additional-info-item',
			'item-chefs'
		);
		const imgEl = document.createElement('img');
		imgEl.src = source;
		imgEl.classList.add('item-chefs-img');
		const pEl = document.createElement('p');
		pEl.classList.add('about-additional-info-text');
		pEl.innerHTML = paragraph;
		aboutAdditionalInfoItem.append(imgEl, pEl);

		return aboutAdditionalInfoItem;
	}
};
export default createAboutAdditionalInfo;
