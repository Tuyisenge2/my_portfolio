

function validateForm(){
event.preventDefault(); 
let userErrorMEss=document.querySelector('#userErrorMEss')
let email = document.getElementById('email').value.trim();
let passwordErrorMEss=document.querySelector("#passwordErrorMEss");
let password = document.getElementById('password').value.trim();
userErrorMEss.classList.add("errorDisappear");
passwordErrorMEss.classList.add("errorDisappear");

    if (email === '') {
userErrorMEss.classList.remove("errorDisappear");
userErrorMEss.classList.add("styleuserErrorMEss");
 userErrorMEss.innerHTML='Email cannot be empty';
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        userErrorMEss.classList.remove("errorDisappear");
      userErrorMEss.classList.add("styleuserErrorMEss");
      userErrorMEss.innerHTML='';
        userErrorMEss.innerHTML='Invalid email address';
        return false;
    }

     if (password === ''){
   passwordErrorMEss.classList.remove("errorDisappear");
   passwordErrorMEss.classList.add("styleuserErrorMEss");
    userErrorMEss.innerHTML='';
     passwordErrorMEss.innerHTML='Password cannot be empty';
        return false;
    }
     if (!/[0-9]/.test(password) || !/[A-Z]/.test(password)) {
        passwordErrorMEss.classList.remove("errorDisappear");
        passwordErrorMEss.classList.add("styleuserErrorMEss");
         userErrorMEss.innerHTML='';
         passwordErrorMEss.innerHTML='';
        passwordErrorMEss.innerHTML='Password must have at least one number and one uppercase letter';
        return false;
    }

     return true;
}


