import { createFragment } from './create-fragment.js';
import { createPopup } from './create-popup.js';
import { uploadingPhotos } from './uploading-photos.js';
import { valid } from './form-validation.js';
import { control } from './control.js';
import { getData } from './api.js';
import { showMessage, textButton, submitButtonText } from './message.js';
import { FORM, POPUP_WRAPPER_IMG, ERROR_BLOCK, SUCCESS_BLOCK } from './const.js';
import { closePopup } from './util.js';

const requestServer = async () => {
  try {
    const arrPhoto = await getData();

    createFragment(arrPhoto);
    createPopup(arrPhoto);
  } catch (error) {
    showMessage(ERROR_BLOCK);
  }
};

requestServer();
uploadingPhotos();
control();

const sendFormData = async (formElement) => {
  if (valid) {
    try {

      const response = await fetch(formElement.action, {
        method: formElement.method,
        body: new FormData(formElement)
      });
      if (response.ok) {
        textButton(false, submitButtonText.SENDING);
        formElement.reset();
        closePopup(POPUP_WRAPPER_IMG);
        showMessage(SUCCESS_BLOCK);
        textButton(true, submitButtonText.IDLE);
      } else {
        showMessage(ERROR_BLOCK);
      }
    } catch (error) {
      showMessage(ERROR_BLOCK);
    }
  }
};

const formSubmit = (event) => {
  event.preventDefault();
  event.stopPropagation();

  sendFormData(event.target);
};

FORM.addEventListener('submit', formSubmit);
