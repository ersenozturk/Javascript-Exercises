const addTaskForm = document.querySelector('#add-task');
const taskArea = document.querySelector('#task');
const addBtn = document.querySelector('.add-btn');

const todoListDiv = document.querySelector('.todolist');
const todoListUl = document.querySelector('.todolist-list-container')
const listGroupDiv = document.querySelector('.list-group')


// my functions
function createTask(taskText) {
    return `
    <div class="list-group">
    <li class="unchecked">${taskText}</li>
    <button class="btn">&#128473;</button></div>
    `
}

const completedTaskCounter =  () =>{
    let checkedCount = todoListDiv.getElementsByClassName('checked').length
    let taskCount = todoListDiv.getElementsByClassName('list-group').length
    // console.log(checkedTasks,allTasks);
    const checkedTasks = document.getElementById('checkedTasks')
    const allTasks = document.getElementById('allTasks')
    //
    checkedTasks.innerHTML = checkedCount;
    allTasks.innerHTML = taskCount;

}


                        // my events //

//addTask
addBtn.addEventListener('click',(event)=>{
    if (taskArea.value.length == 0) {
        alert('You can not enter an empty value')
    } else {
        todoListUl.innerHTML += createTask(taskArea.value)
    }
    addTaskForm.reset()
    event.preventDefault();
    completedTaskCounter();
})

//deleteTask
todoListDiv.addEventListener('click',(e)=>{
    if (e.target.classList.contains('btn')) {
        e.target.parentElement.remove()
    }
//checked&unchecked
    if (e.target.classList.contains('unchecked')) {
        e.target.className = 'checked'
    } else{
        e.target.className = 'unchecked'
    }
    completedTaskCounter();
})
