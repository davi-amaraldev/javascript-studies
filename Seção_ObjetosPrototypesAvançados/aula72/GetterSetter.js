function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: false, // permite reconfigurar a chave (true or false)
        get: () => {
            return estoquePrivado;
        },
        set: (value) => {
            if (typeof value !== 'number'){
                console.log('Bad value');
                return;
            }
            estoquePrivado = value;
        }
    });
}

function criaProduto(nome){
    return {
        get nome() {
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    }
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;
console.log(p1.estoque);