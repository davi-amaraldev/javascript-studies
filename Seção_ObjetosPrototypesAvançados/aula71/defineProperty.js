// defineProperty - defineProperties
function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // atribui valor à chave
        writable: false, // permite alterações no valor (true or false)
        configurable: false, // permite reconfigurar a chave (true or false)
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // atribui valor à chave
            writable: false, // permite alterações no valor (true or false)
            configurable: false, // permite reconfigurar a chave (true or false)
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // atribui valor à chave
            writable: false, // permite alterações no valor (true or false)
            configurable: false, // permite reconfigurar a chave (true or false)
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);