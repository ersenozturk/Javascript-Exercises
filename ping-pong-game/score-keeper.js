const player1Button = document.querySelector('.player1-button')
const player2Button = document.querySelector('.player2-button')
const resetButton = document.querySelector('.reset-button')
// ******
const spanPlayer1 = document.querySelector('.span-player1')
const spanPlayer2 = document.querySelector('.span-player2')
let counter1 = 0;
let counter2 = 0;
// ******
const scoreToWin = document.getElementById('win')



// my listeners
player1Button.addEventListener('click',addOneNumber1)
player2Button.addEventListener('click',addOneNumber2)


// my fınctions for addeventlistener
function addOneNumber1(e) {
    counter1++;
    spanPlayer1.innerHTML = counter1;

    if (scoreToWin.value == spanPlayer1.innerHTML) {
        player1Button.setAttribute('disabled',false)
        player2Button.setAttribute('disabled',false)

        spanPlayer1.style.color ='green'
        spanPlayer2.style.color ='red'
    }
}

function addOneNumber2(e) {
    counter2++;
    spanPlayer2.innerHTML = counter2;

    if (scoreToWin.value == spanPlayer2.innerHTML) {
        player1Button.setAttribute('disabled',false)
        player2Button.setAttribute('disabled',false)

        spanPlayer1.style.color ='red'
        spanPlayer2.style.color ='green'

    }
}


// reset
resetButton.addEventListener('click',()=>{

    spanPlayer1.innerHTML = 0
    spanPlayer2.innerHTML = 0

    // player1Button.removeAttribute('disabled')
    // player2Button.removeAttribute('disabled')
})

//
