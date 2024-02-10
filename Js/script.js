let usernameInput = document.querySelector(".username")
let nameInput = document.querySelector(".name")
let emailInput = document.querySelector(".email")
let PhoneInput = document.querySelector(".phone")
let passwordInput = document.querySelector(".password")
let singUp = document.querySelector(".button")
let users = JSON.parse(localStorage.getItem('USERS')) || []
let username = JSON.parse(localStorage.getItem('USERS2')) || []
function singUpBtn(){
   
   let user = {
      username: usernameInput.value,
      email:emailInput.value,
      password: passwordInput.value,
      phone: PhoneInput.value,

    };
   
  
    if (users.length) {
      let result = true;
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === user.username&&  users[i].password === user.password) {
          result = false;
          break;
        }
      }
      if (result) {
        users.push(user)
        
      } 
      else {
        alert("This username is already taken");
      }
    } else {
      users.push(user);
      localStorage.setItem('USERS', JSON.stringify(users));
      window.location.replace("login.html");
    }
}