const terminal = require('prompt-sync')()

let nota = parseFloat(terminal('Digite uma nota:'));

if (nota >=0 && nota < 4){
    console.log("Reprovado!");
}
else if(nota >=4 && nota < 6){
    console.log("Recuperação");
}
else if(nota >=6 && nota <=10){
    console.log("Parabéns você foi aprovado!!!");
}


