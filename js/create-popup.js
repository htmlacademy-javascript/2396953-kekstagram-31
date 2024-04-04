import {createEl} from './create-el.js';
import {getRandomNumber, openPopup, closePopup} from './util.js';

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

  const commentloader = popupWrapper.querySelector('.comments-loader');
  const commentShownCount = popupWrapper.querySelector('.social__comment-shown-count');
  const commentTotalCount = popupWrapper.querySelector('.social__comment-total-count');

  popupButtons.forEach((el) => {
    el.onclick = () => {
      const imgId = el.querySelector('.picture__img').id;
      const imgAvatar = `img/avatar-${getRandomNumber(6, 1)}.svg`;
      const arrEl = arrayPhoto.filter((obj) =>
        obj.id === Number(imgId)
      );

      const {url, description, likes, comments} = arrEl[0];
      commentTotalCount.textContent = comments.length;

      if (5 >= comments.length) {
        commentShownCount.textContent = comments.length;
        commentloader.classList.add('hidden');
      } else {
        commentloader.classList.remove('hidden');
        commentShownCount.textContent = 5;
      }

      socialHeaderLikesCount.textContent = likes;
      socialHeaderPicture.src = imgAvatar;
      popupSocialCaption.textContent = description;
      popupImg.src = url;
      const wrapperSocialComments = document.querySelector('.social__comments');

      comments.forEach((data) => {
        const {name, avatar, message} = data;
        const element = document.querySelector('#comment').content.querySelector('.social__comment').cloneNode(true);

        element.querySelector('.social__picture').src = avatar;
        element.querySelector('.social__picture').alt = name;
        element.querySelector('.social__text').textContent = message;

        createEl(element, wrapperSocialComments);
      });

      const socialComments = document.querySelectorAll('.social__comment');

      socialComments.forEach((socialComment, index) => {
        if (index > 4) {
          socialComment.classList.add('hidden');
        }
      });

      openPopup(popupWrapper);
    };
  });

  function resetPopup () {
    popupSocialComments.innerHTML = '';
  }

  popupClose.onclick = () => closePopup(popupWrapper, resetPopup);

  commentloader.onclick = () => {
    const socialCommentsHidden = document.querySelectorAll('.social__comment.hidden');

    socialCommentsHidden.forEach((el, index) => {
      if (index < 5) {
        el.classList.remove('hidden');
      }
    });

    const count = commentShownCount.textContent;
    commentShownCount.textContent = Number(count) + 5;

    if (Number(commentShownCount.textContent) >= Number(commentTotalCount.textContent)) {
      commentShownCount.textContent = Number(commentTotalCount.textContent);
      commentloader.classList.add('hidden');
    }
  };
}

export {createPopup};
