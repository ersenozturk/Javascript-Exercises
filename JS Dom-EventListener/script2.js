// declaration of variables

const form = document.getElementById('addTaskForm');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.getElementById('btnDeleteAll')
const taskList = document.querySelector('#task-list');
const colors = ['black','white','red'] // for load in page, input from outpage 

loadItems();
eventListener();


function eventListener() {
    
    // addNewItem
    form.addEventListener('submit',addNewItem);

    // deleteItem
    taskList.addEventListener('click',deleteItem)

    //deleteAllItem
    btnDeleteAll.addEventListener('click',deleteAllItem);
}

function loadItems(){
    colors.forEach(function(item){
        createItem(item)
    })
}



// ******************
function addNewItem(e) {
    
    //prevent empty value
    if (input.value === '') {
        alert('You cannot empty value')
    }

    // // create a
    // const newA = document.createElement('a')
    // newA.className = 'delete-item'
    // newA.setAttribute('href','#')
    // newA.innerHTML = '<i class="fas fa-times"></i>'
    
    // // create li 
    // const newLi = document.createElement('li');
    // newLi.className = 'list-area-item';
    // newLi.appendChild(document.createTextNode(input.value));

    // // a append to li
    // newLi.appendChild(newA);

    // // li append to ul
    // taskList.appendChild(newLi);
    
    // after submit clear value
    input.value = ''

    // prevent reload by every submit
    e.prevetDefault();
}
//***
function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        e.target.parentElement.parentElement.remove();
    }
    e.prevetDefault();
}
//***
 function deleteAllItem(e) {
    if (confirm('Are you really sure_?')) {
        //  taskList.remove(); :)))))))))
        // taskList.innerHTML = '' :))))))))
        while (taskList.firstChild) {
        taskList.firstChild.remove()
        }
    }
}
//************ */
function createItem(text) {
       // create a
       const newA = document.createElement('a')
       newA.className = 'delete-item'
       newA.setAttribute('href','#')
       newA.innerHTML = '<i class="fas fa-times"></i>'
       
       // create li 
       const newLi = document.createElement('li');
       newLi.className = 'list-area-item';
       newLi.appendChild(document.createTextNode(text));
   
       // a append to li
       newLi.appendChild(newA);
   
       // li append to ul
       taskList.appendChild(newLi);
}