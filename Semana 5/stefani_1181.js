var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let l =  parseInt(lines.shift());
let operacao = lines.shift();

let matriz = [];

for (var i = 0; i < 12; i++) {
    let aux = [];
    for (var j = 0; j < 12; j++) {
        var c = parseFloat(lines.shift());
        
        aux.push(c);
    }

    matriz.push(aux)
}
let soma = 0.0;
for (var i = 0; i < 12; i++) {
    soma+= matriz[l][i]
}

if (operacao == 'M') {

    console.log((soma/12).toFixed(1));
} else {

    console.log((soma).toFixed(1));
}