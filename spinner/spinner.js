const tus_1 = document.querySelector('.tus1')
const tus_2 = document.querySelector('.tus2')
const tus_3 = document.querySelector('.tus3')
const tus_4 = document.querySelector('.tus4')
const tus_5 = document.querySelector('.tus5')
const tus_6 = document.querySelector('.tus6')
const tus_7 = document.querySelector('.tus7')
const tus_8 = document.querySelector('.tus8')
const tus_9 = document.querySelector('.tus9')


let sayilar = ['2','3','6','9','8','7','4','1']
let counter = 0;
tus_5.addEventListener('click',()=>{
    counter += 1
    if (counter >=9)  counter = 1;
    
    switch (counter) {
    case 1:
        tus_1.innerHTML = sayilar[0]
        tus_2.innerHTML = sayilar[1]
        tus_3.innerHTML = sayilar[2]
        tus_6.innerHTML = sayilar[3]
        tus_9.innerHTML = sayilar[4]
        tus_8.innerHTML = sayilar[5]
        tus_7.innerHTML = sayilar[6]
        tus_4.innerHTML = sayilar[7] 
        break;    
    case 2:
        tus_1.innerHTML = sayilar[1]
        tus_2.innerHTML = sayilar[2]
        tus_3.innerHTML = sayilar[3]
        tus_6.innerHTML = sayilar[4]
        tus_9.innerHTML = sayilar[5]
        tus_8.innerHTML = sayilar[6]
        tus_7.innerHTML = sayilar[7]
        tus_4.innerHTML = sayilar[0] 
        break;
    case 3:
        tus_1.innerHTML = sayilar[2]
        tus_2.innerHTML = sayilar[3]
        tus_3.innerHTML = sayilar[4]
        tus_6.innerHTML = sayilar[5]
        tus_9.innerHTML = sayilar[6]
        tus_8.innerHTML = sayilar[7]
        tus_7.innerHTML = sayilar[0]
        tus_4.innerHTML = sayilar[1] 
        break;  
    case 4:
        tus_1.innerHTML = sayilar[3]
        tus_2.innerHTML = sayilar[4]
        tus_3.innerHTML = sayilar[5]
        tus_6.innerHTML = sayilar[6]
        tus_9.innerHTML = sayilar[7]
        tus_8.innerHTML = sayilar[0]
        tus_7.innerHTML = sayilar[1]
        tus_4.innerHTML = sayilar[2] 
        break;  
    case 5:
        tus_1.innerHTML = sayilar[4]
        tus_2.innerHTML = sayilar[5]
        tus_3.innerHTML = sayilar[6]
        tus_6.innerHTML = sayilar[7]
        tus_9.innerHTML = sayilar[0]
        tus_8.innerHTML = sayilar[1]
        tus_7.innerHTML = sayilar[2]
        tus_4.innerHTML = sayilar[3] 
        break;  
    case 6:
        tus_1.innerHTML = sayilar[5]
        tus_2.innerHTML = sayilar[6]
        tus_3.innerHTML = sayilar[7]
        tus_6.innerHTML = sayilar[0]
        tus_9.innerHTML = sayilar[1]
        tus_8.innerHTML = sayilar[2]
        tus_7.innerHTML = sayilar[3]
        tus_4.innerHTML = sayilar[4] 
        break;  
    case 7:
        tus_1.innerHTML = sayilar[6]
        tus_2.innerHTML = sayilar[7]
        tus_3.innerHTML = sayilar[0]
        tus_6.innerHTML = sayilar[1]
        tus_9.innerHTML = sayilar[2]
        tus_8.innerHTML = sayilar[3]
        tus_7.innerHTML = sayilar[4]
        tus_4.innerHTML = sayilar[5] 
        break;
    case 8:
        tus_1.innerHTML = sayilar[7]
        tus_2.innerHTML = sayilar[0]
        tus_3.innerHTML = sayilar[1]
        tus_6.innerHTML = sayilar[2]
        tus_9.innerHTML = sayilar[3]
        tus_8.innerHTML = sayilar[4]
        tus_7.innerHTML = sayilar[5]
        tus_4.innerHTML = sayilar[6] 
        break;
    default:
        alert('We foresee a problem, please refresh the page!')
        break;
    
}
});

