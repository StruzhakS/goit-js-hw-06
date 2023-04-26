const formSubmitRef = document.querySelector('.login-form');
const formUserEmail = document.querySelector('[name=email]');
const formUserPass = document.querySelector('[name=password]');
formSubmitRef.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = {
    username: formUserEmail.value,
    password: formUserPass.value,
  };
  if (formUserEmail.value === '') {
    alert('Введіть, будь ласка, свою пошту');
    return;
  } else if (formUserPass.value === '') {
    alert('Введіть, будь ласка, пароль');
    return;
  }
  console.log(formData);
  evt.currentTarget.reset();
});
