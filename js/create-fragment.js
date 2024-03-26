function createFragment(arrayPhoto) {
  const pools = document.querySelector('.pictures');

  const template = document.querySelector('#picture').content.querySelector('.picture');

  const fragment = document.createDocumentFragment();

  arrayPhoto.forEach((data) => {
    const {url, description, likes, comments} = data;

    const element = template.cloneNode(true);

    element.querySelector('.picture__likes').textContent = likes;
    element.querySelector('.picture__img').src = url;
    element.querySelector('.picture__img').alt = description;

    comments.forEach((item) => {
      const {message} = item;
      element.querySelector('.picture__comments').textContent = message;
    });

    fragment.appendChild(element);
  });

  pools.appendChild(fragment);
}

export {createFragment};
