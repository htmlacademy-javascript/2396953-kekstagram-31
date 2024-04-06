import {openPopup, closePopup, closePopupOnEsc} from './util.js';

function uploadingPhotos () {
  const popupWrapper = document.querySelector('.img-upload .img-upload__overlay'),
    popupClose = document.querySelector('.img-upload .img-upload__cancel'),
    imgForm = document.querySelector('#upload-select-image'),
    imgInp = document.querySelector('#upload-file'),
    imgUpload = document.querySelector('.img-upload .img-upload__preview img'),
    effectsItems = document.querySelectorAll('.effects__item span');

  imgForm.onchange = () => {
    const [file] = imgInp.files;
    if (!file) {
      return;
    }

    const fileUrl = URL.createObjectURL(file);
    imgUpload.src = fileUrl;
    openPopup(popupWrapper);

    effectsItems.forEach((effectsItem) => {
      effectsItem.style.backgroundImage = `url('${fileUrl}')`;
    });
  };

  popupClose.onclick = () => closePopup(popupWrapper);
  document.addEventListener('keydown', (event) => {
    closePopupOnEsc(event, popupWrapper);
  });
}

export {uploadingPhotos};
