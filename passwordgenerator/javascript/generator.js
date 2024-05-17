const generatedPassword = document.querySelector("#generatedPassword");
const passwordLength = document.querySelector("#passwordLength");
const generateBtn = document.querySelector("#generateBtn");
const copyBtn = document.querySelector("#copypassword");
const lettersCheckbox = document.querySelector("#letters");
const numbersCheckbox = document.querySelector("#numbers");
const symbolsCheckbox = document.querySelector("#symbols");

function copyToClipboard() {
  generatedPassword.select();
  document.execCommand("copy");
}

function randomNumber(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    result += randomNum;
  }
  return result;
}

function randomSigns(length) {
  const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?";
  let result2 = "";
  for (let i = 0; i < length; i++) {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    result2 += symbol;
  }
  return result2;
}

function randomLetters(length) {
  const letter = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  let result3 = "";
  for (let i = 0; i < length; i++) {
    const letters = letter[Math.floor(Math.random() * letter.length)];
    result3 += letters;
  }
  return result3;
}

function birlesdir() {
  let length = parseInt(passwordLength.value);
  let characterSet = "";

  if (lettersCheckbox.checked) {
    characterSet += "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  }
  if (numbersCheckbox.checked) {
    characterSet += "0123456789";
  }
  if (symbolsCheckbox.checked) {
    characterSet += "!@#$%^&*()_+-=[]{}|;:',.<>?";
  }

  if (characterSet === "") {
    characterSet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
  }

  const mixedArray = _.shuffle(characterSet.split("")).join("");
  generatedPassword.value = mixedArray.slice(0, length);
}

copyBtn.addEventListener("click", copyToClipboard);
generateBtn.addEventListener("click", birlesdir);
lettersCheckbox.addEventListener("change", birlesdir);
numbersCheckbox.addEventListener("change", birlesdir);
symbolsCheckbox.addEventListener("change", birlesdir);

birlesdir();
