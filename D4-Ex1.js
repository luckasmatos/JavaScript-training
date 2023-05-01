

const list = [
    { name: 'Lucas', vip: true },   //DADOS CLIENTE 1
    { name: 'Maria', vip: false },   //DADOS CLIENTE 2
    { name: 'João', vip: true },   //DADOS CLIENTE 3
    { name: 'Bruno', vip: true },   //DADOS CLIENTE 4
    { name: 'Carla', vip: false },   //DADOS CLIENTE 5
    { name: 'Ana', vip: true },   //DADOS CLIENTE 6
    { name: 'Julio', vip: false }   //DADOS CLIENTE 7
]

const result = list.map((checkSector) => {
    const newList = {name: checkSector.name, vip: checkSector.vip, setor: checkSector.vip ? 'Black' : 'Green'}
    return newList
})
console.log(result)