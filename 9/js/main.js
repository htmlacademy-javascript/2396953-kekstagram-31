import { arrayPhoto } from './array-photo.js';
import { createFragment } from './create-fragment.js';
import { createPopup } from './create-popup.js';
import { uploadingPhotos } from './uploading-photos.js';
import { valid } from './form-validation.js';
import { control } from './control.js';

createFragment(arrayPhoto);
createPopup(arrayPhoto);

uploadingPhotos();

document.querySelector('#upload-submit').addEventListener('click', (event) => {
  event.preventDefault();
  if (valid) {
    document.querySelector('#upload-select-image').submit();
  }
});

control();
