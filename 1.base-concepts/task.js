"use strict";

function solveEquation(a, b, c) {
	let arr = [];

	// Вычисляем дискриминант
	const discriminant = b ** 2 - 4 * a * c;

	// Если дискриминант меньше нуля, корней нет
	if (discriminant < 0) {
		return arr; // Возвращаем пустой массив
	}

	// Если дискриминант равен нулю, один корень
	if (discriminant === 0) {
		const root = -b / (2 * a);
		arr.push(root); // Добавляем корень в массив
		return arr;
	}

	// Если дискриминант больше нуля, два корня
	const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
	const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
	arr.push(root1, root2); // Добавляем оба корня в массив
	return arr;
}

// Примеры использования:
console.log(solveEquation(1, -3, 2)); // [2, 1] — два корня
console.log(solveEquation(1, 2, 1)); // [-1] — один корень
console.log(solveEquation(1, 0, 1)); // [] — нет корней


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	// Преобразуем процентную ставку из диапазона от 0 до 100 в диапазон от 0 до 1 и переводим в месячную ставку
	const monthlyPercent = (percent / 100) / 12;

	// Вычисляем тело кредита (сумма кредита минус первоначальный взнос)
	const loanBody = amount - contribution;

	// Если тело кредита равно нулю или меньше нуля, клиент ничего не должен платить
	if (loanBody <= 0) {
		return 0;
	}

	// Рассчитываем ежемесячный платёж по формуле:
	// Платёж = S * (P + (P / (((1 + P)^n) - 1))), где:
	// S — тело кредита, P — месячная процентная ставка, n — количество месяцев
	const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));

	// Общая сумма выплат — это ежемесячный платёж умноженный на количество месяцев
	const totalPayment = monthlyPayment * countMonths;

	// Округляем результат до двух знаков после запятой и возвращаем как число
	return Number(totalPayment.toFixed(2));
}

// Примеры использования:
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52