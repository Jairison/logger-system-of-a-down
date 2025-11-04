
const username = document.querySelector('#username-login')
const password = document.querySelector('#password-login')
const checkbox = document.querySelector('#checkbox-login')
const button  = document.querySelector('#button-login')

button.addEventListener('click', (event) => {

   const usernameValue = username.value;
   const passwordValue = password.value;

   if (usernameValue === '' || passwordValue === '') {
    event.preventDefault();
    alert('Please fill in all fields!');
    return;
   }

   if (usernameValue !== 'Jairison' || passwordValue !== '1010') {
    event.preventDefault();
    alert('Incorrect username or password');
    return;
   }

   alert('Access granted');
})