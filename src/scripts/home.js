
import { UI } from "./utils.js"; 
// import { api } from "./apis/api.js";
import { PostApi } from "./apis/post.api.js";
import { UserApi } from "./apis/user.api.js";
import { baseURL } from "./apis/const.js"; 
import footerData from "./data.js"; 

const postApi = new PostApi(baseURL);
const userApi = new UserApi(baseURL);


const state = {
  posts: [],
  bloggers: [],
};

function getRandomAvatar() {
  const avatars = [
    "https://www.w3schools.com/howto/img_avatar.png",
    "https://www.w3schools.com/w3images/avatar2.png",
    "https://www.w3schools.com/w3images/avatar5.png",
    "https://www.w3schools.com/w3images/avatar6.png",
    "https://www.w3schools.com/howto/img_avatar2.png",
  ];
  return avatars[Math.floor(Math.random() * avatars.length)];
}


async function fetchPosts() {
  try {
    const response = await fetch(`${baseURL}posts`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    state.posts = await response.json();
    renderPosts(); 
  } catch (error) {
    console.error('Error fetching posts:', error);
    const postsContainer = document.querySelector('.section_block_posts');
    if (postsContainer) {
      postsContainer.innerHTML = '<p>Failed to load posts. Please try again later.</p>';
    }
  }
}


function renderPosts() {
  const postsContainer = document.querySelector('.section_block_posts');
  if (!postsContainer) {
    console.error('Posts container not found');
    return;
  }
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
    ]);

    postsContainer.appendChild(postElement);
  });
}

function renderBloggers() {
  const bloggersContainer = document.querySelector('.bloggers_list');
  if (!bloggersContainer) {
    console.error('Bloggers container not found');
    return;
  }
  bloggersContainer.innerHTML = ''; 

  state.bloggers.forEach((blogger) => {
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


async function fetchBloggers() {
  try {
    const response = await fetch(`${baseURL}users`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    state.bloggers = await response.json();
    renderBloggers();
  } catch (error) {
    console.error('Error fetching bloggers:', error);
  }
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
      UI.createElement('div', { class: 'sidebar w-400px h-auto d-flex fd-column ' }, [
        UI.createElement('h2', { class: 'sidebar_title' }, 'Bloggers'),
        UI.createElement('div', { class: 'bloggers_list w-90 h-80 d-flex fd-column n jc-space-between ai-center overflow-y: auto  ' }),
      ]),
      UI.createElement('section', { class: 'section w-70 h-100 d-flex fd-column' }, [
        // UI.createElement('div', { class: 'create-new-post-btn-container' }, [  
        //   UI.createElement('button', { class: 'create-new-post-btn', onclick: () => window.location.assign('create-page.html') }, 'Create New Post'),
        // ]),
        UI.createElement('div', { class: 'section_block w-100 h-90 d-flex fd-column overflow' }, [
          UI.createElement('div', { class: 'section_block_posts w-90 h-100 d-flex jc-space-around ai-center fd-column overflow' }),
        ]),
      
    
    UI.createElement('footer', { class: 'footer w-100 h-4px d-flex jc-space-around fd-column ' }, [
      UI.createElement('div', { class: 'footer_info h-10px'    }, [
        UI.createElement('p', { class: 'footer_info_email' }, `Email: ${footerData.email}`),
        UI.createElement('p', { class: 'footer_info_number' }, `Phone: ${footerData.number}`),
      ]),
      UI.createElement('div', { class: 'social-media w-100px h-10px display-flex jc-space-between' }, [
        UI.createElement('a', { href: footerData.socialMedia.facebook, class: 'fa-brands fa-facebook' }),
        UI.createElement('a', { href: footerData.socialMedia.instagram, class: 'fa-brands fa-instagram' }),
      ])
      ])
      ])
    ])
  ]);

  
  UI.render(container, 'body');
}


async function init() {
  renderContainer();
  await fetchBloggers();
  await fetchPosts(); 
}

async function loadMorePosts() {
  console.log("Loading more posts...");
  
  const postsContainer = document.querySelector('.section_block_posts');
  const newPost = UI.createElement('div', { class: 'post_card w-100' }, [
    UI.createElement('p', {}, "New post loaded...")
  ]);
  const sentinel = document.getElementById('sentinel');
  postsContainer.insertBefore(newPost, sentinel);
}

function setupInfiniteScroll() {
  const sentinel = document.getElementById('sentinel');
  if (!sentinel) {
    console.warn("Sentinel element not found.");
    return;
  }

  const observer = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting) {
      await loadMorePosts();
    }
  }, {
    root: document.querySelector('.section_block_posts'),
    threshold: 1.0
  });

  observer.observe(sentinel);
}


document.addEventListener('DOMContentLoaded', () => {
  init();
  setupInfiniteScroll();
});
