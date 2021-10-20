import createNavbar from './navbar';
import createHeader from './header';
import createFooter from './footer';
import createAboutComponent from './about';
const createApp = () => {
	const content = document.querySelector('#content');
	content.appendChild(createNavbar());
	content.appendChild(createHeader());
	content.appendChild(createAboutComponent());
	content.appendChild(createFooter());
};
export default createApp;
