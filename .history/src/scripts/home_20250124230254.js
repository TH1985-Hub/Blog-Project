

import { UI } from "./utils.js";
import { api }  from "./apis/api.js";
import { baseUrl}    from "./apis/const.js";
import { isUserLogin } from './utils/is-user-login.js';
import  footerData  from "./data.js";

const state = {
  posts: [
    //{
          //     id: 1,
          //     title: "The Adventures of Alice in Wonderland",
          //     story: "Alice was beginning to get very tired of sitting by her sister on the bank and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations.",
          //     authorName: "Lewis Carroll",
          //     img: "https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/84f9dc39-0868-4cec-aeaa-2356387f37ce/Alice%E2%80%99s%20Adventures%20in%20Wonderland%20-%20Header.png",
          // },
          // {
          //     id: 2,
          //     title: "The Lord of the Rings: The Fellowship of the Ring",
          //     story: "One ring to rule them all, one ring to find them,  one ring to bring them all and in the darkness bind them, in the Land of Mordor where the Shadows lie.",
          //     authorName: "J.R.R. Tolkien",
          //     img: "https://img.hulu.com/user/v3/artwork/3c4e0a9f-c6f2-44f4-a703-a18c6be2a937?base_image_bucket_name=image_manager&base_image=243fcf14-8e45-4441-96a8-be510660958a&size=600x338&format=webp",
          // },
          // {
          //     id: 3,
          //     title: "Pride and Prejudice",
          //     story: "It is a truth universally acknowledged,  that a single man in possession of a good fortune must be in want of a wife.",
          //     authorName: "Jane Austen",
          //     img: "./src/images/image3.png",
          // },
          // {
          //     id: 4,
          //     title: "Oliver Twist",
          //     story: "Oliver Twist was born in a workhouse, and his early life was one of hardship and struggle.",
          //     authorName: "Charles Dickens",
          //     img: "./src/images/image4.png",
          // }
  ],
};


const bloggers = [
//   { id: 1, firstName: "Sophie", lastName: "Robinson" },
//   { id: 2, firstName: "Adam", lastName: "Gallagher" },
//   { id: 3, firstName: "Tash", lastName: "Sefton" },
//   { id: 4, firstName: "Blake", lastName: "Scott" },
//   { id: 5, firstName: "Julia", lastName: "Engel" },
//   { id: 6, firstName: "Olivia", lastName: "Palermo" },
];

// const footerData = {
//   email: 'htatevik382@gmail.com',
//   number: '+37493675097',
//   socialMedia: {
//     facebook: 'https://www.facebook.com',
//     instagram: 'https://www.instagram.com',
//   },
// };

