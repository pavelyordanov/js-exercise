function solve() {
 let inputElement = document.getElementById('str');
 let outputElement = document.getElementById('result'); 
 
 
  
 let onesSum = findOnesSum(inputElement.value);
 let end = inputElement.value.length - onesSum;

 let result = inputElement.value.slice(onesSum, end);
 
 let parts = result
 .split(/([\d]{8})/)
 .filter((x)=> x)
 .map((x)=> binaryToString(x))
 .filter((c)=> /[A-Za-z ]+/g.test(c))
 .join('');

 outputElement.textContent = parts;

 function findOnesSum(value){

  let result = value;

    while(result.length > 1){
    let temp = result
    .split('')
    .reduce((a, b)=> +a + +b)
    .toString();
    
    result = temp;

    }
    return result;
 }

 function binaryToString(element){
 
  let decimal = parseInt(element, 2);
  
  return String.fromCharCode(decimal);

 }

}
solve('0100011011010111100100100000011011100110000101101101011001010010000001101001011100110010')