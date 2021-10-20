import orders from './basket';
import createNavbar from './navbar';
import createMenuRow from './createRow';

const deleteComponent = (btn, dishName) => {
	btn.addEventListener('click', () => {
		const content = document.querySelector('#content');
		content.innerHTML = '';
		content.appendChild(createNavbar());
		const ordersTable = document.createElement('div');
		ordersTable.setAttribute('id', 'ordersTable');
		const itemNameToDelete = dishName;
		let sum = 0;
		let deletedItem = orders.findIndex(
			(order) => order.itemName === itemNameToDelete
		);
		orders.splice(deletedItem, 1);
		const orderSum = document.createElement('p');
		const checkoutBtn = document.createElement('button');
		checkoutBtn.classList.add('checkout-btn');
		orderSum.classList.add('order-sum');
		const checkoutSumAndBtnContainer = document.createElement('div');
		checkoutSumAndBtnContainer.classList.add('checkout-sum-and-btn-container');
		if (orders.length > 0) {
			orders.map((order) => {
				ordersTable.append(
					createMenuRow(order.itemName, order.price, 'delete')
				);
				let orderPriceNum = order.price.substring(1);
				sum += parseFloat(orderPriceNum);
			});
			orderSum.innerHTML = `Total:$${sum}`;
			orderSum.classList.add('order-sum');
			checkoutBtn.innerHTML = 'Confirm the order';
			checkoutSumAndBtnContainer.appendChild(orderSum);
			checkoutSumAndBtnContainer.appendChild(checkoutBtn);
		} else {
			orderSum.innerHTML = 'The basket is empty :(';
			checkoutSumAndBtnContainer.appendChild(orderSum);
		}
		ordersTable.appendChild(checkoutSumAndBtnContainer);
		content.appendChild(ordersTable);
		checkoutBtn.addEventListener('click', () => {
			orders.length = 0;
			content.innerHTML = '';
			let confirmMessage = document.createElement('p');
			content.appendChild(createNavbar());
			confirmMessage.innerHTML =
				'The order is confirmed. We will deliver it to you soon :)';
			content.appendChild(confirmMessage);
		});
		document.getElementById('circle').innerHTML = orders.length;
	});
};
export default deleteComponent;
