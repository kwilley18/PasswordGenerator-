// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("How many characters do you want your password to be?")


  if(passwordLength < 10){
    alert("Password must be at least 10 characters"); 
    return;

  }
  if(passwordLength === NaN){
    alert("Password length must be a number"); 
    return;

  }
  if(passwordLength === specialCharacters || passwordLength === lowerCasedCharacters || passwordLength === upperCasedCharacters){
    alert("Password length must be a number")
    return; 
  }
  if(passwordLength > 64){
    alert("Password may not be more than 64 characters");
    return;
  }

  var confirmSpecialChars = confirm("The password will have special characters"); 
  var confirmLowerCase = confirm("The password will have lower case characters"); 
  var confirmUpperCase = confirm("The password will have upper case characters"); 
  var confirmNumericChars = confirm("The password will have numeric characters"); 

  if( confirmSpecialChars === false && confirmLowerCase === false && confirmUpperCase === false && confirmNumericChars === false){
    alert("Password cannot be created since it doesnt meet the requirements"); 
    return; 
  }
  var confirmOptions = {
    passwordLength: passwordLength,
    confirmSpecialChars: confirmSpecialChars,
    confirmLowerCase: confirmLowerCase,
    confirmUpperCase: confirmUpperCase,
    confirmNumericChars: confirmNumericChars
  }; 

  return confirmOptions; 

}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length); 
  var randomIndexArray = arr[randomIndex]
  return randomIndexArray; 
}

// Function to generate password with user input
function generatePassword() {
 var options =  getPasswordOptions(); 

 var allPossibilities = []; 
 var preResult = []; // array to hold each type of character
 var randomPreResult = []; // array to randomize the preResult array 
 var finalResult = []; // array for the final randomized array 


 //for(var i = 0; i < options.passwordLength; i++){

 
 if(options.confirmSpecialChars){
  allPossibilities = allPossibilities.concat(specialCharacters); 
  preResult.push(getRandom(specialCharacters));
  //console.log(result[i]); 

 }
 if(options.confirmUpperCase){

  allPossibilities = allPossibilities.concat(upperCasedCharacters); 

  preResult.push(getRandom(upperCasedCharacters)); 
 // console.log(getRandom(upperCasedCharacters)); 
 // console.log(getRandom(upperCasedCharacters)); 
 //console.log(preResult.length);
 // console.log(result[i]); 
 
 }
 if(options.confirmLowerCase){
  allPossibilities = allPossibilities.concat(lowerCasedCharacters); 
  preResult.push(getRandom(lowerCasedCharacters)); 
  //console.log(preResult.length);
 // console.log(getRandom(lowerCasedCharacters)); 
  //console.log(getRandom(lowerCasedCharacters)); 


 }
 if(options.confirmNumericChars){

  allPossibilities = allPossibilities.concat(numericCharacters); 
  preResult.push(getRandom(numericCharacters)); 
  //console.log(preResult.length);
  //console.log(getRandom(numericCharacters)); 
  //console.log(getRandom(numericCharacters)); 
}


 for(var i = 0; i < options.passwordLength; i++){
  randomPreResult.push(getRandom(preResult)); 
  randomPreResult.push(getRandom(allPossibilities));
  randomPreResult.push(getRandom(randomPreResult)); 
  finalResult[i] = randomPreResult[i]; 
 }

return finalResult.join(''); 
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);