



import { UI } from "./utils.js";
import {api } from "./apis/api.js";
import { Storage } from "./utils/storage.js";

const handleLogin = async (event) => {
  event.preventDefault(); 
  const inputEmail = document.querySelector("#email");
  const inputPassword = document.querySelector("#password");

  const email = inputEmail.value.trim();
  const password = inputPassword.value.trim();

  if (!email || !password) {
    alert(' Please enter both email and password.');
    return;
  }

  const credentials = { email, password };

  try {
   
    const loginButton = document.querySelector(".form_box_login");
    loginButton.textContent = "Logging in...";
    loginButton.disabled = true;

    console.log("Attempting login with credentials:", credentials);

    const result = await api.auth.login(credentials);
     
    console.log("Login response:", result);
    if (result?.accessToken && result?.user) {
     
      Storage.setItem('token', result.accessToken);
      Storage.setItem('user', result.user);

      
      console.log("Login successful. User data:", result.user);

     
      window.location.assign("home.html");
    } else {
      alert(' Invalid login credentials. Please try again.');
    }
  } catch (error) {
    alert(`Login failed: ${error.message || "Unknown error"}`);
    console.error("Login Error:", error);
  } finally {
    
    const loginButton = document.querySelector(".form_box_login");
    loginButton.textContent = "Login";
    loginButton.disabled = false;
  }
};

const createContainer =()  {
  const container = UI.createElement('div', { class: 'container w-100 d-flex jc-space-between fd-column ai-center' }, [
    UI.createElement('header', { class: 'header w-90 h-100px d-flex ai-center js-flex-end' }, [
      UI.createElement('a', { href: 'home.html', class: 'nav_list td-none transition-5' }, 'Home'),
    ]),
    UI.createElement('main', { class: 'main-container d-flex jc-space-centre at-centre fd-column' },[
    UI.createElement('div', { class: 'login-container d-flex ai-center jc-center' }, [
      UI.createElement('form', { id: 'loginform', class: 'form_box w-300px h-300px d-flex jc-space-center fd-column ai-center' }, [
        UI.createElement('input', { id: "email", type: 'email', placeholder: 'Email', class: 'form_box_email w-200px h-40px',autocomplete: "email" }),
        UI.createElement('input', { id: "password", type: 'password', placeholder: 'Password', class: 'form_box_password w-200px h-40px', autocomplete: 'current-password' }),
        UI.createElement('button', { type: 'submit', class: 'form_box_login w-100px h-40px transition-5' }, 'Login'),
      ]),
      ]),
    ]),
  ]);

  UI.render(container, 'body');

 
  const loginForm = document.querySelector("#loginform");
  loginForm.addEventListener('submit', handleLogin);
}


createContainer();