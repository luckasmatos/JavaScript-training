

const students = [
    { name: 'Lucas', testGrade: 7 },   // DADOS CLIENTE 1
    { name: 'Maria', testGrade: 5 },   // DADOS CLIENTE 2
    { name: 'João', testGrade: 8 },   // DADOS CLIENTE 3
    { name: 'Bruno', testGrade: 9 },   // DADOS CLIENTE 4
    { name: 'Carla', testGrade: 3 },   // DADOS CLIENTE 5
    { name: 'Ana', testGrade: 2 },   // DADOS CLIENTE 6
    { name: 'Julio', testGrade: 10 }   // DADOS CLIENTE 7
]

const result = students.map((checkTest) => {
    let finalResult
    if (checkTest.testGrade >= 7) {finalResult = 'Approved'}
    else {finalResult = 'Disapproved'}

    const newList = { name: checkTest.name, finalResult: finalResult }
    return newList
})
console.log(result)