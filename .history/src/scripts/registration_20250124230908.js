import UI from "./utils.js";
import {api} from "./apis/api.js";
import { baseUrl }  from "./apis/const.js";

function createRegisterationContainer() {
    const submitButton = UI.createElement("button", {type: "submit", class: 'submit-btn w-100px h-30px'}, "Submit");

    const handleSubmit = async (event) => {
        event.preventDefault()

        const firstname = document.getElementById('firstname').value.trim();
        const lastname = document.getElementById('lastname').value.trim();
        const username = document.getElementById('email').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
       

        if (!firstname || !lastname || !username || !email || !password) {
            alert('Please fill out all fields.');
            return;
          }


        const user = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password

        }

        console.log(user);

        try{
        const result = await api.auth.register(user);
        console.log(result);

        if(result.id) {
            window.location.assign('home.html');
        }else{
            alert("Registration failed");
        }
    } 

    submitButton.addEventListener('click', handleSubmit);

    const container = UI.createElement('div', { class: 'container w-100 d-flex jc-space-between  fd-column ai-center' }, [
        UI.createElement('header', { class: 'header w-90 h-100px d-flex  ai-center js-flex-end' }, [
            UI.createElement('a', { class: 'nav_list td-none transition-5', href: 'home.html' }, 'Home'),
            UI.createElement('a', { class: 'nav_list td-none transition-5', href: 'index.html' }, 'Log In')
            ]),
           
        
        UI.createElement('form', { class: 'formBox_container w-400px h-400px d-flex ai-center fd-column ta-center relative' }, [
            UI.createElement('input', { id: 'firstname', type: 'text', placeholder: 'First Name', class: 'formBox_container_input w-300px h-40px' }),
            UI.createElement('input', { id: 'lastname', type: 'text', placeholder: 'Last Name', class: 'formBox_container_input  w-300px h-40px' }),
            
            UI.createElement('input', { id: 'username', type: 'text', placeholder: 'Username', class: 'formBox_container_input w-300px h-40px' }),
            UI.createElement('input', { id: 'email', placeholder: 'Email', class: 'formBox_container_input  w-300px h-40px' }),
            
            UI.createElement('input', { id: 'password', type: 'text', placeholder: 'Password', class: 'formBox_container_input w-300px h-40px' }),
            
           
          
              
            // UI.createElement('div', {class: 'inputBox w-300px h-40px d-flex jc-space-between ai-center '},[
            //     UI.createElement('div', {class: 'box_checkbox'},[
            //         UI.createElement('input', {type: 'checkbox', class: 'checkbox'}),'Send me email',
            //     ]),
               // UI.createElement('button', { type: 'submit', class: 'submit-btn w-100px h-30px' }, 'Submit') [
                    submitButton

                
            ])
        
        

    ]);

    UI.render(container, 'body');
}
createRegisterationContainer();