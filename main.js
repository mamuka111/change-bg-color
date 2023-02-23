// let button = document.getElementById("#colorButton")
// button.addEventListener("click", function (){
//     let color = getRandomHexCode();
//     document.body.style.backgroundColor = color;
// } );

// function getRandomHexCode(){
//     let hexCode = "#"
//     let numbers = "0123456789ABCDEFG"

//     for(let i = 0; i<6; i ++){
//         hexCode += numbers[Math.floor(Math.random() * 16)];
//     }
//     return hexCode
// }
let button = document.getElementById('colorButton');

button.addEventListener('click', function() {
  let color = getRandomHexCode();
  document.body.style.backgroundColor = color;
});

function getRandomHexCode() {
  let hexCode = "#";
  let characters = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    hexCode += characters[Math.floor(Math.random() * 16)];
  }

  return hexCode;
}
