
function generatePassword () {

  //This function creates the action of generating a password
  //Returns string: "generated password"


  //Prompt asking user to input length of password

  var length = parseInt(prompt('Enter the desired length of your password between 8 and 128 characters:'));

  //Alert if length is entered as a letter returning null

  if (Number.isNaN(length)) {
    alert("Must enter a number.");
    return null;
  }
  
//Throws an alert box if the length condition isn't met

  if (length <=7 || length > 128) {
    alert("Invalid password length. Please choose between 8 and 128 characters.");
    return null;
  }
  
  //Prompts for password criteria

  var includeUpperCaseLetters = confirm("Include uppercase letters?");
  var includeLowerCaseLetters = confirm("Include lowercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialCharacters = confirm("Include special characters?");
  

  //Arrays that store each crieria's characters

  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "1234567890"
  var specialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>/?"

  //Initializes password variable

  var password = ""

  if (!includeLowerCaseLetters && !includeUpperCaseLetters && !includeNumbers && !includeSpecialCharacters) {
    alert("Must choose at least one character type.")}
  
  

  //Algorithm for password generation

  var isValid = false;

  while (password.length < length) {

    if (includeLowerCaseLetters && password.length < length) {
      password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
    }
    if (includeUpperCaseLetters && password.length < length) {
      password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
    }
    if (includeNumbers && password.length < length) {
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    if (includeSpecialCharacters && password.length < length) {
      password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    }

  }

return password;

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)