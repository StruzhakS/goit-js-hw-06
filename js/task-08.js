const formSubmitRef = document.querySelector('.login-form')
// console.log(formSubmitRef);
const formUserEmail = document.querySelector('[name=email]')
// console.log(formUserEmail.value);
const formUserPass = document.querySelector('[name=password]')
// console.log(formUserPass.value);
formSubmitRef.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = {
        username: evt.currentTarget.elements[0].value,
        password: evt.currentTarget.elements[1].value
    }
    if (evt.currentTarget.elements[0].value === '') {
        window.alert("Введіть, будь ласка, свою пошту")
    }
    if (evt.currentTarget.elements[1].value === 
        '') {
        window.alert("Введіть, будь ласка, пароль")
        
    }
    
    // console.log(evt.currentTarget.elements[0].value);
    // console.log(evt.currentTarget.elements[1].value);
    console.log(formData);
    evt.currentTarget.reset();
})
