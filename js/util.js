import {BODY} from './const.js';

export function getRandomNumber(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getUniqueRandomNumber(number, usedNumbers) {
  let randomNumber;
  do {
    randomNumber = number;
  } while (usedNumbers.has(randomNumber));
  usedNumbers.add(randomNumber);
  return randomNumber;
}

export function openPopup (popupWrapper) {
  popupWrapper.classList.remove('hidden');
  BODY.classList.add('modal-open');
}

export function closePopup (popupWrapper, callback) {
  popupWrapper.classList.add('hidden');
  BODY.classList.remove('modal-open');
  if (callback) {
    callback();
  }
}

export const closePopupOnEsc = (event, popupWrapper) => {
  if (event.key === 'Escape') {
    closePopup (popupWrapper);
  }
};

export const stopEsc = (event) => {
  if (event.key === 'Escape') {
    event.stopPropagation();
    event.preventDefault();
  }
};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export const throttle = (callback, delayBetweenFrames) => {
  let lastTime = 0;
  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}
