const textInput = document.querySelector("#validation-input");
console.dir(textInput.textContent.length);
textInput.addEventListener('blur', (event) => {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length < 6) {
        textInput.classList.add('invalid')
       
}  else {textInput.classList.replace('invalid', 'valid')

        }})








