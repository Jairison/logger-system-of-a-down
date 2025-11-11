
const username = document.querySelector('#username-login')
const password = document.querySelector('#password-login')
const checkbox = document.querySelector('#checkbox')
const button  = document.querySelector('#button-login')

button.addEventListener('click', (event) => {
    event.preventDefault();

   const usernameValue = username.value;
   const passwordValue = password.value;

   if (usernameValue === '' || passwordValue === '') {

    alert('Please fill in all fields!');
    return;
   }

   const usernameSession = sessionStorage.getItem('username')
   const passwordSession = sessionStorage.getItem('password')

   if (usernameValue !== usernameSession || passwordValue !== passwordSession){
      alert('Incorrect username or password!')
      return;
   }

   alert('Access granted');

   window.location.href = './home.html';

});

checkbox.addEventListener('change', () => {
 if(checkbox.checked) {
   password.type ='text'
 } else{
   password.type ='password'
 }

   

})