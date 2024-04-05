import {arrayPhoto} from './array-photo.js';
import {createFragment} from './create-fragment.js';
import {createPopup} from './create-popup.js';
import {uploadingPhotos} from './uploading-photos.js';
import {valid} from './form-validation.js';

createFragment(arrayPhoto);
createPopup(arrayPhoto);

uploadingPhotos();


document.querySelector('#upload-submit').addEventListener('click', (event) => {
  valid ? document.querySelector('#upload-select-image').submit() : event.preventDefault();
});
