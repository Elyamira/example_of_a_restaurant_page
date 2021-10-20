import orders from './basket';
import createNavbar from './navbar';
import createMenuRow from './createRow';
const checkoutPage = () => {
	const content = document.querySelector('#content');
	content.innerHTML = '';
	content.appendChild(createNavbar());
	const ordersTable = document.createElement('div');
	ordersTable.setAttribute('id', 'ordersTable');
	let sum = 0;
	const orderSum = document.createElement('p');
	let checkoutBtn = document.createElement('button');
	checkoutBtn.classList.add('checkout-btn', 'animated-btn');
	const checkoutSumAndBtnContainer = document.createElement('div');
	checkoutSumAndBtnContainer.classList.add('checkout-sum-and-btn-container');

	if (orders.length > 0) {
		orders.map((order) => {
			ordersTable.append(createMenuRow(order.itemName, order.price, 'delete'));
			let orderPriceNum = order.price.substring(1);
			sum += parseFloat(orderPriceNum);
		});
		orderSum.innerHTML = `Total: $ ${sum}`;
		orderSum.classList.add('order-sum');
		checkoutBtn.innerHTML = 'Confirm the order';
		checkoutSumAndBtnContainer.appendChild(orderSum);
		checkoutSumAndBtnContainer.appendChild(checkoutBtn);
	} else {
		orderSum.innerHTML = 'The basket is empty :(';
		checkoutSumAndBtnContainer.appendChild(orderSum);
	}
	ordersTable.appendChild(checkoutSumAndBtnContainer);

	checkoutBtn.addEventListener('click', () => {
		orders.length = 0;
		content.innerHTML = '';
		let confirmMessage = document.createElement('p');
		content.appendChild(createNavbar());
		confirmMessage.innerHTML =
			'The order is confirmed. We will deliver it to you soon :)';
		content.appendChild(confirmMessage);
	});
	content.appendChild(ordersTable);
	return content;
};
export default checkoutPage;
