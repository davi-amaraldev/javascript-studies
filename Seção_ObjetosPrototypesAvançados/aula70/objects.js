// Factory Functions / Constructor Functions / Classes

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);
}

const p1 = new Pessoa('Davi', 'Henrique');
p1.nome = 'Outra coisa';
const p2 = new Pessoa('Luís Felipe');

console.log(p1);
console.log(p2);

