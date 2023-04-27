

let number = 95 // DIGITE UM NÚMERO

if ((number % 2) === 0){
    if ((number % 5) === 0) {console.log(`O número ${number} é par e divisível por 5`)}
    else {console.log(`O número ${number} é par e NÃO é divisível por 5`)}}
else {
    for (let i = 2; i < number; i++) {
        if ((number % i) === 0) {console.log(`O número ${number} é impar e NÃO é primo`); break}
        else if (i === number - 1) {console.log(`O número ${number} é impar e primo`)}}
}