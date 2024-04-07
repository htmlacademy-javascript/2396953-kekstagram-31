import { REMOVE_MESSAGE_TIMEOUT } from './const.js';

export const showMessage = (el, text) => {
  const dataSuccessMessage = el.cloneNode(true);
  document.body.append(dataSuccessMessage);
  if (text) {
    document.querySelector('h2').textContent = text;
  }
  setTimeout(() => {
    dataSuccessMessage.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

export const submitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Сохраняю...'
};

const buttonPictureFormSubmit = document.querySelector('#upload-submit');
export const textButton = (boolean, text) => {
  buttonPictureFormSubmit.disabled = boolean;
  buttonPictureFormSubmit.textContent = text;
};
