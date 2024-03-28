function createPopup(arrayPhoto) {
  const popupWrapper = document.querySelector(".big-picture");
  const popupImg = popupWrapper.querySelector("img");
  const popupLikesCount = popupWrapper.querySelector(".likes-count");

  const popupButtons = document.querySelectorAll(".picture");
  const popupClose = document.querySelector(".big-picture__cancel");
  const body = document.querySelector("body");

  function openPopup () {
    popupWrapper.classList.remove('hidden');
    body.classList.add('modal-open');
  }

  function closePopup () {
    popupWrapper.classList.add('hidden');
    body.classList.remove('modal-open');
  }

  popupButtons.forEach((el) => {
    el.addEventListener('click', function(event) {
      openPopup();

      const img = el.querySelector('.picture__img');
      const imgId = el.querySelector('.picture__img').id;
      const comments = el.querySelectorAll('.picture__comments');
      const likes = parseInt(el.querySelector('.picture__likes').textContent);

      popupImg.src = img.src;
      popupLikesCount.textContent = likes;

      console.log(arrayPhoto);

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
