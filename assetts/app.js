
const users_list = document.querySelector('#users-list');
const posts_list = document.querySelector('#posts-list');
// const likeBtn = document.querySelector('btn');

const xhr = new XMLHttpRequest();

xhr.onload = () => {
    let data = JSON.parse(xhr.response);

    data.map(item => {
        users_list.innerHTML +=
        `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;" onclick="showPosts((this),${item.id})">
            <div class="card-header">${item.name}</div>
            <div class="card-body">
                <h5 class="card-title">${item.email}</h5>
                <p class="card-text">
                <span class="d-block">Phone:${item.phone}</span>
                <span class="d-block">WebSite:${item.website}</span>
                </p>
            </div>
        </div>`
    })
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();

function showPosts(a,user__id){

const xhr = new XMLHttpRequest();

xhr.onload = () => {
    let data = JSON.parse(xhr.response);
    

    let result=data.filter(item=>{
         return item.userId==user__id;
    })
    
   
     posts_list.innerHTML='';
     
    result.map(item => {
        
        posts_list.innerHTML +=
        `<div class="card mb-3">
        <div class="card-header">
          ${user__id}
        </div>
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.body}</p>
          <a href="#" class="btn btn-primary">Like</a>
        </div>
      </div>`
    })
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();
}