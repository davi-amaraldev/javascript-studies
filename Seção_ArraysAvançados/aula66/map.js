// Dobre os números
//               0  1   2   3  4 ....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => {
    return `Valor: ${valor} Dobro: ${valor * 2}`;
})

console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Davi', idade: 18 },
    { nome: 'Luiz', idade: 21 },
    { nome: 'Rodrigo', idade: 20 },
    { nome: 'Gabriel', idade: 26 },
    { nome: 'Felipe', idade: 28}
]

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade}));

const comIDs = pessoas.map((obj, indice) => {
    const newObj = {... obj};
    newObj.id = indice
    return newObj;
})

console.log(nomes);
console.log(idades);
console.log(comIDs);