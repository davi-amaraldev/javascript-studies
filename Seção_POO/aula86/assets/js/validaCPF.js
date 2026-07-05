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