

const clock = () => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    console.log(`Agora são exatamente ${hours}:${minutes}:${seconds}`)
}

clock()