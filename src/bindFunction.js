
 //   Method 1. Arrow function

const bind = (fn, context, ...boundArgs) => (...args) => 
	fn.apply(context, [...boundArgs, ...args]);


/*   Method 2. Function expression

const bind = function(fn, context, ...boundArgs) {
	return function (...args) {
		console.log('My own function Bind');
		return fn.apply(context, [...boundArgs, ...args]);
	}
}
*/


const menu = function(secretIngredient, symbol) {
	return `Загадка: Что будет, если смешать фрукт ${this.fruit}, ${this.vegetable} и секретный ингредиент ${secretIngredient}${symbol}`;
}

const products = {
	fruit: "вишня",
	vegetable: "кабачёк",
};

const mix = bind(menu, products);
const symbol = "?";
console.log(mix(secretIngredient = "сахар", symbol));
console.log('Ответ: Вкусный вишневый кабанчик )))');

