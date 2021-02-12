const form  = document.getElementsByTagName('form')[0];

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

const lnameError = document.querySelector('#fname + span.error');
const fnameError = document.querySelector('#lname + span.error');
const emailError = document.querySelector('#mail + span.error');
const passwordError = document.querySelector('#password + span.error');

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    emailError.innerHTML = ''; // Reset the content of the message
  } else {
    emailError.innerHTML = 'Looks like this is not an email';
  }
});


document.theForm.submit();

form.style.display = 'none';

var text = document.createElement('span');

text.appendChild(document.createTextNode('Thank you!'));

form.parentNode.insertBefore(text, form);
