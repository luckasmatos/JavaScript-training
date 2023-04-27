

const calculate = (number1) => {
    if (number1 >= 1 && number1 <= 10) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${number1} x ${i} = ${number1 * i}`)
        }   
    }
    else {
        console.log(`Valor inválido. Por favor, digite um número entre 1 e 10`)
    }
}

calculate (1) // DIGITE AQUI UM VALOR