async function fetchPosts() {
  try {
    const response = await fetch(`${baseUrl}/posts`);
    const data = await response.json();
    state.posts = data;
    renderPosts();
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

function getRandomAvatar() {
  const avatars = [
    "https://www.w3schools.com/howto/img_avatar.png",
    "https://www.w3schools.com/w3images/avatar2.png",
    "https://www.w3schools.com/w3images/avatar5.png",
    "https://www.w3schools.com/w3images/avatar6.png",
    "https://www.w3schools.com/howto/img_avatar2.png",
  ];
  const randomIndex = Math.floor(Math.random() * avatars.length);
  return avatars[randomIndex];
}

function redirectToLoginIfNotLoggedIn() {
  if (!isUserLogin()) {
    window.location.assign ("index.html");
  }
}

// function handleDelete(postId) {
//   state.posts = state.posts.filter((post) => post.id !== postId);
//   renderPosts();
// }

// function handleEdit(postId) {
//   const queryParams = new URLSearchParams({ id: postId });
//   window.location.href = `create-page.html?${queryParams.toString()}`;
// }

async function handleDelete(postId) {
  try {
    await api.post.delete(postId);
    state.posts = state.posts.filter((post) => post.id !== postId);
    renderPosts();
    console.log(`Post with ID: ${postId} deleted`); // Debug log
  } catch (error) {
    console.error(`Error deleting post with ID: ${postId}`, error);
  }
}

function handleEdit(postId) {
  console.log(`Editing post with ID: ${postId}`); // Debug log
  const queryParams = new URLSearchParams({ id: postId });
  window.location.href = `create-page.html?${queryParams.toString()}`;
}

function renderPosts() {
  const postsContainer = document.querySelector('.section_block_posts');
  postsContainer.innerHTML = ''; 

  state.posts.forEach((post) => {
    const postElement = UI.createElement('div', { class: 'post_card w-100' }, [
      UI.createElement('div', { class: 'post_card_boxPostTitle d-flex jc-space-between ai-center' }, [
        UI.createElement('p', { class: 'post_card_author' }, `By: ${post.authorName}`),
        UI.createElement('h4', { class: 'post_card_title' }, post.title),
      ]),
      UI.createElement('div', { class: 'post_card_description d-flex jc-space-between ai-center ta-center' }, [
        UI.createElement('img', { src: post.img, alt: post.title, class: 'post_image w-300px h-200px transition-7' }),
        UI.createElement('div', { class: 'box_post_story w-400px' }, [
          UI.createElement('p', { class: 'post_story' }, post.story),
        ]),
      ]),
      UI.createElement('div', { class: 'post-actions d-flex jc-space-between' }, [
        UI.createElement('button', { class: 'btn-edit', onclick: () => handleEdit(post.id) }, 'Edit'),
        UI.createElement('button', { class: 'btn-delete', onclick: () => handleDelete(post.id) }, 'Delete'),
      ]),
  ]);
  
  

    
    postsContainer.appendChild(postElement);

    postElement.querySelector('.btn-edit').addEventListener('click', () => handleEdit(post.id));
    postElement.querySelector('.btn-delete').addEventListener('click', () => handleDelete(post.id));
  });
}





function renderBloggers() {
  const bloggersContainer = document.querySelector('.bloggers_list');
  bloggersContainer.innerHTML = ''; 

  bloggers.forEach((blogger) => {
    const bloggerElement = UI.createElement('div', { class: 'blogger w-90 h-150px d-flex jc-space-between ai-center' }, [
      UI.createElement('img', {
        src: getRandomAvatar(),
        alt: `${blogger.firstName} ${blogger.lastName}`,
        class: 'blogger_avatar w-100px h-100px transition-7',
      }),
      UI.createElement('p', { class: 'blogger_name' }, `${blogger.firstName} ${blogger.lastName}`),
    ]);
    bloggersContainer.appendChild(bloggerElement);
  });
}

function renderContainer() {
  const container = UI.createElement('div', { class: 'container-root w-100 d-flex jc-space-between ai-center fd-column' }, [
    UI.createElement('header', { class: 'header w-90 h-100px d-flex ai-center jc-space-between' }, [
      UI.createElement('h1', { class: 'title' }, 'Blog'),
      UI.createElement('nav', { class: 'nav' }, [
        UI.createElement('a', { class: 'nav_list', href: 'registration.html' }, 'Sign Up'),
        UI.createElement('a', { class: 'nav_list', href: 'index.html' }, 'Log In'),
        UI.createElement('a', { class: 'nav_list', href: 'create-page.html' }, 'Create Blog'),
      ]),
    ]),
    UI.createElement('main', { class: 'main-container w-90 h-80 d-flex jc-space-between' }, [
      UI.createElement('div', { class: 'sidebar w-400px h-auto d-flex fd-column overflow' }, [
        UI.createElement('h2', { class: 'sidebar_title' }, 'Bloggers'),
        UI.createElement('div', { class: 'bloggers_list w-90 h-80 d-flex fd-column' }),
      ]),
      UI.createElement('section', { class: 'section w-70 h-100 d-flex fd-column' }, [
        UI.createElement('div', { class: 'create-new-post-btn-container' }, [
          UI.createElement('button', { class: 'create-new-post-btn', onclick: () => window.location.assign('create-page.html') }, 'Create New Post'),
        ]),
        UI.createElement('div', { class: 'section_block w-100 h-90 d-flex fd-column overflow' }, [
          UI.createElement('div', { class: 'section_block_posts w-90 h-100 d-flex fd-column' }),
        ]),
      ]),
    ]),
    UI.createElement('footer', { class: 'footer w-100 h-8 d-flex' }, [
      UI.createElement('div', { class: 'footer_info' }, [
        UI.createElement('p', { class: 'footer_info_email' }, `Email: ${footerData.email}`),
        UI.createElement('p', { class: 'footer_info_number' }, `Phone: ${footerData.number}`),
      ]),
      UI.createElement('div', { class: 'social-media' }, [
        UI.createElement('a', { href: footerData.socialMedia.facebook, class: 'fa-brands fa-facebook' }),
        UI.createElement('a', { href: footerData.socialMedia.instagram, class: 'fa-brands fa-instagram' }),
      ]),
    ]),
  ]);
  UI.render(container, 'body');
}


  // function init() {
  // redirectToLoginIfNotLoggedIn();
  // renderContainer();
  // renderBloggers();
  // renderPosts();
  // }

  async function init() {
    renderContainer();
    renderBloggers();
    redirectToLoginIfNotLoggedIn();
    await fetchPosts();
    
  }
  
  init();
  
  
  