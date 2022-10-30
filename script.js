// Assignment Code
var generateBtn = document.querySelector("#generate");


// Functions


function randomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpperCase() {

}

function randomNumeric() {

}

function specialChar() {

}

// Write password to the #password input
function writePassword() {

  var lengthOfPass = prompt("Please choose the length of your password. Must be between 8 and 128 characters.");

  var includeLower = confirm("Would you like to include lowercase characters?");

  var includeUpper = confirm("Would you like to include uppercase characters?");

  var includeNumeric = confirm("Would you like to include numeric characters?");

  if (lengthOfPass < 8) {
    alert("Please select a password length within 8 to 128 characters.");
  } else {
    includeLower;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


