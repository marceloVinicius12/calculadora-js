let primeiroNumero = parseFloat(prompt("informe o primeiro número"));

let operacao = parseInt(prompt("escolha 1 para soma, 2 para subtração, 3 para multiplicação e 4 para divisão"));


let segundoNumero = parseFloat(prompt("informe o segundo numero"));
if(operacao == 1){
let resultado = primeiroNumero + segundoNumero;
document.write("<h2>" + primeiroNumero + " + " + segundoNumero + " = " + resultado + "</h2>");
}else if(operacao == 2){
    let resultado = primeiroNumero - segundoNumero;
document.write("<h2>" + primeiroNumero + " - " + segundoNumero + " = " + resultado + "</h2>");
}else if(operacao == 3){
    let resultado = primeiroNumero * segundoNumero;
document.write("<h2>" + primeiroNumero + " x " + segundoNumero + " = " + resultado + "</h2>");
}else if(operacao == 4){
    let resultado = primeiroNumero / segundoNumero;
document.write("<h2>" + primeiroNumero + " / " + segundoNumero + " = " + resultado + "</h2>");
}