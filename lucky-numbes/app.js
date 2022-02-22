const btnLuckyNumbers = document.querySelector('#btn-lucky-numbers')
const tryAgain = document.getElementById('try-again')

const inputNum = document.querySelector('#input-num')

const line = document.getElementsByClassName('line')
const line2 = document.querySelector('.line2')


btnLuckyNumbers.addEventListener('click',()=>{

    let inputValue = inputNum.value

    switch (inputValue) {
        case '1':
            line[0].style.display = 'block';
            line[0].innerText = lotteryNum() 
            break;
        case '2':
            line[0].style.display = 'block';
            line[0].innerText = lotteryNum()
            line[1].style.display = 'block';
            line[1].innerText = lotteryNum()
            break;
        case '3':
            line[0].style.display = 'block';
            line[0].innerText = lotteryNum()
            line[1].style.display = 'block';
            line[1].innerText = lotteryNum()
            line[2].style.display = 'block';
            line[2].innerText = lotteryNum()
            break;
        case '4':
            line[0].style.display = 'block';
            line[0].innerText = lotteryNum()
            line[1].style.display = 'block';
            line[1].innerText = lotteryNum()
            line[2].style.display = 'block';
            line[2].innerText = lotteryNum()
            line[3].style.display = 'block';
            line[3].innerText = lotteryNum()
            break;
        case '5':
            line[0].style.display = 'block';
            line[0].innerText = lotteryNum()
            line[1].style.display = 'block';
            line[1].innerText = lotteryNum()
            line[2].style.display = 'block';
            line[2].innerText = lotteryNum()
            line[3].style.display = 'block';
            line[3].innerText = lotteryNum()
            line[4].style.display = 'block';
            line[4].innerText = lotteryNum()
            break;
        case '6':
            line[0].style.display = 'block';
            line[0].innerText = lotteryNum()
            line[1].style.display = 'block';
            line[1].innerText = lotteryNum()
            line[2].style.display = 'block';
            line[2].innerText = lotteryNum()
            line[3].style.display = 'block';
            line[3].innerText = lotteryNum()
            line[4].style.display = 'block';
            line[4].innerText = lotteryNum()
            line[5].style.display = 'block';
            line[5].innerText = lotteryNum()
            break;
        case '7':
            line[0].style.display = 'block';
            line[0].innerText = lotteryNum()
            line[1].style.display = 'block';
            line[1].innerText = lotteryNum()
            line[2].style.display = 'block';
            line[2].innerText = lotteryNum()
            line[3].style.display = 'block';
            line[3].innerText = lotteryNum()
            line[4].style.display = 'block';
            line[4].innerText = lotteryNum()
            line[5].style.display = 'block';
            line[5].innerText = lotteryNum()
            line[6].style.display = 'block';
            line[6].innerText = lotteryNum()
            break;
        case '8':
            line[0].style.display = 'block';
            line[0].innerText = lotteryNum()
            line[1].style.display = 'block';
            line[1].innerText = lotteryNum()
            line[2].style.display = 'block';
            line[2].innerText = lotteryNum()
            line[3].style.display = 'block';
            line[3].innerText = lotteryNum()
            line[4].style.display = 'block';
            line[4].innerText = lotteryNum()
            line[5].style.display = 'block';
            line[5].innerText = lotteryNum()
            line[6].style.display = 'block';
            line[6].innerText = lotteryNum()
            line[7].style.display = 'block';
            line[7].innerText = lotteryNum()
            break;
        default:
            return alert('The range of numbers you must enter is 1 to 8.')
            break;
    }
})




function lotteryNum() {  //listSix array in there 
    let listSix = []

    do {
        n1 = Math.round(Math.random()*100)
    } while (n1>94);
    listSix.push(n1)


    do {
        n2 = Math.round(Math.random()*100)
    } while (!((n1 != n2) && (n1<n2) && (n2<95)));
    listSix.push(n2)

    do {
        n3 = Math.round(Math.random()*100)
    } while (!((n3 != n1) && (n3 != n2) && (n2<n3) && (n3<96)));
    listSix.push(n3)

    do {
        n4 = Math.round(Math.random()*100)
    } while (!((n4 != n1) && (n4 != n2) && (n4 != n3) && (n3<n4) && (n4<97)));
    listSix.push(n4)

    do {
        n5 = Math.round(Math.random()*100)
    } while (!((n5 != n1) && (n5 != n2) && (n5 != n3) && (n5 != n4) && (n4<n5) && (n5<98)));
    listSix.push(n5)

    do {
        n6 = Math.round(Math.random()*100)
    } while (!((n6 != n1) && (n6 != n2) && (n6 != n3) && (n6 != n4) && (n6 != n5) && (n5<n6) && (n6<99)));
    listSix.push(n6)

    do {
        n7 = Math.round(Math.random()*100)
    } while (!((n7 != n1) && (n7 != n2) && (n7 != n3) && (n7 != n4) && (76 != n5) && (n7 != n6)));
    listSix.push(n7)


    n8 = Math.round(Math.random()*100)
    listSix.push(n8)

    // return listSix

    let strlistSix = listSix.toString();
    
    return strlistSix.replace(',',' - ').replace(',',' - ').replace(',',' - ').replace(',',' - ').replace(',',' - ').replace(',','   |   ').replace(',','   |   ');
}





tryAgain.addEventListener('click',()=>{
    inputNum.value = 0
    line[0].innerHTML = '';
    line[1].innerHTML = '';
    line[2].innerHTML = '';
    line[3].innerHTML = '';
    line[4].innerHTML = '';
    line[5].innerHTML = '';
    line[6].innerHTML = '';
    line[7].innerHTML = '';
})












//-------------


// function firstSixNum() {  //listSix array in there 
//     let listSix = []

//     n1 = Math.round(Math.random()*100)  // first num
//     listSix.push(n1)

//     n2 = Math.round(Math.random()*100)  // second num
//     if ((n1 != n2) && (n1<n2)) {
//         listSix.push(n2)
//     } else {
//         n2 = Math.round(Math.random()*100)
//         listSix.push(n2)
//     }

//     n3 = Math.round(Math.random()*100)  // third num
//     if ((n3 != n1) && (n3 != n2) && (n2<n3)) {
//         listSix.push(n3)
//     } else {
//         n3 = Math.round(Math.random()*100)
//         listSix.push(n3)
//     }

//     n4 = Math.round(Math.random()*100)  // forth num
//     if ((n4 != n1) && (n4 != n2) && (n4 != n3) && (n4<n3)) {
//         listSix.push(n4)
//     } else {
//         n4 = Math.round(Math.random()*100)
//         listSix.push(n4)
//     }

//     n5 = Math.round(Math.random()*100)  // fifth num
//     if ((n5 != n1) && (n5 != n2) && (n5 != n3) && (n5 != n4) && (n5<n4)) {
//         listSix.push(n5)
//     } else {
//         n5 = Math.round(Math.random()*100)
//         listSix.push(n5)
//     }

//     n6 = Math.round(Math.random()*100)  // fifth num
//     if ((n6 != n1) && (n6 != n2) && (n6 != n3) && (n6 != n4) && (n6 != n5) && (n6<n5)) {
//         listSix.push(n6)
//     } else {
//         n6 = Math.round(Math.random()*100)
//         listSix.push(n6)
//     }

//     return listSix


// }