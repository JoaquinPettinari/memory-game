export const generateRandomNumber = (numberOfCharacters: number) => {
    let arrayOfNumber = ""
    while(arrayOfNumber.length !== numberOfCharacters){
        arrayOfNumber += Math.floor(Math.random() * 10)
    }
    return arrayOfNumber
}