

const interestRate = (initialValue, atualValue, months) => {
    return (atualValue - initialValue) / (initialValue * months) * 100
}

let initialValue1 = 1000 // DIGITE AQUI O VALOR INICIAL INVESTIDO
let atualValue1 = 2500 // DIGITE AQUI O VALOR ATUAL ACUMULADO
let months1 = 10 // DIGITE AQUI O TOTAL DE MESES INVESTIDOS
console.log(`A rentabilidade do investimento é de ${interestRate(initialValue1, atualValue1, months1)}% a.m.`)
