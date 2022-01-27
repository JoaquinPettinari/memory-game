export const generateRandomNumber = (numberOfCharacters: number) => {
    const min = Math.pow(10, numberOfCharacters - 1)
    const max = Math.pow(10, numberOfCharacters) - 1
    return generateRandom(min, max)
}

const generateRandom = (min:number, max:number) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}