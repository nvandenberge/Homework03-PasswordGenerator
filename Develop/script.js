// Assignment Code
const generateBtn = document.querySelector("#generate");

// Creates an array of numbers that represents Uppercase character codes
const uppercase_char_codes = arrayFromLowToHigh(65, 90);

// Creates an array of numbers that represents Lowercase character codes
const lowercase_char_codes = arrayFromLowToHigh(97, 122);

// Creates an array of numbers that represents Number character codes
const number_char_codes = arrayFromLowToHigh(48, 57);

// Creates an array of numbers that represents Special character codes
const special_char_codes = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordOptions);

// Function that takes in a low and high number and creates an array that includes all numbers between them
// This elimninates the need to create an array with each inidividual character ex: ['a', 'b', 'c']
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

// Prompts to get password length and options when user clicks 'Generate Password'
function getPasswordOptions() {
  const passwordLength = prompt(
    "How many characters would you like your password to be?"
  );

  // Validates that password length is between 8-128 and input was a number, else start over.
  if (passwordLength < 8 || passwordLength >= 129 || isNaN(passwordLength)) {
    alert("Your password length must be a number between 8 - 128.");
    getPasswordOptions();
    return;
  }

  // 4 prompts asking the user which character sets to include in password
  const includeLowercase = confirm("Click OK to include lowercase characters?");

  const includeUppercase = confirm("Click OK to include uppercase characters?");

  const includeNumbers = confirm("Click OK to include numbers?");

  const includeSpecial = confirm("Click OK to include special characters?");

  // Validates that at least one set of characters was selected, else start over
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSpecial
  ) {
    alert(
      "Please select at least one character type to include in your password."
    );
    getPasswordOptions();
    return;
  }
}

// Write password to the #password input
function writePassword(passwordResult) {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = passwordResult;
}
