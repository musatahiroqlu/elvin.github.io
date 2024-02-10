let usernameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let signIn = document.querySelector('button')
signIn.addEventListener('click', singInFunction)
let users = JSON.parse(localStorage.getItem('USERS')) || []
let USERS2 = JSON.parse(localStorage.getItem('USERS2')) || []

function singInFunction(event) {
    event.preventDefault()
    let user = {
        username: usernameInput.value,
        
        password: passwordInput.value,
        
  
      };
    if (users.length) {
        let result = false
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === usernameInput.value && users[i].password === passwordInput.value) {
                result = true
                break
            }
        }
        if(result){
            localStorage.setItem('USERS',JSON.stringify(user))
            localStorage.setItem('USERS2',usernameInput.value)
            window.location.replace("index2.html")
        }
        else{
            alert("Username or password is incorrect, please type correctly")
        }
    }
}
