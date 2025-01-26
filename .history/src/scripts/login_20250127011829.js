// import { UI } from "./utils.js";
// import {api } from "./apis/api.js";
// import { Storage } from "./utils/storage.js";

// // const handleLogin = async (event) => {
// //   event.preventDefault(); 

// document.addEventListener('DOMContentLoaded', () => {
//   const loginForm = document.getElementById('loginForm');
//   if (loginForm) {
//     loginForm.addEventListener('submit', loginHandler);
//   }
// });

// async function loginHandler(event) {
//   event.preventDefault();


//   const email = document.getElementById('email').value.trim();
//   const password = document.getElementById('password').value.trim();

//   if (!email || !password) {
//     alert('Please enter both email and password.');
//     return;
//   }

//   const credentials = { email, password };

//   try {
//     const response = await api.auth.login(credentials);

//     if (response.id) {
//       // Assuming response.id indicates a successful login
//       window.location.assign('home.html');
//     } else {
//       alert("Login failed. Please check your credentials.");
//     }
//   } catch (error) {
//     console.error("Login error:", error.message);
//     alert(`Login failed: ${error.message}`);
  
// //   const inputEmail = document.querySelector("#email");
// //   const inputPassword = document.querySelector("#password");

// //   const email = inputEmail.value.trim();
// //   const password = inputPassword.value.trim();

// //   if (!email || !password) {
// //     alert(' Please enter both email and password.');
// //     return;
// //   }

// //   const credentials = { email, password };

// //   try {
   
// //     const loginButton = document.querySelector(".form_box_login");
// //     loginButton.textContent = "Logging in...";
// //     loginButton.disabled = true;

// //     console.log("Attempting login with credentials:", credentials);

// //     const result = await api.auth.login(credentials);
     
// //     console.log("Login response:", result);
// //     if (result?.accessToken && result?.user) {
     
// //       Storage.getItemetItem('token', result.accessToken);
// //       Storage.getItem('user', result.user);

      
// //       console.log("Login successful. User data:", result.user);

     
// //       window.location.assign("home.html");
// //     } else {
// //       alert(' Invalid login credentials. Please try again.');
// //     }
// //   } catch (error) {
// //     alert(`Login failed: ${error.message || "Unknown error"}`);
// //     console.error("Login Error:", error);
// //   } finally {
    
// //     const loginButton = document.querySelector(".form_box_login");
// //     loginButton.textContent = "Login";
// //     loginButton.disabled = false;
// //   }
//   }
// };

// const createContainer =()  =>{
//   const container = UI.createElement('div', { class: 'container w-100 d-flex jc-space-between fd-column ai-center' }, [
//     UI.createElement('header', { class: 'header w-90 h-100px d-flex ai-center js-flex-end' }, [
//       UI.createElement('a', { href: 'home.html', class: 'nav_list td-none transition-5' }, 'Home'),
//     ]),
//     UI.createElement('main', { class: 'main-container d-flex jc-space-centre at-centre fd-column' },[
//     UI.createElement('div', { class: 'login-container d-flex ai-center jc-center' }, [
//       UI.createElement('form', { id: 'loginform', class: 'form_box w-300px h-300px d-flex jc-space-center fd-column ai-center' }, [
//         UI.createElement('input', { id: "email", type: 'email', placeholder: 'Email', class: 'form_box_email w-200px h-40px',autocomplete: "email" }),
//         UI.createElement('input', { id: "password", type: 'password', placeholder: 'Password', class: 'form_box_password w-200px h-40px', autocomplete: 'current-password' }),
//         UI.createElement('button', { type: 'submit', class: 'form_box_login w-100px h-40px transition-5' }, 'Login'),
//       ]),
//       ]),
//     ]),
//   ]);

//   UI.render(container, 'body');

 
//   const loginForm = document.querySelector("#loginform");
//   loginForm.addEventListener('submit', handleLogin);
// }


// createContainer();



// import { UI } from "./utils.js";
// import { api } from "./apis/api.js";
// import { Storage } from "../storage.js";  // Corrected the path to './utils/storage.js'

// // Define loginHandler function
// async function loginHandler(event) {
//   event.preventDefault();

//   const email = document.getElementById('email').value.trim();
//   const password = document.getElementById('password').value.trim();

//   if (!email || !password) {
//     alert('Please enter both email and password.');
//     return;
//   }

//   const credentials = { email, password };

//   try {
//     const response = await api.auth.login(credentials);

//     if (response.id) {
//       // Assuming response.id indicates a successful login
//       window.location.assign('home.html');
//     } else {
//       alert("Login failed. Please check your credentials.");
//     }
//   } catch (error) {
//     console.error("Login error:", error.message);
//     alert(`Login failed: ${error.message}`);
//   }
// }

// const createContainer = () => {
//   const container = UI.createElement('div', { class: 'container w-100 d-flex jc-space-between fd-column ai-center' }, [
//     UI.createElement('header', { class: 'header w-90 h-100px d-flex ai-center js-flex-end' }, [
//       UI.createElement('a', { href: 'home.html', class: 'nav_list td-none transition-5' }, 'Home'),
//     ]),
//     UI.createElement('main', { class: 'main-container d-flex jc-space-centre ai-centre fd-column' }, [
//       UI.createElement('div', { class: 'login-container d-flex ai-center jc-center' }, [
//         UI.createElement('form', { id: 'loginform', class: 'form_box w-300px h-300px d-flex jc-space-center fd-column ai-center' }, [
//           UI.createElement('input', { id: "email", type: 'email', placeholder: 'Email', class: 'form_box_email w-200px h-40px', autocomplete: "email" }),
//           UI.createElement('input', { id: "password", type: 'password', placeholder: 'Password', class: 'form_box_password w-200px h-40px', autocomplete: 'current-password' }),
//           UI.createElement('button', { type: 'submit', class: 'form_box_login w-100px h-40px transition-5' }, 'Login'),
//         ]),
//       ]),
//     ]),
//   ]);

