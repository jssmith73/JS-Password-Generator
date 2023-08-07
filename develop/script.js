
function generatePassword () {

  //This function creates the action of generating a password
  //Returns string: "generated password"


  
  

  //Generate prompt windows asking for criteria to be met for the password

  var length = parseInt(prompt('Enter the desired length of your password between 8 and 128 characters:'));
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
    alert("Must choose at least one character type.")
 }
  if (length <=7 || length > 128) {
    alert("Invalid password length. Please choose between 8 and 128 characters.")
  }


  //Algorythm for password generation

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

  return password

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