const getOne = document.querySelector('#getOne')
const getAll = document.querySelector('#getAll')
const loading = document.querySelector('#loading')

getOne.addEventListener('click',getOneFunc);
getAll.addEventListener('click',getAllFunc);




function getOneFunc() {

    loading.style.display = 'block'

    let postId = document.querySelector('#post-id').value;

    if (postId.length != 0) {
        
    let url = 'https://jsonplaceholder.typicode.com/posts/' + postId;
    const req = new XMLHttpRequest();

    req.open('GET',url,true)
    
    setTimeout(() => {

        loading.style.display = 'none'

        req.onload = function () {
            if (this.status == 200) {
    
                let post = JSON.parse(this.responseText);
                let html ='';
                
                html += `
                        <div class="card m-3" style="width: 18rem;">
                            <div class="card-header">
                            ${post.id}==>>${post.title}
                            </div>
                            <div class="card-body">
                                <p class="card-text">
                                ${post.body}  
                                </p>
                              </div>
                        </div>`; 
                document.querySelector('.results').innerHTML = html
         
            } else {
                alert('ERROR',this.status);
            }
        }
        req.send()
    }, 1000);

    } else {
        alert('enter a number please')
    }
    
};

function getAllFunc() {

    loading.style.display = 'block'

    let url = 'https://jsonplaceholder.typicode.com/posts';
    const req = new XMLHttpRequest();

    req.open('GET',url,true)
    
    setTimeout(() => {

        loading.style.display = 'none'

        req.onload = function () {
            if (this.status == 200) {
                
                let allPosts = JSON.parse(this.responseText);
                let html ='';
                allPosts.forEach(post => {
                                html += `
                        <div class="card m-3"  style="width: 100%;">
                            <div class="card-header">
                                ${post.title}
                            </div>
                            <div class="card-body">
                                <p class="card-text">
                                ${post.body}  
                                </p>
                              </div>
                        </div>`
                }); 
                document.querySelector('.results').innerHTML = html
         
            } else {
                alert('ERROR',this.status);
            }
        }
        req.send()
    }, 2000);


    document.querySelector('#post-id').value = ''
};