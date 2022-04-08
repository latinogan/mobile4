const emailAddress = document.getElementById('mail');
const validatorMessage = document.getElementById('validator-message');
const btn1 = document.querySelector('.get2');
btn1.addEventListener('click', (e) => {
  e.preventDefault();
  if (emailAddress.value !== emailAddress.value.toLowerCase()) {
    validatorMessage.textContent = 'pleas the input have to be in lowercase';
    console.log('helloooo');
  } else {
    validatorMessage.textContent = '';
  }
});