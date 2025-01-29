const sumAll = function(num1,num2) {
  if (num1 < 0 || num2 < 0 ){
    return "ERROR"
  }
  
  if (num1>num2){
   [num1,num2]=[num2,num1]
  }

  let sum = 0
  for(let i=num1;i<=num2;i++){
   sum += i;
  };
   return sum;
};

// Do not edit below this line
module.exports = sumAll;
