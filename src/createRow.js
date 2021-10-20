import orders from './basket';
import deleteComponent from './deleteBtn';

function createMenuRow(dishName, dishPrice, btn) {
	const row = document.createElement('div');
	row.classList.add('row');
	const column1 = document.createElement('div');
	column1.classList.add('column');
	const menuItem = document.createElement('div');
	menuItem.classList.add('menu-item');
	column1.appendChild(menuItem);
	const menuItemEl = document.createElement('p');
	menuItemEl.innerHTML = dishName;
	menuItem.appendChild(menuItemEl);
	const column2 = document.createElement('div');
	column2.classList.add('column');
	row.appendChild(column2);
	const priceContainer = document.createElement('div');
	priceContainer.classList.add('price-and-add');
	column1.appendChild(menuItem);
	const priceEl = document.createElement('p');
	priceEl.innerHTML = dishPrice;
	priceEl.classList.add('price-paragraph');

	if (btn === 'add') {
		const addBtn = document.createElement('img');
		addBtn.classList.add('add-btn');
		addBtn.src = 'https://i.ibb.co/st6MTVS/add-btn.png';
		addBtn.alt = 'add dish to busket';
		priceContainer.append(priceEl, addBtn);
		addBtn.addEventListener('click', () => {
			let orderItem = {
				itemName: dishName,
				price: dishPrice,
			};
			orders.push(orderItem);
			document.getElementById('circle').innerHTML = orders.length;
		});
	}
	if (btn === 'delete') {
		const deleteBtn = document.createElement('img');
		deleteBtn.classList.add('delete-btn');
		deleteBtn.src = 'https://i.ibb.co/7nJvxHY/delete-btn.png';
		deleteBtn.alt = 'delete dish from busket';
		priceContainer.append(priceEl, deleteBtn);
		deleteComponent(deleteBtn, dishName);
	}

	column2.appendChild(priceContainer);
	row.append(column1, column2);

	return row;
}
export default createMenuRow;
