function validateForm() {
    event.preventDefault();
    var firstName = document.getElementById('fname').value.trim();
    var lastName = document.getElementById('lname').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    let fnameErr=document.getElementById('fnameErr');
   let lnameErr=document.getElementById('lnameErr');
   let emailErr =document.getElementById('emailErr');
   let passwordErr=document.getElementById('passwordErr');
    if (firstName === '') {
        fnameErr.classList.remove("errorDisappear");
        fnameErr.classList.add("styleuserErrorMEss");
        fnameErr.innerHTML='First Name cannot be empty';
        return  false;
    }

    if (lastName === '') {
        fnameErr.innerHTML="";
        fnameErr.classList.add("errorDisappear");
        lnameErr.classList.remove("errorDisappear");
        lnameErr.classList.add("styleuserErrorMEss");
        lnameErr.innerHTML='Last Name cannot be empty';
        return false;
    }

    if (email === '') {
        lnameErr.classList.add("errorDisappear");
          emailErr.classList.remove("errorDisappear");
        emailErr.classList.add("styleuserErrorMEss");
        emailErr.innerHTML='Email cannot be empty';
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        
        lnameErr.classList.add("errorDisappear");
        emailErr.classList.remove("errorDisappear");
        emailErr.classList.add("styleuserErrorMEss");
        emailErr.innerHTML='Invalid email address';
        return false;
    }

    if (password === '') {
        emailErr.classList.add("errorDisappear");
        lnameErr.classList.add("errorDisappear");
        fnameErr.classList.add("errorDisappear");
          passwordErr.classList.remove("errorDisappear");
        passwordErr.classList.add("styleuserErrorMEss");
        passwordErr.innerHTML='Password cannot be empty';
        return false;
    }

    if (!/[0-9]/.test(password) || !/[A-Z]/.test(password)) {
        passwordErr.innerHTML="";
        emailErr.classList.add("errorDisappear");
        lnameErr.classList.add("errorDisappear");
        fnameErr.classList.add("errorDisappear");
        passwordErr.classList.remove("errorDisappear");
        passwordErr.classList.add("styleuserErrorMEss");
        passwordErr.innerHTML='Password must have at least one number and one uppercase letter';
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}
