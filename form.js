const emailAddress = document.getElementById('mail');
const templateForm = document.getElementById('form');
const validatorMessage = document.getElementById('validator-message');
templateForm.addEventListener('submit', (e) => {
  if (emailAddress.value !== emailAddress.value.toLoweCase()) {
    e.preventDefault();
    validatorMessage.textContent = 'pleas add input in lowercase';
  } else {
    validatorMessage.textContent = '';
  }
});