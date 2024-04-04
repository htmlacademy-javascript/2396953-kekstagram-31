import {BODY} from './const.js';

function getRandomNumber(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUniqueRandomNumber(number, usedNumbers) {
  let randomNumber;
  do {
    randomNumber = number;
  } while (usedNumbers.has(randomNumber));
  usedNumbers.add(randomNumber);
  return randomNumber;
}

function openPopup (popupWrapper) {
  popupWrapper.classList.remove('hidden');
  BODY.classList.add('modal-open');
}

function closePopup (popupWrapper, callback) {
  popupWrapper.classList.add('hidden');
  BODY.classList.remove('modal-open');
  if (callback) {
    callback();
  }
}

const closePopupOnEsc = (event, popupWrapper) => {
  if (event.key === 'Escape') {
    closePopup (popupWrapper);
  }
};

const stopEsc = (event) => {
  if (event.key === 'Escape') {
    event.stopPropagation();
  }
}

export {getRandomNumber, getUniqueRandomNumber, openPopup, closePopup, closePopupOnEsc, stopEsc};
