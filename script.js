// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}

function getRandomItem(list){
  return list[randomInt(list.length)]
}

function generatePassword() {

  var userInput = window.prompt("How many characters would you like the password to be?");

  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("That is not a number.")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please select a password length between 8 and 128.")
    return
  }

  var userNumberChoice = window.confirm("Would you like to include numbers in your password?")
  var userSymbolChoice = window.confirm("Would you like to include symbols in your password?")
  var userLowerCaseChoice = window.confirm("Would you like to include lowercase letters in your password?")
  var userUpperCaseChoice = window.confirm("Would you like to include uppercase letters in your password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "&", "(", ")", "/", "<", ">", "?"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []

  var options = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (userNumberChoice === true) {
    options.push(numberList)
  }

  if (userSymbolChoice === true) {
    options.push(symbolList)
  }

  if (userLowerCaseChoice === true) {
    options.push(lowercaseList)
  }

  if (userUpperCaseChoice === true) {
    options.push(uppercaseList)
  }

  if (options.length === 0) {
    options.push(lowercaseList)
  }

  var generatePassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(options)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar
  }

  return generatePassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


