import {createEl} from './create-el.js';
import {getRandomNumber} from './util.js';

function createPopup(arrayPhoto) {
  const popupWrapper = document.querySelector('.big-picture');
  const popupImg = popupWrapper.querySelector('img');

  const popupSocialHeader = popupWrapper.querySelector('.social__header');
  const socialHeaderPicture = popupSocialHeader.querySelector('.social__picture');
  const socialHeaderLikesCount = popupSocialHeader.querySelector('.likes-count');

  const popupSocialComments = popupWrapper.querySelector('.social__comments');
  const popupSocialCaption = popupWrapper.querySelector('.social__caption');


  const popupButtons = document.querySelectorAll('.picture');
  const popupClose = document.querySelector('.big-picture__cancel');
  const body = document.querySelector('body');

  const commentShownCount = popupWrapper.querySelector('.social__comment-shown-count');
  const commentTotalCount = popupWrapper.querySelector('.social__comment-total-count');

  function openPopup () {
    popupWrapper.classList.remove('hidden');
    body.classList.add('modal-open');
  }

  function closePopup () {
    popupWrapper.classList.add('hidden');
    body.classList.remove('modal-open');
    popupSocialComments.innerHTML = '';
  }

  popupButtons.forEach((el) => {
    el.addEventListener('click', function() {
      const imgId = el.querySelector('.picture__img').id;
      const imgAvatar = `img/avatar-${getRandomNumber(6, 1)}.svg`;

      let arrEl = arrayPhoto.filter(obj => obj.id === Number(imgId));
      const {url, description, likes, comments} = arrEl[0];

      commentTotalCount.textContent = comments.length;

      5 > comments.length ? commentShownCount.textContent = comments.length : commentShownCount.textContent = 5;

      socialHeaderLikesCount.textContent = likes;
      socialHeaderPicture.src = imgAvatar;
      popupSocialCaption.textContent = description;
      popupImg.src = url;

      const wrapperSocialComments = document.querySelector('.social__comments');

      comments.forEach((data, index) => {
        const {name, avatar, message} = data;

        const element = document.querySelector('#comment').content.querySelector('.social__comment').cloneNode(true);

        element.querySelector('.social__picture').src = avatar;
        element.querySelector('.social__picture').alt = name;
        element.querySelector('.social__text').textContent = message;

        if (index > 4) {return}

        createEl(element, wrapperSocialComments);
      });

      openPopup();
    });
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  });

  popupClose.addEventListener('click', () => {
    closePopup();
  });
}

export {createPopup};
