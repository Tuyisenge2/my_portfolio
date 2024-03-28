
function validateForm() {
    event.preventDefault();

    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    let EmailError=document.getElementById('EmailError');
  let messageError=document.getElementById('messageError');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        EmailError.classList.remove('errorDisappear');
        EmailError.classList.add('styleuserErrorMEss');
        EmailError.innerHTML='Invalid email address';
        return false;
    }

    if (message === '') {
        EmailError.classList.add('errorDisappear');
        messageError.classList.remove('errorDisappear');
        messageError.classList.add('styleuserErrorMEss');
        messageError.innerHTML="Message can't be empty";
        return false;
    }

    return true;
}
