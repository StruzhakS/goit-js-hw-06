const formSubmitRef = document.querySelector('.login-form');
const formUserEmail = document.querySelector('[name=email]');
const formUserPass = document.querySelector('[name=password]');
formSubmitRef.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = {
    username: evt.currentTarget.elements[0].value,
    password: evt.currentTarget.elements[1].value,
  };
  if (evt.currentTarget.elements[0].value === '') {
    window.alert('Введіть, будь ласка, свою пошту');
    return;
  } else if (evt.currentTarget.elements[1].value === '') {
    window.alert('Введіть, будь ласка, пароль');
    return;
  }
  console.log(formData);
  evt.currentTarget.reset();
});
