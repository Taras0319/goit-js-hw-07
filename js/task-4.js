
const formUser = document.querySelector('.login-form');
formUser.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const email = formUser.elements.email.value;
  const password = formUser.elements.password.value;
  const userData = {
    email,
    password,
  };

  console.log(userData);
  formUser.reset();
}