//   UI.render(container, 'body');

//   const loginForm = document.querySelector("#loginform");
//   loginForm.addEventListener('submit', loginHandler);
// }

// document.addEventListener('DOMContentLoaded', () => {
//   createContainer();
// });

// import { UI } from "./utils.js";
// import { api } from "./apis/api.js";
// //import { Storage } from "../utils/storage.js";  // Ensure the path is correct

// // Define loginHandler function
// async function loginHandler(event) {
//   event.preventDefault();

//   const email = document.getElementById('email').value.trim();
//   const password = document.getElementById('password').value.trim();

//   if (!email || !password) {
//     alert ('Please enter both email and password.');
//     return;
//   }

//   const credentials = { email, password };
//   console.log('Credentials:', credentials);

//   try {
//     const response = await api.auth.login(credentials);
//     console.log('API Response:', response);

//     Storage.setItem('token', result.accessToken);
//     Storage.setItem('user', result.user)

   

//     if (response.id) {
//       // Assuming response.id indicates a successful login
//       window.location.assign('home.html');
//     } else {
//       alert  ("Login failed. Please check your credentials.");
//     }
//   } catch (error) {
//     console.error("Login error:", error.message);
//     alert(`Login failed: ${error.message}`);
//   }
// }

// const createContainer = () => {
//   const container = UI.createElement('div', { class: 'container w-100 d-flex jc-space-between fd-column ai-center' }, [
//     UI.createElement('header', { class: 'header w-90 h-100px d-flex ai-center jc-space-between' }, [
//       UI.createElement('a', { href: 'home.html', class: 'nav_list td-none transition-5' }, 'Home'), // Ensure this href is correct
//     ]),
//     UI.createElement ('main', { class: 'main-container d-flex jc-space-centre ai-centre fd-column' }, [
//       UI.createElement('div', { class: 'login-container d-flex ai-center jc-center' }, [
//         UI.createElement('form', { id: 'loginform', class: 'form_box w-300px h-300px d-flex jc-space-center fd-column ai-center' }, [
//           UI.createElement('input', { id: "email", type: 'email', placeholder: 'Email', class: 'form_box_email w-200px h-40px', autocomplete: "email" }),
//           UI.createElement('input', { id: "password", type: 'password', placeholder: 'Password', class: 'form_box_password w-200px h-40px', autocomplete: 'current-password' }),
//           UI.createElement('button', { type: 'submit', class: 'form_box_login w-100px h-40px transition-5' }, 'Login'),
//         ]),
//       ]),
//     ]),
//   ]);

//   UI.render(container, 'body');

//   const loginForm = document.querySelector("#loginform");
//   loginForm.addEventListener ('submit', loginHandler);
// }

// document.addEventListener('DOMContentLoaded', () => {
//   createContainer();
// });

import { UI } from "./utils.js";
import { baseURL }  from "./apis/const.js";
import { api } from "./apis/api.js";
//import { Storage } from "../utils/storage.js";  // Ensure the path is correct

// Define loginHandler function
async function loginHandler(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }

  const credentials = { email, password };
  //console.log('Credentials:', credentials);

  console.log('Logging in with email:', credentials.email);
  console.log('Login Response Data:', { status: responseData.status, message: resp
  try {
    const response = await api.auth.login(credentials);
    console.log('API Response:', response);

    if (response && response.accessToken && response.user) {
      // Assuming response.accessToken indicates a successful login
      Storage.setItem('token', response.accessToken);
      Storage.setItem('user', JSON.stringify(response.user));

      window.location.assign('home.html');
    } else {
      alert("Login failed. Please check your credentials.");
    }
  } catch (error) {
    console.error("Login error:", error.message);
    alert (`Login failed: ${error.message}`);
  }
}

const createContainer = () => {
  const container = UI.createElement('div', { class: 'container w-100 d-flex jc-space-between fd-column ai-center' }, [
    UI.createElement('header', { class: 'header w-90 h-100px d-flex ai-center jc-space-between' }, [
      UI.createElement('a', { href: 'home.html', class: 'nav_list td-none transition-5' }, 'Home'),
    ]),
    UI.createElement('main', { class: 'main-container d-flex jc-space-centre ai-centre fd-column' }, [
      UI.createElement('div', { class: 'login-container d-flex ai-center jc-center' }, [
        UI.createElement('form', { id: 'loginform', class: 'form_box w-300px h-300px d-flex jc-space-center fd-column ai-center' }, [
          UI.createElement('input', { id: "email", type: 'email', placeholder: 'Email', class: 'form_box_email w-200px h-40px', autocomplete: "email" }),
          UI.createElement('input', { id: "password", type: 'password', placeholder: 'Password', class: 'form_box_password w-200px h-40px', autocomplete: 'current-password' }),
          UI.createElement('button', { type: 'submit', class: 'form_box_login w-100px h-40px transition-5' }, 'Login'),
        ]),
      ]),
    ]),
]);

  UI.render(container, 'body');

  const loginForm = document.querySelector("#loginform");
  loginForm.addEventListener('submit', loginHandler);
}

document.addEventListener('DOMContentLoaded', () => {
  createContainer();
});