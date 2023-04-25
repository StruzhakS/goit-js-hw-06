const textInput = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

textInput.addEventListener(
  'input',
  evt => (spanText.style.fontSize = `${Number(evt.currentTarget.value)}px`)
);
