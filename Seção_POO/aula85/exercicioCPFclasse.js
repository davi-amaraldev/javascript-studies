// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro Dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro Dígito)

*/

class ValidaCPF{
    constructor(cpf){
        this.cpf = cpf;
    }

    get cpfLimpo (){
        return this.cpf.replace(/\D+/g, '');
    }

    get cpfArray (){
        return Array.from(this.cpfLimpo).map(Number);
    }

    valida(){
        if(typeof this.cpf !== 'string') return false;
        if(this.cpfArray.length !== 11) return false;
        if(this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);

        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);

        const novoCpf = cpfParcial + digito1 + digito2;

        return novoCpf === this.cpfLimpo;
    }

    criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial);

        let regressivo = cpfArray.length + 1;

        const total = cpfArray.reduce((acumulador, valor) => {
            acumulador += (regressivo * Number(valor));
            regressivo--;
            return acumulador;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0'  : String(digito);
    }

    isSequencia(){
        const firstNumber= this.cpfArray[0];
        for (let number of this.cpfArray){
            if(number !== firstNumber){
                return false
            }
        }

        return true;
    }
}

const cpf1 = new ValidaCPF('705.484.450-52');
console.log(cpf1.valida());