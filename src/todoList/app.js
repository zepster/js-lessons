const formElement = document
  .querySelector('#form');

const inputElement = document
  .querySelector('#task');

const ulElement = document
  .querySelector('#tasks');

const filterButtons = document
  .querySelectorAll('button[action]');

const totListElement = document
  .querySelector('#toto-list');

function onInputChange(event) {
  console.log(event.target.value);
}

function onFormSubmit(event) {
  event.preventDefault();
  const value = inputElement.value.trim();
  if (!value) { return; }
  const liElement = createElement('li', value);
  ulElement.appendChild(liElement);
  inputElement.value = '';
}

function createElement(elementName, elementText) {
  const newElement = document
    .createElement(elementName);
  newElement.innerText = elementText;
  return newElement;
}

function onUlListClick(event) {
  const target = event.target;
  target.toggleAttribute('completed');
}

function onFilterButtonClick(event) {
  const target = event.target;
  const action = target.getAttribute('action');
  totListElement.setAttribute('filter', action);
}

inputElement
  .addEventListener('input', onInputChange);


formElement
  .addEventListener('submit', onFormSubmit);

ulElement.addEventListener('click', onUlListClick);

filterButtons.forEach((buttonElement) => {
  buttonElement.addEventListener('click', onFilterButtonClick);
});
