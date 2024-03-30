import {createEl} from './create-el.js';

function createFragment(arrayPhoto) {
  const wrapper = document.querySelector('.pictures');

  arrayPhoto.forEach((data) => {
    const {id, url, description, likes, comments} = data;

    const element = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);

    element.querySelector('.picture__img').id = id;
    element.querySelector('.picture__likes').textContent = likes;
    element.querySelector('.picture__img').src = url;
    element.querySelector('.picture__img').alt = description;
    element.querySelector('.picture__comments').textContent = comments.length;

    createEl(element, wrapper);
  });
}

export {createFragment};
