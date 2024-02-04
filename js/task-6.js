const boxesContainer = document.querySelector('#boxes');
const boxCountInput = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
  boxCountInput.value = '';
}

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  let size = 30;
  if (amount > 0 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      boxesContainer.appendChild(box);

      size += 10;
    }

    boxCountInput.value = '';
  }
}

function onCreateClick() {
  const amount = parseInt(boxCountInput.value);
  createBoxes(amount);
}

createButton.addEventListener('click', onCreateClick);
destroyButton.addEventListener('click', destroyBoxes);