const terminal = require('prompt-sync')();

let numero1 = parseFloat(terminal('Digite um valor:'));

if(numero1 % 2 === 0){
    console.log('O número', numero1, 'é par');
}
if(numero1 % 2 === 1){
    console.log('O número', numero1,'é impar');   
}