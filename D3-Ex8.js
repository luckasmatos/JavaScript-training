

const user = [{name: `Ana`, amount: 1000, firstPurchase: `yes`, cashPayment: `yes`}] // DIGITE AQUI OS DADOS DA COMPRA

const calculate = (amount, firstPurchase, cashPayment) => {

    let discount = 0

    if (firstPurchase == `yes` && cashPayment == `yes`) {
        if (amount >= 1000) {discount = 30}
        else if (amount < 500) {discount = 20}
        else {discount = 25}
    }
    else if (firstPurchase == `no` && cashPayment == `yes`) {
        if (amount >= 1000) {discount = 20}
        else if (amount < 500) {discount = 10}
        else {discount = 15}
    }
    else if (firstPurchase == `yes` && cashPayment == `no`) {
        if (amount >= 1000) {discount = 20}
        else if (amount < 500) {discount = 10}
        else {discount = 15}
    }
    else {
        if (amount >= 1000) {discount = 10}
        else if (amount < 500) {discount = 0}
        else {discount = 5}
    }

    if (discount > 0) {
        console.log(`
        Obrigado por comprar conosco!!! 
        Valor total dos produtos: R$${amount.toFixed(2)}
        Desconto recebido: ${discount + `%`}
        Valor total da compra: R$${(amount - ((amount / 100) * discount)).toFixed(2)}`)
    }
    else {
        console.log(`
        Obrigado por comprar conosco!!!
        Valor total dos produtos: R$${amount.toFixed(2)}
        Desconto recebido para a próxima compra: ${Math.floor(Math.random() * (21 - 10) + 10) + `%`}`)
    }
}

calculate (user[0].amount, user[0].firstPurchase, user[0].cashPayment)
