
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = event.target.elements.email;
  const passwordInput = event.target.elements.password;

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(formData);

    event.target.reset();
  }
});