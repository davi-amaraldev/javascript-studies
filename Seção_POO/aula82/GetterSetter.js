const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    frear(){
        if(this[_velocidade] < 0) return;
        this[_velocidade]--;
    }

    get velocidade(){
        console.log('GETTER')
        return this[_velocidade];
    }

    set velocidade(valor){
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;

        this[_velocidade] = valor;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i < 100; i++){
    c1.acelerar();
}

c1.velocidade = 40;

console.log(c1.velocidade);

// -----------------------------------------------

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

pessoa1 = new Pessoa('Davi', 'Amaral');
pessoa1.nomeCompleto = 'Davi Henrique';
console.log(pessoa1.nomeCompleto);




















