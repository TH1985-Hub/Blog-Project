
import { api } from './apis/api.js'

function createPostPage(){
    const container = UI.createElement('div', { class: 'container w-100 d-flex js-space-between  fd-column ai-center' }, [
        UI.createElement('header', { class: 'header w-90 h-100px d-flex  ai-center jc-flex-end' }, [
            UI.createElement('a', { class: 'nav_list td-none transition-5', href: 'home.html' }, 'Home'),
            // UI.createElement('a', { class: 'nav_list td-none transition-5', href: 'index.html' }, 'Log In'),
            // UI.createElement('a', { class: 'nav_list td-none transition-5', href:  'create-page.html'}, 'Create Blog'),
        ]),

        UI.createElement("main", {class: "main_box  d-flex jc-space-centre at-centre   fd-column"}, [
            UI.createElement('h2', { class: 'title' }, 'Create a New Post'),
        UI.createElement('div', {class: "label_container  w-100  d-flex ai-centre jc-centre fd-column"},[
            UI.createElement('label', {},[
                //  UI.createElement('input', { type: 'radio',  name: 'auther',value: 'Name Surname', class: 'radio' }, 'Name Surname'),
                //  UI.createElement('button', { type: 'submit', class: 'submit-btn-label ' }, 'Create New Post')
                 ]),
                
            UI.createElement("form",{class: "form_container  d-flex  jc-space-center fd-column ai-center",  id: "createPostForm"},[
                UI.createElement('input', { type: 'text', id: 'postTitle' , placeholder: 'Title of the post', class: 'form_container_input ' }),
                UI.createElement('textarea',{id: 'postStory', placeholder: 'Story', class: 'form_container_input', rows: 4} ),
                UI.createElement('input', {type: 'url', id: 'postImageUrl', placeholder: 'Image Link(URL)', class: 'form_container_input'}),
                UI.createElement('button', { type: 'submit', class: 'submit-btn-label ' }, 'Create New Post')
            ]
            

        )
             
        ]),
    ])
                   

            ])
        

        UI.render(container, 'body');
    
        //  document.getElementById('createPostForm').addEventListener('submit', function (event)) 
        //     //event.preventDefault();

        // const createPostForm = document.getElementById("Create New Post");
        //  createPostForm.addEventListener("click", createPostHandler);

        const createPostForm = document.getElementById("createPostForm");
    createPostForm.addEventListener("submit", createPostHandler);
}
      

      function initApplicants() {
        createPostPage();
      
        const queryString = window.location.search;
        const searchParams = new URLSearchParams(queryString);
      
        if (searchParams.has("id")) {
          const postId = searchParams.get("id");
      
          api.post.getPostById(postId).then(post => {
            document.getElementById("postTitle").value = post.title;
            document.getElementById("postStory").value = post.story;
            document.getElementById("postImage").value = post.img ? post.img : "";   
          }).catch(() => {
            window.location.assign("home.html");
          })
        }
      
      }
      
      initApplicants();
      
      
function createPostHandler(event) {
    event.preventDefault();

    
  // Get form values
  const title = document.getElementById("postTitle").value.trim();
  const story = document.getElementById("postStory").value.trim();
  const img = document.getElementById("postImage").value.trim();

  // Validate the form inputs
  if (!title || !story || !img) {
    alert("Please fill in all fields.");
    return;
  }

  // Create a new post object
  const newPost = {
    title,
    story,
    authorName: '', 
    img
  };

  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const id = searchParams.get("id");


  if (id) {
    api.post.update(id, newPost).then((post) => {
      console.log(post);
      window.location.href="home.html";  
    })
  } else {
    api.post.create(newPost).then((post) => {
      console.log(post);
      window.location.href="home.html";  
    })
  }
}


    
// //             const title = document.getElementById('postTitle').value;
// //             const story = document.getElementById('postStory').value;
// //             const imageUrl = document.getElementById('postImageUrl').value;

