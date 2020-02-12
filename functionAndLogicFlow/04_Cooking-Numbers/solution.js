function solve() {

    let number = document.querySelector('#exercise input[type="number"]');
    let output = document.getElementById('output');

    let num = +output.textContent || number.value;
 
    function attachEvents() {
    
   let chopBtn = document.querySelector('#operations button:nth-child(1)').addEventListener('click', chop);

   let diceBtn = document.querySelector('#operations button:nth-child(2)').addEventListener('click', dice);

   let spiceBtn = document.querySelector('#operations button:nth-child(3)').addEventListener('click', spice);

   let bakeBtn = document.querySelector('#operations button:nth-child(4)').addEventListener('click', bake);

   let filletBtn = document.querySelector('#operations button:nth-child(5)').addEventListener('click', fillet);

    }

attachEvents();

 function chop() {
   num /= 2;
   output.textContent = String(num);
 }

 function dice() {
    num = String(Math.sqrt(num));
    output.textContent = num;
 }

 function spice() {
  
 }

 function bake() {
  
 }

 function fillet() {
  
 }
}