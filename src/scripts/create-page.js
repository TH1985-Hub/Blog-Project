


import UI from "./utils.js";
import { api } from './apis/api.js';
import { baseURL } from "./apis/const.js";
import { FileUpload }  from "./apis/file-upload.api.js";
import { isUserLogin } from "./utils/is-user-login.js";

// const isLoggedIn = isUserLogin();
// if (!isLoggedIn) {
//   window.location.href = 'home.html'; 
// }

function createPostPage() {
  const container = UI.createElement('div', { class: 'container w-100 d-flex js-space-between fd-column ai-center' }, [
    UI.createElement('header', { class: 'header w-90 h-100px d-flex ai-center jc-flex-end' }, [
      UI.createElement('a', { class: 'nav_list td-none transition-5', href: 'home.html' }, 'Home'),
    ]),
    UI.createElement("main", { class: "main_box d-flex jc-space-centre at-centre fd-column" }, [
      UI.createElement('h2', { class: 'title' }, 'Create a New Post'),
      UI.createElement('div', { class: "label_container w-100 d-flex ai-centre jc-centre fd-column" }, [
        UI.createElement("form", { class: "form_container d-flex jc-space-center fd-column ai-center", id: "createPostForm" }, [
          UI.createElement('input', { type: 'text', id: 'postTitle', placeholder: 'Title of the post', class: 'form_container_input' }),
          UI.createElement('textarea', { id: 'postStory', placeholder: 'Story', class: 'form_container_input', rows: 4 }),
          
          UI.createElement('input', { type: 'file', id: 'postImageFile', class: 'form_container_input' }),
          UI.createElement('button', { type: 'submit', class: 'submit-btn-label' }, 'Create New Post')
        ])
      ])
    ]),
  ]);

  UI.render(container, 'body');

  const createPostForm = document.getElementById("createPostForm");
  createPostForm.addEventListener("submit", createPostHandler);
}

async function createPostHandler(event) {
  event.preventDefault();
  console.log("Form submitted");

  const title = document.getElementById("postTitle").value.trim();
  const story = document.getElementById("postStory").value.trim();

  if (!title || !story) {
    alert("Please fill in all fields.");
    return;
  }

  const fileInput = document.getElementById("postImageFile");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select an image file.");
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  let imageUrl = '';

  try { 
    const uploadResponse = await fetch(`${baseURL.endsWith('/') ? baseURL : baseURL + '/'}upload`, {
      method: 'POST',
      body: formData,
    });

    if (!uploadResponse.ok) {
      throw new Error(`File upload failed with status ${uploadResponse.status}`);
    }

    const uploadData = await uploadResponse.json();
    imageUrl = uploadData.url;
  } catch (error) {
    console.error("Error uploading file:", error);
    alert("There was an error uploading the file.");
    return;
  }

  const newPost = {
    title,
    story,
    authorName: '',
    img: imageUrl,
  };

  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const id = searchParams.get("id");

  try {
    if (id) {
      await api.post.update(id, newPost);
      console.log(`Post with ID: ${id} updated`);
    } else {
      await api.post.create(newPost);
      console.log("New post created");
    }
    window.location.href = "home.html";
  } catch (error) {
    console.error(error);
    alert(`There was an error ${id ? "updating" : "creating"} the post.`);
  }
}

async function initApplicants() {
  createPostPage();

  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);

  if (searchParams.has("id")) {
    const postId = searchParams.get("id");
    try {
      const post = await api.post.getPostById(postId);
      document.getElementById("postTitle").value = post.title;
      document.getElementById("postStory").value = post.story;
       
    } catch (error) {
      console.error("Failed to load the post for editing:", error);
      window.location.assign("home.html");
    }
  }
}

initApplicants();
