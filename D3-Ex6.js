

let users = [ 
    { salary: 1000, children: 1 }, // DIGITE AQUI AS INFORMAÇÕES DO USUÁRIO 1
    { salary: 1000, children: 1 }, // DIGITE AQUI AS INFORMAÇÕES DO USUÁRIO 2
    { salary: 1000, children: 1 }, // DIGITE AQUI AS INFORMAÇÕES DO USUÁRIO 3
    { salary: 1000, children: 1 }, // DIGITE AQUI AS INFORMAÇÕES DO USUÁRIO 4
    { salary: -100, children: 1 }, // DIGITE AQUI AS INFORMAÇÕES DO USUÁRIO 5
    { salary: 1000, children: 1 }, // DIGITE AQUI AS INFORMAÇÕES DO USUÁRIO 6
    { salary: 1000, children: 1 }, // DIGITE AQUI AS INFORMAÇÕES DO USUÁRIO 7
    { salary: 1000, children: 1 }  // DIGITE AQUI AS INFORMAÇÕES DO USUÁRIO 8
]

const searchProcessing = (users) => {
    let sumSalary = 0
    let averageSalary = 0
    let higherSalary = 0
    let sumChildren = 0
    let averageChildren = 0

    for (let i = 0; i < users.length; i++) {
        if (users[i].salary < 0) {break}

        sumSalary += users[i].salary
        averageSalary = sumSalary / (i+1)
        sumChildren += users[i].children
        averageChildren = sumChildren / (i+1)

        if (users[i].salary > higherSalary) {higherSalary = users[i].salary}
    }
    return [higherSalary, averageSalary, averageChildren]
}

let [higherSalary, averageSalary, averageChildren] = searchProcessing (users)

console.log(`O maior salário é ${higherSalary.toFixed(2)}`)
console.log(`A média salarial é de ${averageSalary.toFixed(2)}`)
console.log(`A média do número de filhos é de ${averageChildren.toFixed(0)}`)