import {arrayPhoto} from './array-photo.js';
import {createFragment} from './create-fragment.js';
import {createPopup} from './create-popup.js';
import {uploadingPhotos} from './uploading-photos.js';
import {validation} from './form-validation.js';

createFragment(arrayPhoto);
createPopup(arrayPhoto);

uploadingPhotos();
validation();


// const uploadForm = document.querySelector('.img-upload__form');
// const hashtagElement = document.querySelector('[name="hashtags"]');
// const descriptionElement = document.querySelector('[name="description"]');

//   const pristine = new Pristine(uploadForm, {
//     // classTo: 'img-upload__field-wrapper',
//     // errorTextParent: 'img-upload__field-wrapper',
//     // errorTextClass: 'img-upload__field-wrapper--error',
//   });

// uploadForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();

//   const isValid = pristine.validate();
//   if (isValid) {
//     console.log('Можно отправлять');
//   } else {
//     console.log('Форма невалидна');
//   }
// });


