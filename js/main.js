import { createFragment } from './create-fragment.js';
import { createPopup } from './create-popup.js';
import { uploadingPhotos } from './uploading-photos.js';
import { valid } from './form-validation.js';
import { control } from './control.js';
import { getData } from './api.js';
import { showErrorMessage, showSuccessMessage } from './error-message.js';
import { FORM, POPUP_WRAPPER_IMG } from './const.js';
import { closePopup } from './util.js';

const requestServer = async () => {
  try {
    const arrPhoto = await getData();

    createFragment(arrPhoto);
    createPopup(arrPhoto);
  } catch (error) {
    showErrorMessage(error.message);
  }
};

requestServer();
uploadingPhotos();
control();

const sendFormData = async (FORM) => {
  if (!valid) return;

  try {
    const response = await fetch(FORM.action, {
      method: FORM.method,
      body: new FormData(FORM)
    });

    if (response.ok) {
      //FORM.reset(); // Сбрасываем форму
      closePopup(POPUP_WRAPPER_IMG);
      showSuccessMessage();
    } else {
      showErrorMessage();
    }
  } catch (error) {
    console.error('Произошла ошибка:', error);
    showErrorMessage();
  }
}

FORM.addEventListener('submit', function (event) {
  event.preventDefault();
  event.stopPropagation();

  sendFormData(event.target);
});
