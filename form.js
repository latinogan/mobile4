


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
