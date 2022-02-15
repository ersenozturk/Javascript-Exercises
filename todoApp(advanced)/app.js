// variables
const inputField = document.querySelector('.input-field');
const inputBox = document.querySelector('#input-box')
const addBtn = document.querySelector('#add-btn')
const todoList = document.querySelector('.todo-list')
const pendingNumber = document.querySelector('.pending-number')
const deleteAllBtn = document.getElementById('delete-all')

//**** to addBtn add (class='flash') 
inputBox.addEventListener('keyup',() => {
    let userData = inputBox.value;  
    if (userData.trim() != 0) {     // 
        addBtn.classList.add('flash'); // active 
    } else {
        addBtn.classList.remove('flash');
    }
})

showTasks() // calling showtasks func



//**** event listener (click to addBtn)
addBtn.addEventListener('click',()=>{
    let getLocStr = localStorage.getItem('New Todo'); // getting Localstorage

    if (getLocStr == null) {
        listArr = []    //creating blank array
    } else {
        listArr = JSON.parse(getLocStr) // transforming json string into a js object
    }
    
    let userData = inputBox.value;  
    listArr.push(userData)
    localStorage.setItem('New Todo', JSON.stringify(listArr)); // transforming js object into a json string

    showTasks() // calling showtasks func
})


// **************function to  add task list inside ul*************
function showTasks() {
    let getLocStr = localStorage.getItem('New Todo'); // getting Localstorage

    if (getLocStr == null) {
        listArr = []    //creating blank array
    } else {
        listArr = JSON.parse(getLocStr) // transforming json string into a js object
    }

    let newLi = '';
    listArr.forEach((element,index) => {
        newLi += `<li> ${element} <span   onclick='deleteTasks(${index})';  ><i class="fas fa-trash"></i></span></li>`
    });

    todoList.innerHTML = newLi; // adding new li inside ul
    inputBox.value ='' // every click after value must empty

    pendingNumber.textContent = listArr.length // correct every change in ul
}
//**********************************



// **************function to  delete one task list inside ul*************
function deleteTasks(index) {

    let getLocStr = localStorage.getItem('New Todo');
    listArr = JSON.parse(getLocStr);
    listArr.splice(index, 1); // delete the particular indexed li
    // after remove the again update the local storage
    localStorage.setItem('New Todo', JSON.stringify(listArr));

    showTasks() // calling showtasks func
}
//**********************************



// **************function to  delete all task list inside ul*************
deleteAllBtn.addEventListener('click',()=>{
    listArr = [] // empty an array

    // after delete all tasks again update the local storage
    localStorage.setItem('New Todo', JSON.stringify(listArr));

    showTasks() // calling showtasks func
})
//**********************************
