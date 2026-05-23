/*
Object.values
Object.entries
Object.assign(des, any) (copia o objeto)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread) (também copia o objeto)

-> Já vimos

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
 */

const produto = { nome: 'Caneca', preco: 1.8 };
for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}