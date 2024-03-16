
// initializing some values

let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;


// Finding elements

const cardBody = document.querySelector('.card-body');
const form = cardBody.querySelector('form');
const guessingNumber = form.querySelector('#guessingNumber');
const checkButton = form.querySelector('.btn');
const resultText = cardBody.querySelector('.resultText');
const remainingAttempts = cardBody.querySelector('.remainingAttempts');
const lostWonMessage = document.createElement('p');

 form.addEventListener('submit', (event) => {
    event.preventDefault();
   
    attempts++

    if( attempts == 5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }if(attempts < 6){
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining Attempts: ${
            totalAttempts - attempts
        }`;
    }
    guessingNumber.value = ''
 });


const checkResult = (guessingNumber) => {
    console.log(guessingNumber);
    const randomNumber = getRandomNumber(5);

    if(guessingNumber == randomNumber){
        resultText.innerHTML = `You have won`;
        totalWons++
    }else{
        resultText.innerHTML = `
        You have lost; random number was: ${randomNumber};
        `
        totalLosts++
    }

    lostWonMessage.innerHTML = `Won: ${totalWons}, Lost: ${totalLosts}`;

    lostWonMessage.classList.add('large-text');
    cardBody.appendChild(lostWonMessage);
   
}



 const getRandomNumber = (limit) => {
   return Math.floor(Math.random() * limit) + 1;
 };