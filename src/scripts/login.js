


import { UI } from "./utils.js";
import { api } from "./apis/api.js";
import { Storage } from "./utils/storage.js";

document.addEventListener('DOMContentLoaded', () => {
  createContainer();
});

const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }

  try {
    const credentials = { email, password };
    const response = await api.auth.login(credentials); // ✅ Use `api`, not `auth.api`
    console.log('Login response:', response);

    const token = response.token || response.data?.token; // ✅ Check for token
    if (token) {
      Storage.setItem('token', token);
      Storage.setItem('user', JSON.stringify(response.user));
      window.location.href = 'home.html';
    } else {
      alert('Login failed: No token received.');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert(error.message || 'Login failed. Please try again.');
  }
};

const createContainer = () => {
  const container = UI.createElement('div', { class: 'container w-100 d-flex jc-space-between fd-column ai-center' }, [
    UI.createElement('header', { class: 'header w-90 h-100px d-flex ai-center jc-space-between' }, [
      UI.createElement('a', { href: 'home.html', class: 'nav_list td-none transition-5' }, 'Home'),
    ]),
    UI.createElement('main', { class: 'main-container d-flex jc-space-centre ai-centre fd-column' }, [
      UI.createElement('div', { class: 'login-container d-flex ai-center jc-center' }, [
        UI.createElement('form', { id: 'loginForm', class: 'form_box w-300px h-300px d-flex jc-space-center fd-column ai-center' }, [
          UI.createElement('input', { id: "email", type: 'email', placeholder: 'Email', class: 'form_box_email w-200px h-40px', autocomplete: "email"}),
          UI.createElement('input', { id: "password", type: 'password', placeholder: 'Password', class: 'form_box_password w-200px h-40px', autocomplete: 'current-password' }),
          UI.createElement('button', { type: 'submit', class: 'form_box_login w-100px h-40px transition-5' }, 'Login'),
        ]),
      ]),
    ]),
  ]);

  
  UI.render(container, 'body');

  const loginForm = document.querySelector("#loginForm");
  //console.log('Login Form element:', loginForm);
  if (loginForm) {
    loginForm.addEventListener('submit', loginHandler);
  } else {
    console.error('Login Form not found!');
  }
};