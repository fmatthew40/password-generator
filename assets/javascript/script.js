// Assignment code here
// var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var uppercase = 'A';
// var lowercase = 'b';
// var specialcharacters='!';

// var enternumber = "";
// var preferences =[];
// var passNumbers


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


 


// Generate Password Function
function generatePassword () {

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
    console.log("fff");
  }

} // tag to left belongs to else if (passLength >7)

 

  



 




  // for (var i = 0; i < passLength; i++) {
  //   var randomPassword = Math.floor(Math.random() * preferences.length)
  //   password += preferences[randomPassword]
  // }

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
