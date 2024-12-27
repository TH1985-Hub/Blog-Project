





import { api } from './apis/api.js'
const handleLogin = async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  
  const credentials = {
    email, 
    password
  }

  // {
  //   "email": "miller@gmail.com",
  //   "password": "asdasd"
  // }

  // const result = await api.auth.login(credentials);

  // if (result.accessToken && result.user) {
  //   Storage.set('token', result.accessToken);
  //   Storage.set('user', result.user);
  //   window.location.assign("home.html");  
  // } else {
  //   alert('Something Wrong')
  // }
  
  

  // console.log(credentials);
}



function createContainer(){
    const container = UI.createElement('div', {class : 'container w-100 d-flex jc-space-between fd-column ai-center'}, [
        UI.createElement('header', {class: 'header w-90 h-100px d-flex ai-center js-flex-end'},[
            UI.createElement('a', {href : 'home.html', class: 'nav_list td-none transition-5'}, 'Home'),
        ]),
        UI.createElement('main',{class: 'main-container d-flex jc-space-centre at-centre fd-column'}), 
        UI.createElement('div', {class: 'login-container d-flex ai-center jc-center ' },[
        UI.createElement('form', {id: 'loginform', class: 'form_box w-300px h-300px d-flex  jc-space-center fd-column ai-center' }, [
            UI.createElement('input', { id: "email", type: 'email', placeholder: 'Email', class: 'form_box_email w-200px h-40px' }),
            UI.createElement('input', {id: "password", type: 'password', placeholder: 'Password', class: 'form_box_password w-200px h-40px ' }),
            UI.createElement('button', { type: 'submit', class: 'form_box_login w-100px h-40px transition-5' }, 'Login')
            
           
        ])
        ])
        
    ]);

     
  //buttonLogin.addEventListener("click", handleLogin)
    UI.render(container, 'body');

    
// const loginForm = document.getElementById('loginForm');
// loginForm.addEventListener('submit', loginHandler);
// }

// function loginHandler(event){
//     event.preventDefault();

//     const email = document.getElementById('email').value.trim();
//     const password = document.getElementById('password').value.trim();

//     if(!email || !password) {
//         alert('Please fill all fields');
//         return;
//     }

//     const loginData= {
//         email:email,
//         password:password,

//     };

//     authApi.login(loginData)
//       .then(response => {
//        console.log("Login Successful");

//        localStorage.setItem("access_token",response.access_token);
//        window.location.href = "home.html";
//       })
//       .catch(error => {
//           alert("Login failed")
//       });
}
createContainer();
