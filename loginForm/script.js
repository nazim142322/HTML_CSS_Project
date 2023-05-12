const title = document.getElementById("title");
const nameField = document.getElementById('namefield');
const singinButton = document.getElementById('signinBtn');
const singupButton = document.getElementById('signupBtn');
// console.log(nameField);
singupButton.onclick = function(){
    title.innerHTML='Sign Up';
    nameField.style.display="block";
}
singinButton.onclick = function(){
    title.innerHTML='Login'
    nameField.style.display="none";
}