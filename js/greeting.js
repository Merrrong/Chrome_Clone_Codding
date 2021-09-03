const greeting = document.querySelector(".greeting")
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-input");
let savedUser=""
savedUser=localStorage.getItem("user")

if(savedUser!==null){
    userLogin(savedUser);
}

loginForm.addEventListener("submit", handleLogin);

function handleLogin(e){
    e.preventDefault();
    userName=loginInput.value;
    if(userName!==""){
        userLogin(userName);
        localStorage.setItem("user", userName)
    }
}

function userLogin(userName){
    div=document.createElement("div")
    div.innerText=`Hello, ${userName}`;
    div.classList.add("greet-user")
    greeting.appendChild(div)
    loginForm.classList.add("hidden")
}
