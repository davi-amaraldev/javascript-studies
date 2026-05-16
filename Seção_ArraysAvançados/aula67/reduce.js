// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
//               0   1   2  3  4  5 .......
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador += valor;
    return acumulador;
}, 0);

// Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Davi', idade: 18 },
    { nome: 'Luiz', idade: 21 },
    { nome: 'Rodrigo', idade: 20 },
    { nome: 'Gabriel', idade: 26 },
    { nome: 'Felipe', idade: 28 }
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(pessoaMaisVelha);
