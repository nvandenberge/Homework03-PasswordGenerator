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

// Prompts to get password length and options when user clicks 'Generate Password' and validation
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

// Passing all input prompt values to generatePassword function
  generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSpecial
  );
}

// Function to get random index from array
function getRandom(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  let randomElement = array[randomIndex];
  return randomElement;
}

// Function will evaluate the selected options and add random character codes to generatedPassword array
function generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSpecial
) {

  // Array that we can add user selected character sets to and use to fill in rest of password
  let potentialCharacters = [];

  // Array that we will push random characters to and then .join('') to get final password string output
  let generatedPassword = [];

  // If true, select a random character code and push to generatedPassword array, also add all character codes to potentialCharacters array
  if (includeLowercase) {
    potentialCharacters = potentialCharacters.concat(lowercase_char_codes);
    generatedPassword.push(
      String.fromCharCode(getRandom(lowercase_char_codes))
    );
  }
  if (includeUppercase) {
    potentialCharacters = potentialCharacters.concat(uppercase_char_codes);
    generatedPassword.push(
      String.fromCharCode(getRandom(uppercase_char_codes))
    );
  }
  if (includeNumbers) {
    potentialCharacters = potentialCharacters.concat(number_char_codes);
    generatedPassword.push(
      String.fromCharCode(getRandom(number_char_codes)));
  }
  if (includeSpecial) {
    potentialCharacters = potentialCharacters.concat(special_char_codes);
    generatedPassword.push(
      String.fromCharCode(getRandom(special_char_codes))
    );
  }

  // Variable that calulates how many random characters need to be added once confirmed characters have been added 
  let restOfPassword = passwordLength - generatedPassword.length;

// For loop to fill in the rest of the password characters after confirmed characters
  for (let i = 0; i < restOfPassword; i++) {
    generatedPassword.push(
      String.fromCharCode(getRandom(potentialCharacters))
    );
  }

  // Combine each element in array to single string
  let finalPassword = generatedPassword.join('')
  writePassword(finalPassword)
}

// Write password to the #password input
function writePassword(password) {
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}
