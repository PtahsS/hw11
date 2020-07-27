const menu = function(secretIngredient, symbol) {
	return `Загадка: Что будет, если смешать фрукт ${this.fruit}, ${this.vegetable} и секретный ингредиент ${secretIngredient}${symbol}`;
}

const products = {
	fruit: "вишня",
	vegetable: "кабачёк",
}

let mix = menu.bind(products);
let symbol = "?";

console.log(mix(secretIngredient = "сахар", symbol))
console.log('Ответ: Вкусный вишневый кабанчик )))')