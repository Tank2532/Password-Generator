// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
var specialCharacters = [
  '!', '@', '#', '$', '%', '&', '?', '+', '^', ':', '\\', '/', "'", ',', ')', '(', '{', '}', '[', ']', '~', '-', '_', '.'
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var passwordLength = prompt("Choose a passwork length between 8 and 128.")

  if (!passwordLength) return "No Password";
  
  passwordLength = parseInt(passwordLength);

  if (!passwordLength) {
    console.log("Stop")
    alert("Please enter a valid number.")
    return generatePassword();
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.")
    return generatePassword();
  }

  var allCharacters = [];

  var includeNumbers = confirm("Include numbers?");
  if (includeNumbers) {
    allCharacters = allCharacters.concat(numericCharacters);
  }

  var includeLowerCasedCharacters = confirm("Include lower case?");
  if (includeLowerCasedCharacters) {
    allCharacters = allCharacters.concat(lowerCasedCharacters)
  }

  var includeUpperCasedCharacters = confirm("Include upper case?");
  if (includeUpperCasedCharacters) {
    allCharacters = allCharacters.concat(upperCasedCharacters)
  }

  var includeSpecialCharacters = confirm("Include special characters?");
  if (includeSpecialCharacters) {
    allCharacters = allCharacters.concat(specialCharacters)
  }

  var password = "";

  for (let i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * allCharacters.length);
    password = password + allCharacters[index];
  }
  
  return password
}
