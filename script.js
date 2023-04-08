// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."];
var characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
var lowercase = characterCodes.map(code => String.fromCharCode(code));
var uppercase = lowercase.map(letter => letter.toUpperCase());


function generatePassword() { 
  var passwordLimit = prompt('How many characters would you like your password to contain?');

  if (passwordLimit === null) {
    return '';
  }

  var password = [];

  if (passwordLimit > 8 && passwordLimit < 128) {
    var includeSymbols = confirm('Click OK to include special characters.');
    
    if (includeSymbols) {
      password.push(...symbols);
    } 
    
    var includesNumbers = confirm('Click OK to include numberic chatacters.');

    if (includesNumbers) {
      password.push(...numbers);
    }

    var includesLowercase = confirm('Click OK to include lowercase chatacters.');
    
    if (includesLowercase) {
      password.push(...lowercase);
    }

    var includesUppercase = confirm('Click OK to include uppercase characters.');

    if (includesUppercase) {
      password.push(...uppercase);
    }
    
    if (password.length === 0) {
      alert('Please select at least one character type.');
      return '';
    }

    var passwordFinal = '';

    for (var i = 0; i < passwordLimit; i++ ) {
      var random = Math.floor(Math.random() * password.length);
      passwordFinal += password[random];
    }

    return passwordFinal;
    

  } else {
    alert('Please enter a number between 8 and 128!');
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
