//assign variables to elements/event listener
display = document.getElementById('output');
document.getElementById("submit").onclick=showNum;


function showNum (){
  const input = document.getElementById('inputDigit'); 
  const num = input.value;
  
  //removes anything else. like ' . - '
  if (!num){
    display.innerHTML = ("Please enter a value!");
    return;
  }
  //displays the result
  if (isNarcissistic(num)){
    
    display.innerHTML = (`${num} is a Narcissistic Number`);
  }
  
  else {
    
    display.innerHTML = (`WRONG!! ${num} is NOT a Narcissistic Number`);
  }
  //clears the input box 
  inputDigit.value = '';
}


function isNarcissistic (num){
  nums = String(+num).split("");
 
  let calcM = 0;
  
  for (let i = 0; i < nums.length; i++)
    {
      calc = Math.pow(nums[i],nums.length);
      calcM += calc;  
    }
  //checks if same
  return (calcM == num) ? true : false;
}