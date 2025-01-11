const form = document.querySelector('form');
const successMessage = document.querySelector('.form-alert');

form.addEventListener('submit', (e) => {
    e.preventDefault()

 const firstName = document.getElementById('#first_name').value.trim();
 const lastName = document.querySelector('#last-name').value.trim();
 const email = document.querySelector('#email').value.trim();
 const queryType = document.querySelector('input[name="query-type"]:checked').value.trim();
 const message = document.querySelector('#message').value.trim();
 const checkBox = document.querySelector('#consent').checked;

 const error = document.querySelectorAll('.hidden');

 let formVaild = true;

 //First Name
 if(firstName === '') {
    formVaild = false;
    
    document.querySelector('#first-name + .hidden').style.display = 'block'
    document.querySelector('#first-name').style.border = '1px solid var(--red)';
 }  else {
    document.querySelector('#first-name + .hidden').style.display = 'none';
    document.querySelector('#first-name').style.border = '1px solid var(--Grey500)';
 }

//Last Name
if (lastName === ""){
    formVaild = false;

    document.querySelector('#last-name + .hidden').style.display = 'block';
    document.querySelector('#last-name').style.border = '1px solid var(--red)';
} else {
    document.querySelector('#last-name + .hidden').style.display = 'none';
    document.querySelector('#last-name').style.border = '1px solid var(--Grey500)';
}

//Email
if (!vaildEmail(email)) {
    formVaild = false;

    document.querySelector('#email + .hidden').style.display = 'block';
    document.querySelector('#email').style.border = '1px solid var(--red)';
}else {
    document.querySelector('#email + .hidden').style.display = 'none';
    document.querySelector('#email').style.border = '1px solid var(--Grey500)';
}

// Query
if(!queryType) {
    formVaild = false;

    document.querySelector('#query + .hidden').style.display = 'block';
    document.querySelector('#query').style.border = '1px solid var(--red)'
}else {
    document.querySelector('#email + .hidden').style.display = 'none';
    document.querySelector('#email').style.border = '1px solid var(--Grey500)';
}

//Message
if (message === "") {
    formVaild = false

    document.querySelector('#message + .hidden').style.display = 'block';
    document.querySelector('#message').style.border = '1px solid var(--red)';
}else {
    document.querySelector('#message + .hidden').style.display = 'none';
    document.querySelector('#message').style.border = '1px solid var(--Grey500)';
}

//Checkbox
if(!checkBox) {
    formVaild =false;

    error[5]
}else {
    document.querySelector('#message + .hidden').style.display = 'none';
    document.querySelector('#message').style.border = '1px solid var(--Grey500)';
}

//Form Valid
if (formVaild) {
   successMessage.classList.add('active');
   form.reset();
}

//Email vaildation
function vaildEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

});
