// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate Password Function
function generatePassword () {
 var numbers = window.prompt("Please choose a password length between 8 and 128 characters(enter number).");
  if (length <8 || length >128 === false);
  console.log ("wrong");
 



  return ("generated password here");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
