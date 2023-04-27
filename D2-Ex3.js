

let randomNumber1 = Math.floor(Math.random() * (10 - 1) + 1)
const randomNumber2 = Math.floor(Math.random() * (10 - 1) + 1)

if (randomNumber1 === randomNumber2){
    console.log(`Seu número é o ${randomNumber1}. O número sorteado foi ${randomNumber2}. Parabéns, você é o ganhador!!!`)}
else {
    console.log(`Seu número é o ${randomNumber1}. O número sorteado foi ${randomNumber2}. Não foi dessa vez, continue tentando...`)}