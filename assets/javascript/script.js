
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Generate Password Function
function generatePassword () {

var preferences =[];
var results = [];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialcharacters= ["!", "'", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "?", "/", ".", ":", ",", "<", ">", ";", "~", "+", "@", "[", "]", "{", "}", "|" ];


  // asks user to input amount of characters
var passLength = window.prompt("Please choose a password length between 8 and 128 characters(enter a number).");
  // checks for proper password length and prompts according to what is picked
  if (passLength <8 || passLength >128) {
    alert("Password can only be between 8 - 128 characters. Enter a number between 8 - 128.");
} else if (passLength >7 && passLength <129) {
  alert ("Your password will be set at " + passLength + " characters!");
  
    // asks if numbers are wanted in password
  var passNumbers = (confirm ("Do you want numbers in your password?"));

  if (passNumbers === true) {
    preferences = preferences.concat(numeric)
    } 
    
    // ask if lowercase letters are wanted in password
  var passlowercase = (confirm ("Do you want lowercase letters in your password?"));

  if (passlowercase === true) {
    preferences = preferences.concat(lowercase)
  }

  //ask if uppercase letters are wanted in password
  var passuppercase = (confirm ("Do you want uppercase letters in your password?"));

  if (passuppercase === true) {
    preferences = preferences.concat(uppercase)
  }

  // ask if special characters are wanted in password
  var passspecial = (confirm ("Do you want special characters in your password?"));

  if (passspecial === true) {
    preferences = preferences.concat(specialcharacters)

  }
}

  for (var i=0; i < passLength; i++) {
    results.push (preferences[Math.floor(Math.random() * preferences.length)]); 
  }
  return (results).join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
