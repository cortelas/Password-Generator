// Assignment code here
function generatePassword(){
  var passStr = "";

  // Finding password length
  var notValidLength = true;
  var passLength = "";

  // Repeats until a valid length is given
  do{
    passLength = prompt("Please enter your desired password length. Must be between 8 and 128", "8");
    if(passLength >= 8 && passLength <= 128){
      notValidLength = false;
    }
  }
  while (notValidLength)


  // Declaring valid characters
  // var allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var charLower = "abcdefghijklmnopqrstuvwxyz";
  var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charNumeric = "0123456789";
  var charSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var chars = "";

  // Finding desired character types

  var noValidType = true;
  var charType = "";

  // Repeats until valid type(s) is/are given
  do{
    charType = prompt("please enter the character type(s) you want in your password", "lowercase, uppercase, numeric, special");
    if(charType.toLowerCase().includes("lowercase") || charType.toLowerCase().includes("uppercase") || charType.toLowerCase().includes("numeric") || charType.toLowerCase().includes("special")){
      noValidType = false;
    }
  }
  while (noValidType)

  // Adds valid character types to the master string
  if(charType.toLowerCase().includes("lowercase")){
    chars += charLower;
  }
  if(charType.toLowerCase().includes("uppercase")){
    chars += charUpper;
  }
  if(charType.toLowerCase().includes("numeric")){
    chars += charNumeric;
  }
  if(charType.toLowerCase().includes("special")){
    chars += charSpecial;
  }

  // Builds password from valid characters
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
