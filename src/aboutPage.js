import createAboutMainInfoContainer from './aboutMainInfo';
import createNavbar from './navbar';
const renderAboutPage = () => {
	const content = document.querySelector('#content');
	content.innerHTML = '';
	content.appendChild(createNavbar());
	content.appendChild(createAboutMainInfoContainer());
};
export default renderAboutPage;
