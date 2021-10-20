import createFooter from './footer';
import createNavbar from './navbar';
const renderContactPage = () => {
	const content = document.querySelector('#content');
	content.innerHTML = '';
	content.appendChild(createNavbar());
	content.appendChild(createFooter());
	return content;
};
export default renderContactPage;
