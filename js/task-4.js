
const form = document.querySelector('.login-form');

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const obj = {};

  let isEmpty = false;

  formData.forEach(function (value, key) {
    if (value === '') {
      alert('All form fields must be filled in');
      isEmpty = true;
    } else {
      obj[key] = value.trim();
    }
  });

  if (!isEmpty) {
    console.log(obj);
    form.reset();
  };
}

form.addEventListener('submit', handleSubmit);