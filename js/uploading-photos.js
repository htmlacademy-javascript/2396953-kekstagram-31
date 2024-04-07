import { openPopup, closePopup, closePopupOnEsc } from './util.js';
import { FORM, POPUP_WRAPPER_IMG } from './const.js';

function uploadingPhotos() {
  const popupClose = document.querySelector('.img-upload .img-upload__cancel'),
    imgInp = document.querySelector('#upload-file'),
    imgUpload = document.querySelector('.img-upload .img-upload__preview img'),
    effectsItems = document.querySelectorAll('.effects__item span');

  FORM.onchange = () => {
    const [file] = imgInp.files;
    if (!file) {
      return;
    }

    const fileUrl = URL.createObjectURL(file);
    imgUpload.src = fileUrl;
    openPopup(POPUP_WRAPPER_IMG);

    effectsItems.forEach((effectsItem) => {
      effectsItem.style.backgroundImage = `url('${fileUrl}')`;
    });
  };

  popupClose.onclick = () => closePopup(POPUP_WRAPPER_IMG);
  document.addEventListener('keydown', (event) => {
    closePopupOnEsc(event, POPUP_WRAPPER_IMG);
  });
}

export { uploadingPhotos };
