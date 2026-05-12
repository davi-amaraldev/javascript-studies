// Filter, map, reduce

// Retorne os números maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter((n, indice, array) => {
//    console.log(n, indice, array);
//     return n > 10;
// });

// console.log(numerosFiltrados)

// O filter sempre vai retornar um array.

/* 
* Retorne as pessoas que tem o nome com 5 letras ou mais
* Retorne as pessoas com mais de 50 anos
* Retorne as pessoas cujo nome termina com a 
*/
const pessoas = [
    { nome: 'José', idade: 55 },
    { nome: 'Maria', idade: 32 },
    { nome: 'Carlos', idade: 27 },
    { nome: 'Ana', idade: 19 },
    { nome: 'Lucas', idade: 23 }
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisAnos = pessoas.filter(obj => obj.idade >= 50);
const ultimaLetraA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);
console.log(pessoasComMaisAnos);
console.log(ultimaLetraA);