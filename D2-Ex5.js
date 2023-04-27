

let users = [
    {name: `Michael`, age: 65, genre: `Male`, profession: `Singer`, nationality: `American`},
    {name: `Tunico`, age: 75, genre: `Male`, profession: `Singer`, nationality: `Brazilian`},
    {name: `Joãozinho`, age: 15, genre: `Male`, profession: `Student`, nationality: `Brazilian`},
    {name: `Derci`, age: 380, genre: `Female`, profession: `Singer`, nationality: `Brazilian`},
    {name: `Roberto`, age: 65, genre: `Male`, profession: `Empreteur`, nationality: `American`}  
]

for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18 && users[i].nationality === `Brazilian`) {console.log(`${users[i].name} foi aprovado(a)`)}
    else {console.log(`${users[i].name} foi reprovado(a)`)}
}
