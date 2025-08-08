const soma = require('./utils/soma');
const sub = require('./utils/subtracao');
const mult = require('./utils/multiplicacao');
const div = require('./utils/divisao');

const a = 10;
const b = 4;

console.log("Soma:", soma(a, b));
console.log("Subtração:", sub(a, b));
console.log("Multiplicação:", mult(a, b));
console.log("Divisão:", div(a, b));
