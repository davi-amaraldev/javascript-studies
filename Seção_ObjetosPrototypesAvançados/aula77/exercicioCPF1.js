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

// let cpf = '705.484.450-52';
let cpf = '705.484.450-53';

let cpfReg = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfReg).map(Number);

function validateCPF(arr) {
    if (arr.length !== 11) {
        return false;
    }

    if (verifyEqualNumber(arr)) {
        return false;
    }

    const cpfBase = arr.slice(0, 9);
    const total = calculateTotal(cpfBase, 10)
    const firstDigit = getDigit(total);

    if(firstDigit !== arr[9]){
        return false;
    }

    const secondBase = [...cpfBase, firstDigit];
    const secondTotal = calculateTotal(secondBase, 11);
    const secondDigit = getDigit(secondTotal);

    if(secondDigit !== arr[10]){
        return false;
    }

    return true;

}

function verifyEqualNumber(arr){
    const firstNumber = arr[0];

    for (let number of arr){
        if(number !== firstNumber){
            return false;
        }
    }

    return true;
}

function calculateTotal(arr, weight){
    let initialWeight = weight;
    let total = 0;
    for (let number of arr){
        let multiply = number * initialWeight;
        total += multiply;
        initialWeight--;
    }

    return total;
}

function getDigit(total){
    let calc = 11 - (total % 11);
    if (calc > 9){
        calc = 0;
    }
    return calc;
}

console.log(validateCPF(cpfArray));