/* step 1: create random number */
let randomNumber = parseInt(Math.random()*100 + 1);

/* step 2: get the referance */
const submit = document.querySelector("#submit");
const guessField = document.getElementById("guessField")
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p")
/* step 3: default variable */
let preGuess = [];
let playGame = true;
let numGuess = 1;

/* step 4: render data */
if(playGame){
    submit.addEventListener("click", (e)=>{
        e.preventDefault();
        const guess = parseInt(guessField.value);
        validGuess(guess);
    })
}

function validGuess(guess){
  if(isNaN(guess)){
     alert("Please Enter a valid Number");
  }
  else if(guess < 1){
    alert("Please Enter a valid Number between 1 to 100");
  }
  else if(guess > 100){
    alert("Please Enter a valid Number between 1 to 100");
  }   
  else{
    preGuess.push(guess);
    if(numGuess === 10){
        console.log(guess)
        displayGuess(guess)
        displaymessage(`Game is over, rendom number was ${randomNumber}`)
        endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
  } 
}
function checkGuess(guess){
    if (guess === randomNumber){
        displaymessage("You won !! Right guess")
        endGame();
      }
    else if(guess < randomNumber){
      displaymessage('ohh! number is toooo low')
    }
    else if(guess > randomNumber){
      displaymessage('ohh! number is toooo high')
    }
}
function displayGuess(guess){
  guessField.value = ''
   guessSlot.innerHTML += `${guess}, `;
   numGuess++;
   remaining.innerHTML = `${11-numGuess}`
}
function displaymessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
   guessField.value = '';
   guessField.setAttribute('disabled', '')
   p.classList.add("button")
   p.innerHTML = `<button id="newGame">Start new game</button>`
   startOver.appendChild(p)
   playGame = false;
   newGame();
  }
function newGame(){
 const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', (e)=>{
    randomNumber = parseInt(Math.random()*100 + 1);
    preGuess = [];
    numGuess = 1;
    remaining.innerHTML = `${11-numGuess}`
    guessSlot.innerHTML = ''
    guessField.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
   })
}
