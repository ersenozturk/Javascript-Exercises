// variables
const enterNumber = document.querySelector('.enter-number');

const num = document.getElementById('num')

const upButton = document.querySelector('.up-button');

const mGuess = document.querySelector('.m-guess');

const rNumLow = document.getElementsByTagName('span')[0];
const rNumHigh = document.getElementsByTagName('span')[1];
const reGuess = document.getElementsByTagName('span')[2];
const rNum = document.getElementsByTagName('span')[3];

const easy = document.getElementById('easy');
const hard = document.getElementById('hard');

const downButton = document.querySelector('.down-button');

let randomNum = Math.round(Math.random()*100)




// eventlisteners
upButton.addEventListener("click",()=>{

    // set number range
    if (num.value > 100 || num.value < 1) {
        alert('MISTAKE! Play Again.. Please enter a correct value')
        upButton.disabled = true
    }

    if (randomNum > num.value) {
        rNumLow.innerHTML = num.value
        rNum.innerHTML--;
            if (rNum.innerHTML == 0) {
                mGuess.innerHTML = `You LOST! Number was ${randomNum}`
                upButton.disabled = true
            }

    } else if(randomNum < num.value) {
        rNumHigh.innerHTML = num.value
        rNum.innerHTML--;
            if (rNum.innerHTML == 0) {
                mGuess.innerHTML = `You LOST! Number was ${randomNum}`
                upButton.disabled = true
        }
    }else{
        mGuess.innerHTML = 'You Win!!!'
    }
})

// play again button
downButton.addEventListener("click",()=>{
    upButton.disabled = false
    mGuess.innerHTML = 'Make a guess'
    reGuess.innerHTML = 'Select a game mode below'
    rNum.style.display = 'none' 
    num.value = 0

    rNumLow.innerHTML = 1
    rNumHigh.innerHTML = 100

    let randomNum1 = Math.round(Math.random()*100)
    randomNum = randomNum1
})

easy.addEventListener("click",()=>{
    rNum.innerHTML = 10;
    rNum.style.display = 'inline' 

    
})

hard.addEventListener("click",()=>{
    rNum.innerHTML = 5;
    rNum.style.display = 'inline' 

})

