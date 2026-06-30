class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando.`);
    }

    comer(){
        console.log(`${this.nome} está comendo.`);
    }

    beber(){
        console.log(`${this.nome} está bebendo.`);
    }
}

pessoa1 = new Pessoa('Davi', 'Amaral');
pessoa2 = new Pessoa('Jonatas', 'Amaral');
pessoa3 = new Pessoa('Pedro', 'Amaral');
pessoa4 = new Pessoa('Carlos', 'Amaral');

console.log(pessoa1.falar());
console.log(pessoa2.comer());
console.log(pessoa3.beber());