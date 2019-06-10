var str = "урок-3-был слишком легким";
console.log(str)
//Делаем первую букву заглавной
function firstSymbol(a) {
	a.toLowerCase();
	a = a[0].toUpperCase() + a.slice(1);
	str = a;
	return str;
}
//Заменяем все "-" на пробелы
function minusToSpace(a) {
	let arr = [];
	for (var i = 0; i < a.length; i++) {
		if (a[i] != "-") {
			arr[i] = a[i];
		} else {
			arr[i] = " ";
		}
	}
	a = arr.join('');
	str = a;
	return a;
}
//ffd

//вызываем функции и выводим в консоль
console.log(firstSymbol(str));
console.log(minusToSpace(str));
//задача номер 3
str = str.substring(0, 18);
console.log(str);
str = str.slice(0, -2);
console.log(str);

//задача номер 4
let array = [20, 33, 1, "Человек", 2, 3];
let sum = 0;
for (var i = 0; i < array.length; i++) {
	if (typeof(array[i]) != 'string') {
			sum += Math.pow(array[i], 2);
			console.log(sum);
	}
}
console.log(Math.pow(sum, 3));

