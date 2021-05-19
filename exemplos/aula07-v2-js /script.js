// +, - , *, /, **, %

var soma = 1 + 2;
console.log("Soma: "+soma);

var subtracao = 2 - 1; 
console.log("Subtração: " + subtracao);

var multiplicacao = 10 * 2;
console.log("multiplicacao"+ multiplicacao);

var divisao = 10 / 2;
console.log("divisao: "+divisao);

var potencia = 10 ** 3 // 10 * 10 * 10
console.log("potencia: "+ potencia);


var resto = 10 % 3; // 1
console.log("resto: "+resto);

var agrupamento = (4+2)/2;
console.log("agrupamento: "+agrupamento);

var atribuicao1 = "valor: "; // valor: 3
atribuicao1 += agrupamento;

var incremento = agrupamento;
incremento++;
console.log("incremento: "+incremento);

var decremento = agrupamento;
decremento--;
console.log("decremento: " + decremento);

console.log(Math);
console.log(Math.random());
console.log(Math.abs(-0.2323));
console.log(Math.round(0.5));
console.log(Math.pow(2, 3));

// 100% --->  1850
// 20% ---->    x

var valorComDesconto = 1850 - ((1850*20) / 100);

console.log(valorComDesconto);