// seleçao de elementos

const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")



// funcoes
//  letras, numeros, simbolos
 const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

 const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
    return Math.floor(Math.random() * 10)
}

const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%*+-"
    return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(getLetterUpperCase(), getNumber(), getSymbol())



// eventos

generatePasswordButton.addEventListener('click', () => {
    console.log('teste')
})