// //             const newPost = {
// //                 title: title,
// //                 story: story,
// //                 img: imageUrl,
// //                 authorName: 'Author Name',
// //             };
    
// //             let posts = JSON.parse(localStorage.getItem('posts')) || [];
// //             posts.push(newPost);
// //             localStorage.setItem('posts', JSON.stringify(posts));
            
// //             window.location.href = 'home.html';
// //             });

// // }

// function createPostPage() {
//     const container = UI.createElement('div', { class: 'container w-100 d-flex js-space-between fd-column ai-center' }, [
//         UI.createElement('header', { class: 'header w-90 h-100px d-flex ai-center jc-flex-end' }, [
//             UI.createElement('a', { class: 'nav_list td-none transition-5', href: 'home.html' }, 'Home'),
//             // You can add more navigation links if needed.
//         ]),

//         UI.createElement("main", { class: "main_box d-flex jc-space-centre at-centre fd-column" }, [
//             UI.createElement('h2', { class: 'title' }, 'Create a New Post'),
//             UI.createElement('div', { class: "label_container w-100 d-flex ai-centre jc-centre fd-column" }, [
//                 UI.createElement("form", { class: "form_container d-flex jc-space-center fd-column ai-center", id: "createPostForm" }, [
//                     UI.createElement('input', { type: 'text', id: 'postTitle', placeholder: 'Title of the post', class: 'form_container_input' }),
//                     UI.createElement('textarea', { id: 'postStory', placeholder: 'Story', class: 'form_container_input', rows: 4 }),
//                     UI.createElement('input', { type: 'url', id: 'postImageUrl', placeholder: 'Image Link(URL)', class: 'form_container_input' }),
//                     UI.createElement('button', { type: 'submit', class: 'submit-btn-label' }, 'Create New Post')
//                 ])
//             ])
//         ])
//     ]);

//     UI.render(container, 'body');

//     // Attach the event listener to the form
//     const createPostForm = document.getElementById("createPostForm");
//     createPostForm.addEventListener("submit", createPostHandler);
// }

// // Initialization function
// function initApplicants() {
//     createPostPage();

//     const queryString = window.location.search;
//     const searchParams = new URLSearchParams(queryString);

//     if (searchParams.has("id")) {
//         const postId = searchParams.get("id");

//         api.post.getPostById(postId).then(post => {
//             document.getElementById("postTitle").value = post.title;
//             document.getElementById("postStory").value = post.story;
//             document.getElementById("postImageUrl").value = post.img ? post.img : "";
//         }).catch(() => {
//             window.location.assign("home.html");
//         });
//     }
// }

// function createPostHandler(event) {
//     event.preventDefault();  // Prevent form submission to allow custom handling

//     // Get form values
//     const title = document.getElementById("postTitle").value.trim();
//     const story = document.getElementById("postStory").value.trim();
//     const img = document.getElementById("postImageUrl").value.trim();

//     // Validate the form inputs
//     if (!title || !story || !img) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     // Create a new post object
//     const newPost = {
//         title,
//         story,
//         authorName: '', // Add author logic if needed
//         img
//     };

//     // Check if we are editing an existing post (via the URL query string)
//     const queryString = window.location.search;
//     const searchParams = new URLSearchParams(queryString);
//     const id = searchParams.get("id");

//     if (id) {
//         // If postId exists, update the existing post
//         api.post.update(id, newPost).then((post) => {
//             console.log(post);
//             window.location.href = "home.html";  // Redirect to the home page
//         }).catch((error) => {
//             console.error(error);
//             alert("There was an error updating the post.");
//         });
//     } else {
//         // If no postId, create a new post
//         api.post.create(newPost).then((post) => {
//             console.log(post);
//             window.location.href = "home.html";  // Redirect to the home page
//         }).catch((error) => {
//             console.error(error);
//             alert("There was an error creating the post.");
//         });
//     }
// }

// // Initialize the page
// initApplicants();
