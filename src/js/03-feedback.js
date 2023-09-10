import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

const LS_KEY = 'feedback-form-state';


const savedFormData = JSON.parse(localStorage.getItem(LS_KEY));

if (savedFormData) {
  emailInput.value = savedFormData.email;
  messageInput.value = savedFormData.message;
}


function saveFormDataToLocalStorage() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}


form.addEventListener('input', throttle(saveFormDataToLocalStorage, 500));


form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);

  localStorage.removeItem(LS_KEY);
  form.reset();
});
