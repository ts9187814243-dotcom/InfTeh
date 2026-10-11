// ============================================================
// Шаг 1. Находим элементы на странице
// ============================================================
const billInput = document.getElementById('bill');
const tipSelect = document.getElementById('tip');
const Btnl = document.getElementById('Btnl');
const calcBtn = document.getElementById('calcBtn');
const resultBlock = document.getElementById('result');
// ============================================================
// Шаг 2. Пишем функцию, которая считает чаевые
// ============================================================
function calculateTips() {
 // Получаем значение из поля ввода и преобразуем в число
 const bill = Number(billInput.value);
 // Получаем процент из выпадающего списка и преобразуем в число
 const tipPercent = Number(tipSelect.value);
 // Проверяем: если поле пустое или введено не число
 if (isNaN(bill) || bill <= 0) {
 resultBlock.textContent = 'Пожалуйста, введите корректную сумму.';
 resultBlock.style.borderColor = 'red';
 return; // выходим из функции, дальше не идём
 }
 // Считаем чаевые и итоговую сумму
 const tipAmount = bill * tipPercent / 100;
 const total = bill + tipAmount;
 // Формируем текст результата
 resultBlock.textContent =
 'Сумма счёта: ' + bill.toFixed(2) + ' ₽\n' +
 'Чаевые (' + tipPercent + '%): ' + tipAmount.toFixed(2) + ' ₽\n' +
 'Итого: ' + total.toFixed(2) + ' ₽';
 // Меняем цвет рамки в зависимости от процента
 if (tipPercent < 10) {
 resultBlock.style.borderColor = 'green'; // мало - зелёный
 } else if (tipPercent <= 15) {
 resultBlock.style.borderColor = 'orange'; // средне - оранжевый
 } else {
 resultBlock.style.borderColor = 'red'; // много - красный
 }
}
// ============================================================
// Шаг 3. Привязываем функцию к кнопке
// ============================================================
calcBtn.addEventListener('click', calculateTips);
// ============================================================
// Функция смены темы
function changeTheme() {
	const body = document.body;
	const container = document.querySelector('.container');
	const inputs = document.querySelectorAll('input, select');
	const buttons = document.querySelectorAll('button');
	const resultBlock = document.getElementById('result');

	const isDark = body.style.backgroundColor === 'black';

	if (isDark) {
	// Светлая тема
		body.style.backgroundColor = '#f4f4f4';
		body.style.color = '#444';
		container.style.backgroundColor = '#fff';
		inputs.forEach(el => {
			el.style.backgroundColor = '#fff';
			el.style.color = '#444';
			el.style.borderColor = '#ccc';
		});
		buttons.forEach(el => {
			el.style.backgroundColor = '#3498db';
			el.style.color = 'black';
		});
		resultBlock.style.backgroundColor = '#fff';
		resultBlock.style.color = '#333';
		resultBlock.style.borderLeftColor = '#ddd';
	} else {
	// Тёмная тема
		body.style.backgroundColor = 'black';
		body.style.color = 'white';
		container.style.backgroundColor = '#34495e';
		inputs.forEach(el => {
			el.style.backgroundColor = '#2c3e50';
			el.style.color = '#fff';
			el.style.borderColor = '#555';
		});
		buttons.forEach(el => {
			el.style.backgroundColor = '#2980b9';
			el.style.color = '#fff';
		});
		resultBlock.style.backgroundColor = '#34495e';
		resultBlock.style.color = '#fff';
		resultBlock.style.borderLeftColor = '#555';
	}
}

// Добавляем обработчик события
Btnl.addEventListener('click', changeTheme);
