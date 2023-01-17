const UpperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','S','R','T','U','V','W','X','Y','Z'];
const LowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const Numbers = [0,1,2,3,4,5,6,7,8,9];
const Symbol = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '|' ] ;
const LenEl = document.getElementById("Len");

// console.log(UpperLetters.length);
// console.log(Symbol.length);
// console.log(Numbers.length);  
// console.log(LowerLetters.length); 





let textarea = document.getElementById('textarea'); 

const generateButton = document.getElementById("generate");

generateButton.addEventListener("click", createPassword );



function createPassword(){
    let password = [];  
    for( let i = 0 ; i<LenEl.value;i++){
        let passwordChar = chooseChar();
        password.push(passwordChar);

    }

   let response = password.join(""); 
    textarea.innerHTML = response;
}


function chooseChar(){

    let randomChar = Math.floor((Math.random()*4)+1);
    let char = '';

    switch(randomChar) {
        case 1:
         char = UpperLetters[Math.floor(Math.random()*26)]; 
          break;
        case 2:
            char = LowerLetters[Math.floor(Math.random()*26)];
          break;
          case 3:
            char = Numbers[Math.floor(Math.random()*10)];
          break;
          case 4:
          char = Symbol[Math.floor(Math.random()*15)];
          break;
        default:
         return;
      }
      return char;

}


function myFunction() {
 
    var copyText = document.getElementById("textarea");
  
   
    navigator.clipboard.writeText(copyText.innerHTML);
  
    alert("Text copied");
  } 