import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

const LS_KEY = 'feedback-form-state';

// Очистити localStorage, якщо є потреба
// localStorage.removeItem(LS_KEY);

// Завантаження даних з localStorage
const savedFormData = JSON.parse(localStorage.getItem(LS_KEY));

if (savedFormData) {
  emailInput.value = savedFormData.email;
  messageInput.value = savedFormData.message;
}

// Функція для збереження даних у localStorage
function saveFormDataToLocalStorage() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

// Оновлення localStorage за допомогою throttle
form.addEventListener('input', throttle(saveFormDataToLocalStorage, 500));

// Очистка localStorage при подачі форми
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
