const terminal = require('prompt-sync')();

let celcius = parseFloat(terminal('Digite a temperatura em celsius:'));

fahreinheit = ((celcius * 9/5) + 32);

console.log('A temperaura em fahreinheit:', fahreinheit);