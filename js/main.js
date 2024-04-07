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

const sendFormData = async (formElement) => {
  if (!valid) {
    return;
  }

  try {
    const response = await fetch(formElement.action, {
      method: formElement.method,
      body: new FormData(formElement)
    });

    if (response.ok) {
      //FORM.reset(); // Сбрасываем форму
      closePopup(POPUP_WRAPPER_IMG);
      showSuccessMessage();
    } else {
      showErrorMessage();
    }
  } catch (error) {
    showErrorMessage();
  }
};

const formSubmit = (event) => {
  event.preventDefault();
  event.stopPropagation();

  sendFormData(event.target);
};

FORM.addEventListener('submit', formSubmit);
