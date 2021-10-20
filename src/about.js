import createAboutAdditionalInfo from './aboutAdditionalInfo';
import createMenuFavs from './menu';
const createAboutComponent = () => {
	const aboutContainer = document.createElement('div');
	aboutContainer.classList.add('about-container');
	aboutContainer.appendChild(createAboutAdditionalInfo());
	aboutContainer.appendChild(createMenuFavs());
	return aboutContainer;
};
export default createAboutComponent;
