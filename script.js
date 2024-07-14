const container = document.querySelector('.container');
const signupButton = document.querySelector('.signup-selection header');
const loginButton = document.querySelector('.login-selection header');

loginButton.addEventListener('click',()=>{
    container.classList.add('active');
});

signupButton.addEventListener('click',() =>{
    container.classList.remove('active');
});