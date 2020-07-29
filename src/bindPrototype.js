
Function.prototype._bind = function(ctx, ...boundArgs) {
  ctx.__temp__ = this;
  return (function(...args) {
    return ctx.__temp__([...boundArgs, ...args]);
  });
}

const menu = function(secretIngredient, symbol) {
	return `Загадка: Что будет, если смешать фрукт ${this.fruit}, ${this.vegetable} и секретный ингредиент ${secretIngredient}${symbol}`;
}

const products = {
	fruit: "вишня",
	vegetable: "кабачёк",
}

const mix = menu._bind(products);
const symbol = "?";
console.log(mix(secretIngredient = "сахар", symbol));
console.log('Ответ: Вкусный вишневый кабанчик )))');

