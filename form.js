const emailAddress = document.getElementById('mail');
const validatorMessage = document.getElementById('validator-message');
const btn1 = document.querySelector('.get2');
const form = document.querySelector('#form');

btn1.addEventListener('click', (e) => {
  if (emailAddress.value !== emailAddress.value.toLowerCase()) {
    validatorMessage.textContent = 'pleas the input have to be in lowercase';
    e.preventDefault();
    console.log('helloooo');
  } else {
    validatorMessage.textContent = '';
    form.submit();
  }
});