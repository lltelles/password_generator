// seleçao de elementos

const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// funcoes
//  letras, numeros, simbolos
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 10);
};

const getSymbol = () => {
  const symbols = "(){}[]=<>/!@#$%*+";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

console.log(getLetterUpperCase(), getNumber(), getSymbol());

const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) => {
  let password = "";

  const passwordLength = 10;

  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  ];

  for (i = 0; i < passwordLength; i = i + 4) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }
  password = password.slice(0, passwordLength);
  generatedPasswordElement.style.display = "block"
  generatedPasswordElement.querySelector('h4').innerText = password
};

// eventos

generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});
