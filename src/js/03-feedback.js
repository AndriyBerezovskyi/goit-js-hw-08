import throttle from 'lodash.throttle';

const inputRef = document.querySelector('input');
const textRef = document.querySelector('textarea');
const formRef = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';
updateForm();

formRef.addEventListener('input', throttle(formInputHandler, 500));

formRef.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

function formInputHandler() {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({email: inputRef.value, text: textRef.value}));
}

function updateForm() {
  const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedMessage) {
    inputRef.value = JSON.parse(savedMessage).email;
    textRef.value = JSON.parse(savedMessage).text;
  }
} 