const btn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

btn.addEventListener("click", (e) => {
  todoUl.innerHTML += `
    <li>
        <i class="fa fa-check"></i>
        <p>${todoInput.value}</p>
        <i class="fa fa-trash"></i>
    </li>
    `;
    todoInput.value = ''

});


todoInput.addEventListener('keydown', (e)=>{
   if (e.code == 'Enter') {
    btn.click()
   }
})


todoUl.addEventListener('click',(e)=>{
    
    if (e.target.classList.contains('fa-check')) {
        if (e.target.parentElement.classList.contains('checked')) {
            e.target.parentElement.classList.remove('checked')
        } else {
            e.target.parentElement.classList.add('checked')
        }
    } else if(e.target.classList.contains('fa-trash')) {
        e.target.parentElement.remove()
    }

    
})
