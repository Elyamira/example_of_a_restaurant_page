const createAboutMainInfoContainer = () => {
	const aboutMainInfo = document.createElement('div');
	aboutMainInfo.classList.add('about-main-info', 'mb-big');

	const aboutMainImage = document.createElement('div');
	aboutMainImage.classList.add('about-main-image');
	aboutMainInfo.appendChild(aboutMainImage);
	const aboutMainImageEl = document.createElement('img');
	aboutMainImageEl.src = 'https://ibb.co/gwwGgM0';
	aboutMainImageEl.alt = 'photo of rolls and suchi';
	aboutMainImage.appendChild(aboutMainImageEl);
	const aboutTextInfo = document.createElement('div');
	aboutTextInfo.classList.add('about-text-info');
	aboutMainInfo.appendChild(aboutTextInfo);
	const h4El = document.createElement('h4');
	h4El.classList.add('mb-medium');
	h4El.innerHTML = 'Flavor is our purpose';
	const paragraphEl = document.createElement('p');
	paragraphEl.classList.add('about-text-info-paragraph');
	paragraphEl.innerHTML =
		'At Ikigai Sushi and Ramen, it is our mission to introduce you to our favorite flavors, using expert techniques and authentic Japanese ingredients.';
	aboutTextInfo.append(h4El, paragraphEl);
	return aboutMainInfo;
};
export default createAboutMainInfoContainer;
