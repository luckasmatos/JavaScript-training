//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

let person1 = {firstName: `Michael`, secondName: `Jackson`, age: 55, height: 1.7, email: `mj@gmail.com`}
let person2 = {firstName: `Tunico`, secondName: `Tinoco`, age: 96, height: 1.55, email: `tt@gmail.com`}

console.log(person1.firstName === person2.firstName)