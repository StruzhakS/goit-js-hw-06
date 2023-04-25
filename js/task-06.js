const textInput = document.querySelector('#validation-input');
let validNumber = document.querySelector('[data-length]');
validNumber = Number(validNumber.dataset.length);
textInput.addEventListener('blur', event => {
  const invalidNumber = event.currentTarget.value.length;
  if (invalidNumber) {
    textInput.classList.add('invalid');
  }
  if (invalidNumber === validNumber) {
    textInput.classList.replace('invalid', 'valid');
  }
  if (invalidNumber !== validNumber) {
    textInput.classList.replace('valid', 'invalid');
  }
});
