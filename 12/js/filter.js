import { NUMBER_RANDOM_PHOTOS } from './const.js';
const filterButtons = document.querySelector('.img-filters__form');
const picturesContainer = document.querySelector('.pictures');

const resret = (arr) => {
  arr.forEach((picture) => {
    picture.remove();
  });
};

const addHidden = (arr) => {
  arr.forEach((picture) => {
    picture.classList.add('hidden');
  });
};

const removeHidden = (arr) => {
  arr.forEach((picture) => {
    picture.classList.remove('hidden');
  });
};

const appendChild = (arr, container) => {
  arr.forEach((picture) => {
    container.appendChild(picture);
  });
};

export const filterPhoto = (arrPhoto) => {
  const count = parseInt(arrPhoto.length, 10) + 1;
  filterButtons.addEventListener('click', (event) => {

    if (event.target.classList.contains('img-filters__button')) {
      const childButtons = filterButtons.querySelectorAll('.img-filters__button');
      childButtons.forEach((button) => {
        button.classList.remove('img-filters__button--active');
      });
    }

    if (event.target.id === 'filter-default') {
      event.target.classList.add('img-filters__button--active');

      removeHidden(arrPhoto);

      const picturesArray = Array.from(arrPhoto);
      picturesArray.sort((a, b) => {
        const idA = parseInt(a.querySelector('.picture__img').getAttribute('id'), 10);
        const idB = parseInt(b.querySelector('.picture__img').getAttribute('id'), 10);
        return idA - idB;
      });

      resret(arrPhoto);
      appendChild(picturesArray, picturesContainer);

    } else if (event.target.id === 'filter-random') {
      event.target.classList.add('img-filters__button--active');

      addHidden(arrPhoto);

      const randomNumbers = [];
      while (randomNumbers.length < NUMBER_RANDOM_PHOTOS) {
        const randomNumber = Math.floor(Math.random() * count);
        if (!randomNumbers.includes(randomNumber)) {
          randomNumbers.push(randomNumber);
        }
      }

      randomNumbers.forEach((el, index) => {
        arrPhoto[randomNumbers[index]].classList.remove('hidden');
      });

    } else if (event.target.id === 'filter-discussed') {
      event.target.classList.add('img-filters__button--active');

      removeHidden(arrPhoto);

      const picturesArray = Array.from(arrPhoto);
      picturesArray.sort((a, b) => {
        const commentsA = parseInt(a.querySelector('.picture__comments').textContent, 10);
        const commentsB = parseInt(b.querySelector('.picture__comments').textContent, 10);
        return commentsB - commentsA;
      });

      resret(arrPhoto);
      appendChild(picturesArray, picturesContainer);
    }
  });
};

