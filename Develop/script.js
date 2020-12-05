// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordOptions);


// Prompts to get password length and options when user clicks 'Generate Password'
function getPasswordOptions() {
  const passwordLength = prompt(
    "How many characters would you like your password to be?"
  );

  if (passwordLength < 8 || passwordLength >= 129 || isNaN(passwordLength)) {
    alert(
      "Your password length must be a number 8 - 128."
    );
    getPasswordOptions();
    return
  }

  const includeLowercase = confirm(
    "Would you like your password to include lowercase characters?"
  );

  const includeUppercase = confirm(
    "Would you like your password to include uppercase characters?"
  );

  const includeNumbers = confirm(
    "Would you like to your password to include numbers?"
  );

  const includeSpecial = confirm(
    "Would you like your password to include special characters?"
  );
}
