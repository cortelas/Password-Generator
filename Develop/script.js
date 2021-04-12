// Assignment code here
function generatePassword(){
  // Declaring valic characters
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var passLength = prompt("Please enter your desired password length", "8");
  var passStr = "";

  for (let index = 0; index < passLength; index++) {
    passStr += chars.charAt(Math.floor(Math.random() * chars.length));
    
  }

  return passStr;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
