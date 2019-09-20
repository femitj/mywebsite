//assign variables to elements
const str = document.getElementById('str');
document.getElementById('submit').onclick = submit;
const answerBox = document.getElementById('answer-box');
const errorMessage= document.getElementById('error-message');


submit.addEventListener('click', function(e) {
  var string = str.value;
  //remove white spaces between the characters if any
  string = string.replace(/\s/g,'');
  //converts string to lower case
  string = string.toLowerCase();
  
  //displays error if string contains other than 
  //characters and spaces 
  if (/[^\sa-zA-Z]/gi.test(string)){
    errorMessage.innerHTML = 'Error: Input character only!';
    return;
  }
  
  //loops over characters in the string
    for (let i = 0; i < string.length; i++){
      if (string.indexOf(string[i]) == string.lastIndexOf(string[i])){
        answerBox.innerHTML = string[i];
        break; 
      }
    }
});
//clears outputs when input box value changes
str.oninput = function(e) {
    answerBox.innerHTML = '';
    errorMessage.innerHTML= '';
};