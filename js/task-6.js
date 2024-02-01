const controls = document.getElementById('controls');
const boxesContainer = document.getElementById('boxes');

controls.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
  if (event.target.dataset.create) {
    createBoxes();
  } else if (event.target.dataset.destroy) {
    destroyBoxes();
  }
}

function createBoxes() {
  const input = controls.querySelector('input');
  const amount = Number(input.value);

  if (amount < 1 || amount > 100 || isNaN(amount)) {
    return;
  }

  clearBoxes();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }

  input.value = '';
}

function destroyBoxes() {
  clearBoxes();
}

function clearBoxes() {
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}