import {stopEsc} from './util.js';

let valid = true;
const descriptionInput = document.querySelector('.text__description');
const descriptionMaxLength = descriptionInput.getAttribute('maxlength');
const hashtagsInput = document.querySelector('.text__hashtags');
const errorWrapper = document.querySelector('.img-upload__field-wrapper--error');
const hashtagsMaxValue = 5;
const hashtagMaxLength = 20;

const displayError = (errorMessage) => {
  valid = false;
  errorWrapper.textContent = errorMessage;
  errorWrapper.style.display = 'block';
};

hashtagsInput.addEventListener('input', () => {
  valid = true;
  const noEmptyStringRex = /\S/;
  const hashtags = hashtagsInput.value.trim().toLowerCase().split(' ').filter(noEmptyStringRex.test.bind(noEmptyStringRex));

  const uniqueHashtags = new Set(hashtags);

  for (const hashtag of hashtags) {
    if (hashtag.length === 0) {
      continue;
    }

    if (!hashtag.startsWith('#')) {
      displayError('Введён невалидный хэштег');
      return;
    }

    if (hashtag.length === 1) {
      displayError('Введён невалидный хэштег');
      return;
    }

    if (hashtag.length > hashtagMaxLength) {
      displayError('Введён невалидный хэштег');
      return;
    }

    if (!/^[a-zA-Zа-яА-Я0-9]+$/.test(hashtag.slice(1))) {
      displayError('Введён невалидный хэштег');
      return;
    }

    if (uniqueHashtags.size !== hashtags.length) {
      displayError('Хэштеги повторяются');
      return;
    }

    if (hashtags.length > hashtagsMaxValue) {
      displayError('Превышено количество хэштегов');
      return;
    }
  }

  errorWrapper.style.display = 'none';

  hashtagsInput.addEventListener('keydown', stopEsc);
});

descriptionInput.addEventListener('input', () => {
  if (descriptionInput.length > descriptionMaxLength) {
    displayError(`длина комментария больше ${descriptionMaxLength} символов`);
  }
});

export {valid};
